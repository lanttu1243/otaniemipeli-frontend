"use client";
import React, {useEffect, useRef, useState} from "react";
import {UserCreateInfo, UserTypeEnum, UserTypes} from "@/utils/types";
import {create_user, verifyUserTypes} from "@/utils/fetchers";
import {useRouter} from "next/navigation";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

export default function createUserForm({
  setLoginAction,
  firstUser = false,
} : {
  setLoginAction?: React.Dispatch<React.SetStateAction<boolean>>,
  firstUser?: boolean
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [user, setUser] = useState<UserCreateInfo>({
    username: "",
    email: "",
    password: "",
    user_type: "admin"
  });
  const [passwordConfirm, setPasswordConfirm] = useState<{
    pw: string,
    pw_confirm: string
  }>({
    pw: "",
    pw_confirm: ""
  });
  const [pwsMatch, setPwsMatch] = useState<boolean>(true);

  useEffect(() => {
    if (passwordConfirm.pw !== passwordConfirm.pw_confirm) {
      setPwsMatch(false);
    }
    else {
      setPwsMatch(true);
      setUser({...user, password: passwordConfirm.pw});
    }
  }, [pwsMatch, passwordConfirm]);

  const handleSend = () => {
    if (!firstUser || !setLoginAction) {
      let token = localStorage.getItem("auth_token");
      create_user(user, token ?? "").then( (res) => {
        }
      )
    } else {
      create_user(user).then( (res) => {
          if (res && setLoginAction) {
            localStorage.setItem("auth_token", res.session.session_hash);
            setLoginAction(true)
          }
        }
      )
    }
    formRef.current?.reset();
  }

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token && setLoginAction) {
      verifyUserTypes(token).then(
        (session) => {
          if (session) {
            setLoginAction(true)
            router.refresh();
          } else {
            setLoginAction(false)
            router.refresh();
          }
        }
      )
    }
  }, [handleSend]);
  return (
    <div>
      <h1 className="font-bold text-xl">Luo ensimmäinen käyttäjä</h1>
      <form className="flex flex-col gap-3.5" ref={formRef}>
        <input type="text" placeholder="Käyttäjänimi" onChange={(e) => {
          setUser({...user, username: e.target.value});
        }}/>
        <input type="text" placeholder="Sähköposti" onChange={(e) => {
          setUser({...user, email: e.target.value});
        }}/>
        <input type="password" placeholder="Salasana" onChange={(e) => {
          setPasswordConfirm({...passwordConfirm, pw: e.target.value});
        }}/>
        <input type="password" placeholder="Vahvista salasana" onChange={(e) => {
          setPasswordConfirm({...passwordConfirm, pw_confirm: e.target.value});
        }}/>
        {!pwsMatch && <p className="text-red-700">Salasanat eivät täsmää</p>}
        {!firstUser && <><Menu>
          <MenuButton
            className="w-full button center text-base" >Käyttäjätyyppi</MenuButton>
          <MenuItems anchor="right" className="text-base text-gray-900 font-bold rounded-2xl z-50">
            {UserTypes
              .map((option) => (
                <MenuItem key={option}>
                  <div className="w-full bg-amber-800 data-focus:bg-amber-700 hover:bg-amber-600 p-3 text-white select-none"
                       onClick={() =>
                         setUser({...user, user_type: option})}>
                    <p>
                      {UserTypeEnum[option]}
                    </p>
                  </div>
                </MenuItem>
              ))
            }
          </MenuItems>
        </Menu>
        </>}
        <p className="w-full text-center font-bold text-lg">{UserTypeEnum[user.user_type]}</p>
        <div className="button text-lg"
        onClick={handleSend}>
          Luo käyttäjä
        </div>
      </form>
    </div>
  )
}
