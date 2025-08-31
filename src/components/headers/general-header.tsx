"use client";
import {useRouter} from "next/navigation";
import {HeaderItem, UserTypeEnum} from "@/utils/types";

export default function GeneralHeader({base_path, items}: {base_path: string, items: HeaderItem[]}) {
  const router = useRouter();
  const handleLogout = (all?: string) => {
    let url = "/login"
    if (all) {
      url = "/login/all"
    }
    fetch(process.env.NEXT_PUBLIC_API_URL_BASE + url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("auth_token")}`
    }}).then().catch( (err) => {
      console.error("Logout failed:", err);
    }).finally(() => {
      localStorage.removeItem("auth_token");
    })
    router.push("/");
  }
  let role = UserTypeEnum[base_path.replace("/", "") as keyof typeof UserTypeEnum]
  let className = "flex items-end justify-center pb-4 border-l-1 border-gray-300 h-full w-32 font-bold hover:bg-gray-200"
  return (
    <div className="flex items-end justify-between w-full h-[10dvh] px-4 mb-4 bg-white border-b border-gray-200">
      <h1 className="text-4xl font-bold pb-4 text-gray-900 select-none" onClick={() => router.push("/")}>Otaniemipeli {role}</h1>
      <div className="flex h-full items-center pt-6">
        <nav className="flex cursor-default h-full rounded-md bottom">
          <div className={className}>
            <p onClick={() => {router.push('/')}}>
              Alkuun
            </p>
          </div>
          <div className={className}>
            <p onClick={() => {router.push(base_path)}}>
              {role}
            </p>
          </div>
          {items.map((item) => (
            <div key={item.text} className={className}>
              <p onClick={() => router.push(base_path + item.href)}>
                {item.text}
              </p>
            </div>
          ))}
          <div className="flex button m-2"
               onClick={() => {handleLogout()}}>
              Kirjaudu ulos
          </div>
        </nav>
      </div>
    </div>
  );
}
