"use client";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function SocketTestPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  let message = {
    message_type: "message",
    content: "Hello, this is a test message from the client!",
    value: 1456,
    timestamp: new Date().toISOString(),
  }

  useEffect(() => {
    const s = io("http://localhost:2568/referee", {
      transports: ["websocket", "polling"],
      auth: {token: localStorage.getItem("auth_token") || ""},
      withCredentials: true
    });

    s.on("connect", () => {
      setMessages((m) => [...m, "connected: " + s.id]);
      // send test message to server
      s.emit("message", message);
    });

    s.on("message-back", (data: string) => {
      setMessages((m) => [...m, "got: " + data]);
    });

    s.on("connect_error", (err) => {
      setMessages((m) => [...m, "connect_error: " + err.message]);
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Socket.IO test page</h1>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (socket) socket.emit("message", message);
        }}
        className="button"
      >
        Send "message" again
      </button>
    </div>
  );
}
