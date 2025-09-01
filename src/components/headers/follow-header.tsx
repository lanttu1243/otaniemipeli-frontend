"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TiKLogo from "@/public/TiKprofiilikuva.png";
import React from "react";

export default function FollowHeader() {
  const router = useRouter();
  const className =
    "flex items-end justify-center pb-4 border-l-1 border-juvu-kulta text-juvu-sini-600 h-full w-32 font-bold hover:bg-juvu-sini-600 hover:text-juvu-sini-800";
  return (
    <div className="flex items-end justify-right w-full h-[10dvh] px-4 mb-4 bg-juvu-sini-800 border-juvu-kulta border-b-1">
      <div className="flex h-[10dvh] items-center mr-auto m-1">
        <Image
          src={TiKLogo}
          alt="Header Logo"
          className="w-auto h-full rounded-full"
          priority
        />
        <h2
          className="font-bold pl-6 text-juvu-sini-600 select-none ml-auto text-[3rem]"
          onClick={() => router.push("/")}
        >
          Museobileet: Otaniemipeli
        </h2>
      </div>
      <div className="flex h-full items-center pt-6">
        <nav className="flex cursor-default h-full rounded-md bottom">
          <div
            className={className}
            onClick={() => {
              router.push("/follow/board");
            }}
          >
            <h3>Etusivu</h3>
          </div>
          <div
            className={className}
            onClick={() => {
              router.push("/follow/board");
            }}
          >
            <h3>Lauta</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}
