"use client";
import LoginComponent from "@/components/login-component";
import {useEffect, useState} from "react";
import SelectMode from "@/components/select-mode";
import {users_exist} from "@/utils/fetchers";
import CreateFirstUser from "@/components/create-user-form";

export default function Home() {
  const [loggedIn, setLogin] = useState<boolean>(false)
  const [firstUserExists, setFirstUserExists] = useState<boolean>(false)

  useEffect(() => {
    users_exist().then(
      (data: boolean) => {
        setFirstUserExists(data);
      }
    ).catch((error) => {
      console.error('Error checking if users exist:', error);
    }
    )
    const userString = localStorage.getItem('auth_token') || '';
    if (userString) {
      setLogin(true)
      setFirstUserExists(true)
    }
  }, [loggedIn, firstUserExists]);

  return (
    <div className="flex flex-col items-center gap-3.5 max-h-[90dvh] sm:px-10 sm:py-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-gray-900 text-2xl font-bold">
        Tervetuloa Otaniemipelin hallintapaneeliin!
      </h1>
      <p>{firstUserExists}</p>
      {loggedIn ? <SelectMode setLogin={setLogin} />
      : (firstUserExists ? <LoginComponent setLogin={setLogin}/> : <CreateFirstUser setLoginAction={setLogin} firstUser={true} />) }
    </div>
  );
}
