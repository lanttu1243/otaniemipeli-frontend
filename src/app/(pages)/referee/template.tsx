"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { io, Socket } from "socket.io-client";

export const SocketContext = createContext<Socket | null>(null);
export function useSocket() {
  return useContext(SocketContext);
}

export default function RefereeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [socket, setSocket] = useState<Socket | null>(null);
  const mounted = useRef(false); // guard against double-mount in dev

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const run = async () => {
      try {
        const s = io(process.env.NEXT_PUBLIC_API_URL_BASE + "/referee", {
          transports: ["websocket", "polling"],
          auth: { token: localStorage.getItem("auth_token") || "" },
          withCredentials: true,
        });

        s.on("connect", () => {
          console.log("Socket connected:", s.id);
        });

        s.on("connect_error", (err) => {
          console.error("Socket connect_error:", err.message);
        });

        setSocket(s);
      } catch (e) {
        console.error("Init error:", e);
      }
    };

    run().then();

    // cleanup
    return () => {
      mounted.current = true;
      setSocket((prev) => {
        prev?.off(); // remove listeners
        prev?.close();
        return null;
      });
    };
  }, [pathname, router]);

  useEffect(() => {
    if (!socket) return;
    const checkSession = async () => {
      const auth: SocketAuth = {
        token: localStorage.getItem("auth_token") || "",
      };
      socket.emit("verify-login", auth);
      console.log("Verifying session...");
    };
    setTimeout(checkSession, 60000);
  }, [socket]);

  return (
    <>
      <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    </>
  );
}
