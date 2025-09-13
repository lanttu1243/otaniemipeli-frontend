"use client";

import { useEffect } from "react";
import { verifyUserTypes } from "@/utils/fetchers";
import { usePathname, useRouter } from "next/navigation";

function authorisationCheck(session: SessionInfo, pathname: string): boolean {
  for (const type of UserTypes) {
    if (pathname.startsWith("/" + type)) {
      if (session.user_types.user_types.includes(type)) {
        return true;
      } else {
        console.error(`User does not have the required authorisation: ${type}`);
        return false;
      }
    }
  }
  return false;
}
function ignoredPaths(pathname: string): boolean {
  const ignored = [
    "/follow",
    "/websocket",
    "/api",
    "/favicon.ico",
    "/_next",
    "/_vercel",
  ];
  return ignored.some((path) => pathname.startsWith(path));
}

export default function AdminTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (ignoredPaths(pathname)) {
      return;
    } else {
      const sessionToken = localStorage.getItem("auth_token");
      if (!sessionToken) {
        router.push("/");
        return;
      }
      verifyUserTypes(sessionToken)
        .then((data: SessionInfo | undefined) => {
          if (data) {
            if (!authorisationCheck(data, pathname)) {
              router.push("/");
            }
          }
        })
        .catch((error) => {
          console.error("Error verifying user types:", error);
          router.push("/");
        });
    }
  }, [pathname, router]);
  return <>{children}</>;
}
