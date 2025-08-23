'use client';

import {useEffect} from 'react';
import {verifyUserTypes} from "@/utils/fetchers";
import {usePathname, useRouter} from "next/navigation";
import {SessionInfo, UserType} from "@/utils/types";

function authorisationCheck(session: SessionInfo, pathname: string): boolean {
  let user_types: UserType[] = ['admin', 'ie', 'referee', 'secretary', 'team']
  for (let type of user_types) {
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
  const ignored = ['/follow', '/websocket', '/api', '/favicon.ico', '/_next', '/_vercel'];
  return ignored.some((path) => pathname.startsWith(path));
}


export default function AdminTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const sessionToken = localStorage.getItem('auth_token');
    if (ignoredPaths(pathname)) {
      return;
    } else {
      if (!sessionToken) {
        router.push('/');
        return;
      }
      verifyUserTypes(sessionToken).then((data: SessionInfo | undefined) => {
        if (data) {
          if (!authorisationCheck(data, pathname)) {
            router.push('/');
          }
        } else {
          router.push('/');
        }
      }).catch((error) => {
        console.error('Error verifying user types:', error);
        router.push('/');
      });
    }
    }, [pathname]);
  return <>{children}</>
}
