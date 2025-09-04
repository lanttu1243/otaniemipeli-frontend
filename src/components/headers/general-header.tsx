"use client";
import { useRouter } from "next/navigation";
import { HeaderItem, UserTypeEnum } from "@/utils/types";
import Image from "next/image";
import TiKLogo from "@/public/TiKprofiilikuva.png";
import React from "react";

export default function GeneralHeader({
  base_path,
  items,
}: {
  base_path: string;
  items: HeaderItem[];
}) {
  const router = useRouter();
  const handleLogout = (all?: string) => {
    let url = "/login";
    if (all) {
      url = "/login/all";
    }
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
      });
    router.push("/");
  };
  const role =
    UserTypeEnum[base_path.replace("/", "") as keyof typeof UserTypeEnum];
  const className =
    "flex center p-4 border-l-1 border-juvu-kulta text-juvu-sini-600 h-full font-bold hover:bg-gray-200";
  return (
    <div className="flex items-end justify-right w-full h-[10dvh] px-4 mb-4 bg-juvu-sini-800 border-juvu-kulta border-b-1">
      <div className="flex h-[10dvh] items-center mr-auto m-1">
        <Image
          src={TiKLogo}
          alt="Header Logo"
          className="w-auto h-full rounded-full"
          priority
        />
        <h1
          className="text-5xl font-bold pl-6 text-juvu-sini-600 select-none ml-auto"
          onClick={() => router.push("/")}
        >
          Otaniemipeli {role}
        </h1>
      </div>
      <div className="flex h-full items-center pt-6">
        <nav className="flex cursor-default h-full rounded-md bottom">
          <div
            className={className}
            onClick={() => {
              router.push("/");
            }}
          >
            <h3>Alkuun</h3>
          </div>
          <div
            className={className}
            onClick={() => {
              router.push(base_path);
            }}
          >
            <h3>{role}</h3>
          </div>
          {items.map((item) => (
            <div
              key={item.text}
              className={className}
              onClick={() => router.push(base_path + item.href)}
            >
              <h3>{item.text}</h3>
            </div>
          ))}
          <div
            className={className}
            onClick={() => {
              handleLogout();
            }}
          >
            <h3 className="text-juvu-kulta !text-lg">Kirjaudu ulos</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}
