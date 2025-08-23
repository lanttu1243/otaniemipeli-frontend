"use client";
import React, {useState} from 'react';
import { LoginInfo } from "@/utils/types";
import {postToLogin} from "@/utils/fetchers";

export default function LoginComponent({setLogin} : {setLogin: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    username: '',
    password: ''
  });

  function handleLogin() {
    postToLogin(loginInfo).then(
      (body) => {
        if (!body) {
          console.error("Login failed: No response body");
          return;
        }
        let session = body.session;
        if (!session || !session.session_hash) {
          console.error("Login failed: Invalid session data", body);
          return;
        }
        localStorage.setItem('auth_token', session.session_hash);
        setLogin(true);
      }
    );
  }

  return (
    <form onSubmit={e => e.preventDefault()}
          className="flex flex-col justify-center gap-2">
      <div>
        <p className="text-gray-700 text-center">Käyttäjänimi</p>
        <input className="box" type="text" tabIndex={1} required={true}
               onChange={e => setLoginInfo(
                 {
                   ...loginInfo,
                   username: e.target.value,
                 })} />
        <p className="text-gray-700 text-center">Salasana</p>
        <input className="box" type="password" tabIndex={2} required={true}
                onChange={e => setLoginInfo(
                  {
                    ...loginInfo,
                    password: e.target.value,
                  })}/>
      </div>
      <div className="button select-none" tabIndex={3} onClick={() => handleLogin()}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          handleLogin();
        }
      }}>
        <p>Kirjaudu Sisään</p>
      </div>
      <a className="text-amber-800 hover:text-amber-600 underline select-none"
      href="/rekisteroidy">Rekisteröidy</a>
      <a className="button" href="/follow" tabIndex={4}>
        <p>Jatka kirjautumatta</p>
      </a>
    </form>
  )
}
