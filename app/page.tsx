import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { CardList, CardListSkeleton } from "@/components";

export default function Home() {
  return (
    <main>
      {/* Main heading */}
      <header className="w-[40%] mx-auto text-center my-4 flex flex-col items-center gap-2">
        <div
          className="w-fit flex gap-2 justify-center items-center py-2 px-6 text-blue-700 bg-blue-100
        border border-blue-200 rounded-3xl uppercase tracking-tight text-xs"
        >
          <BsStars className="w-5 h-5" />
          Community wall
        </div>
        <h1 className="text-3xl font-bold text-gray-600 tracking-tight leading-relaxed">
          Mini Guestbook
        </h1>
        <p className="text-sm text-gray-400/75 font-light w-[80%]">
          Leave a message for everyone to see. Share a thought, a greeting or
          just say hi !
        </p>
      </header>

      {/* Form Section */}

      {/* Message list */}
      <CardList />

      {/* No entries */}
    </main>
  );
}
