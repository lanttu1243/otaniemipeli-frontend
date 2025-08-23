"use client";
import {useContext, useEffect, useState} from "react";
import {useSocket} from "@/app/(pages)/referee/template";

export default function Home() {
  const socket = useSocket();
  const [ip, setIp] = useState<string>('unknown');
  const [text, setText] = useState<string>('');

  const handleSend = () => {
    if (socket) {
      let message = {
        message_type: "message",
        content: `Hello, this is a test message from ${ip}!`,
        value: -100,
        timestamp: new Date().toISOString(),
      }
      console.log(message);
      socket.emit('message', message);
    }
  }

  // move previous top-level fetch here
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL_BASE;
    if (!base) {
      console.error('No NEXT_PUBLIC_API_URL_BASE env var');
      return;
    }
    fetch(base)
      .then(res => res.text())
      .then(setText)
      .catch(err => console.error('Failed to fetch base:', err));
  }, []);

  useEffect(() => {
    fetch("/api/ip")
      .then(res => res.json())
      .then(data => setIp(data.ip ?? 'unknown'))
      .catch(() => setIp('unknown'));
  }, []);

  return (
    <div className="flex flex-col items-center gap-3.5 max-h-[90dvh] sm:px-10 sm:py-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-gray-900 text-2xl font-bold">
        Tervetuloa Otaniemipeli-Adminiin!
      </h1>
      <p className="text-gray-700">
        {text}
      </p>

    </div>
  );
}
