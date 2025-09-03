"use client";
import { SessionInfo, UserTypeEnum } from "@/utils/types";
import { useRouter } from "next/navigation";
import { verifyUserTypes } from "@/utils/fetchers";
import React, { useEffect } from "react";

export default function SelectMode({
  setLoginAction,
}: {
  setLoginAction: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [session, setSession] = React.useState<SessionInfo | null>(null);
  const [, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("auth_token");
    console.log(token);
    if (token) {
      verifyUserTypes(token)
        .then((response) => {
          console.log("Response: ", response);
          if (response) {
            setSession(response);
          } else {
            console.error("User verification failed, redirecting to login.");
            setLoginAction(false);
            localStorage.removeItem("auth_token");
            router.refresh();
          }
        })
        .catch((error) => {
          console.error("Error verifying user types:", error);
          setLoginAction(false);
          localStorage.removeItem("auth_token");
          router.refresh();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoginAction(false);
      router.refresh();
    }
  }, [router, setLoginAction]);
  const handleLogout = () => {
    const url = "/login";
    fetch(process.env.NEXT_PUBLIC_API_URL_BASE + url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth_token")}`,
      },
    })
      .then()
      .catch((err) => {
        console.error("Logout failed:", err);
      })
      .finally(() => {
        localStorage.removeItem("auth_token");
        setLoginAction(false);
        router.refresh();
      });
  };

  if (!session) return null;
  return (
    <div className="flex flex-col items-center gap-3.5 max-h-[90dvh] sm:px-10 sm:py-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-gray-900 text-2xl font-bold">Valitse käyttötila:</h1>
      <div className="flex flex-col items-center gap-3.5 w-56">
        {session &&
          session.user_types.user_types.map((user_type) => (
            <a
              className="button w-full center select-none"
              key={user_type}
              href={`/${user_type}`}
            >
              <p className="select-none text-center w-full">
                {UserTypeEnum[user_type]}
              </p>
            </a>
          ))}
        <h1 className="text-gray-900 text-2xl font-bold">...tai...</h1>
        <div
          className="button w-full center select-none"
          onClick={() => handleLogout()}
        >
          <p className="select-none text-center w-full">Kirjaudu ulos</p>
        </div>
        <a href="/websocket">websocket</a>
      </div>
    </div>
  );
}
