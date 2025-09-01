"use client"
import {usePathname, useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  const path = usePathname();
  router.push(path + `/${1}`)
  return (
    <>
    </>
  );
}
