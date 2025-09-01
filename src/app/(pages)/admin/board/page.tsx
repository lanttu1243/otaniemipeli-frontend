"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function BoardOverlay(): JSX.Element {
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    router.push(path + "/1");
  }, [router, path]);
  return <div></div>;
}
