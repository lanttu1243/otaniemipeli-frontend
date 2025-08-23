"use client";
import LoginComponent from "@/components/login-component";
import {useEffect, useState} from "react";
import SelectMode from "@/components/select-mode";

export default function Home() {
  const [loggedIn, setLogin] = useState<boolean>(false)

  useEffect(() => {
    const userString = localStorage.getItem('auth_token') || '';
    setLogin(!!userString);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3.5 max-h-[90dvh] sm:px-10 sm:py-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-gray-900 text-2xl font-bold">
        Tervetuloa Otaniemipelin hallintapaneeliin!
      </h1>
      {loggedIn ? <SelectMode setLogin={setLogin} />
      : <LoginComponent setLogin={setLogin}/>}
    </div>
  );
}
