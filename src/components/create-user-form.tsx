"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SessionInfo,
  UserCreateInfo,
  UserTypeEnum,
  UserTypes,
} from "@/utils/types";
import { create_user, verifyUserTypes } from "@/utils/fetchers";
import { useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {useLogKeydown} from "@/components/log-keydown";

export default function CreateUserForm({
  setLoginAction,
  firstUser = false,
  className,
}: {
  setLoginAction?: React.Dispatch<React.SetStateAction<boolean>>;
  firstUser?: boolean;
  className?: string;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [session, setSession] = useState<SessionInfo | null>(null);
  useLogKeydown()
  const [user, setUser] = useState<UserCreateInfo>({
    username: "",
    email: "",
    password: "",
    user_type: firstUser ? "admin" : "team",
  });
  const [passwordConfirm, setPasswordConfirm] = useState<{
    pw: string;
    pw_confirm: string;
  }>({
    pw: "",
    pw_confirm: "",
  });
  const [pwsMatch, setPwsMatch] = useState<boolean>(false);

  useEffect(() => {
    if (firstUser) return;
    const token = localStorage.getItem("auth_token");
    verifyUserTypes(token ?? "").then((ses) => {
      if (ses) setSession(ses);
    });
  }, [firstUser]);

  useEffect(() => {
    setPwsMatch(
      passwordConfirm.pw === passwordConfirm.pw_confirm &&
        passwordConfirm.pw.length > 0,
    );
  }, [passwordConfirm]);

  const handleSend = useCallback(() => {
    if (!pwsMatch) {
      console.log("Passwords do not match");
      return;
    }
    if (!firstUser || !setLoginAction) {
      const token = localStorage.getItem("auth_token");
      create_user(user, token ?? "").then();
    } else {
      create_user(user).then((res) => {
        if (res && setLoginAction) {
          localStorage.setItem("auth_token", res.session.session_hash);
          setLoginAction(true);
        }
      });
    }
    formRef.current?.reset();
    setPasswordConfirm({ pw: "", pw_confirm: "" });
    setUser((u) => ({ ...u, username: "", email: "", password: "" }));
  }, [firstUser, setLoginAction, user, pwsMatch]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSend();
  };
  async function checkSource(e: KeyboardEvent) {
    console.log(e.DOM_KEY_LOCATION_NUMPAD)
  }

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token && setLoginAction) {
      verifyUserTypes(token).then((session) => {
        if (session) {
          setLoginAction(true);
          router.refresh();
        } else {
          setLoginAction(false);
          router.refresh();
        }
      });
    }
  }, [router, setLoginAction]);
  return (
    <div className={`${className} flex flex-col`}>
      <h1>Luo {firstUser && "ensimmäinen"} käyttäjä</h1>
      <form className="flex flex-col gap-3.5" ref={formRef} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Käyttäjänimi"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Sähköposti"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Salasana"
          onChange={(e) => {
            const pw = e.target.value;
            setPasswordConfirm((p) => ({ ...p, pw }));
            setUser((u) => ({ ...u, password: pw }));
          }}
        />
        <input
          type="password"
          placeholder="Vahvista salasana"
          onChange={(e) => {
            setPasswordConfirm({
              ...passwordConfirm,
              pw_confirm: e.target.value,
            });
          }}
        />
        {!pwsMatch && passwordConfirm.pw.length != 0 && (
          <p className="text-red-700">Salasanat eivät täsmää</p>
        )}
        {!firstUser && (
          <>
            <Menu>
              <MenuButton className="w-full button center text-base">
                Käyttäjätyyppi
              </MenuButton>
              <MenuItems
                anchor="right"
                className="text-base text-gray-900 font-bold rounded-2xl z-50"
              >
                {(session ? session.user_types.user_types : UserTypes).map(
                  (option) => (
                    <MenuItem key={option}>
                      <div
                        className="w-full
                      bg-juvu-sini-800
                      data-focus:bg-juvu-sini-600
                      hover:bg-juvu-sini-600 p-3
                      text-juvu-kulta
                      hover:text-juvu-sini-800
                      select-none"
                        onClick={() => setUser({ ...user, user_type: option })}
                      >
                        <p>{UserTypeEnum[option]}</p>
                      </div>
                    </MenuItem>
                  ),
                )}
              </MenuItems>
            </Menu>
          </>
        )}
        <p className="w-full text-center font-bold text-lg">
          {UserTypeEnum[user.user_type]}
        </p>
        <button type="submit" className="button text-lg">
          Luo käyttäjä
        </button>
      </form>
    </div>
  );
}
