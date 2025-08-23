"use client";
import {useRouter} from "next/navigation";

export default function FollowHeader() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between w-full h-[10dvh] px-4 mb-4 bg-white border-b border-gray-200">
      <h1 className="text-4xl font-bold text-gray-900">Otaniemipeli</h1>
      <nav className="flex space-x-4 cursor-default">
        <p onClick={() => {router.push("/follow")}}
           className="text-gray-700 hover:text-gray-900 hover:underline">
          Etusivu
        </p>
        <p onClick={() => {router.push("/follow/board")}}
           className="text-gray-700 hover:text-gray-900 hover:underline">
          Juomat
        </p>
        <p onClick={() => {router.push("/follow")}}
           className="text-gray-700 hover:text-gray-900 hover:underline">
          Ainesosat
        </p>
        <p onClick={() => {router.push("/follow")}}
           className="text-gray-700 hover:text-gray-900 hover:underline">
          Pelit
        </p>
      </nav>
    </div>
  );
}
