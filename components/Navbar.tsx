import Link from "next/link";
import { PiBookOpen } from "react-icons/pi";

export function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between py-2 px-3 mb-3 border border-gray-100
    rounded-3xl shadow-sm shadow-gray-100"
    >
      <div className="flex-4 flex items-center gap-2">
        <div className="p-2 border border-gray-100 rounded-full">
          <PiBookOpen className="h-5 w-5 " />
        </div>
        <span className="font-semibold tracking-tight leading-loose text-lg text-gray-700">
          Mini Guestbook
        </span>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link
          href="#"
          className=" text-gray-600/75 font-light tracking-wide text-sm"
        >
          Leave a note
        </Link>
      </div>
    </nav>
  );
}
