import { BsChatLeft } from "react-icons/bs";
import { LuActivity } from "react-icons/lu";
import { PiBookOpen } from "react-icons/pi";
import { CiStopwatch } from "react-icons/ci";
import Image from "next/image";

export function NoEntry() {
  return (
    <section className="w-[40%] mx-auto mb-6">
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-slate-50 px-8 py-12 text-center shadow-sm">
        <div className="w-full">
          <Image
            src="/no-entry.svg"
            alt="No entries"
            height={400}
            width={400}
            className="w-full object-center"
          />
        </div>
        <h2 className="relative text-2xl font-bold tracking-tight text-gray-800">
          No messages yet
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-base font-medium leading-6 text-gray-500">
          Our guestbook is currently a blank page. Whether it&apos;s a quick
          hello or a thoughtful note, we&apos;d love to hear from you.
        </p>
        <button className="relative mt-8 inline-flex items-center gap-2 rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-blue-500 text-xs leading-none">
            +
          </span>
          Write the First Note
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
          <BsChatLeft className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-sm font-bold text-gray-800">Community Hub</h3>
          <p className="mt-1 text-xs leading-4 text-gray-500">
            A place for friends, colleagues, and visitors to leave their mark.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
          <PiBookOpen className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-sm font-bold text-gray-800">
            Simple &amp; Clean
          </h3>
          <p className="mt-1 text-xs leading-4 text-gray-500">
            Focusing on what matters most: your message.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CardList() {
  return (
    <section className="w-[40%] mx-auto flex flex-col gap-4 mb-4">
      <header className="flex justify-between items-center py-3">
        <div className="flex gap-2 items-center">
          <LuActivity className="h-5 w-5 text-blue-700" />
          <span className="font-bold text-sm text-gray-600 tracking-wide">
            Recent Messages
          </span>
        </div>
        <div
          className="flex gap-2 items-center text-xs bg-gray-50 text-gray-500
            p-2 rounded-2xl"
        >
          <PiBookOpen className="h-3 w-3" />
          <span>5 entries</span>
        </div>
      </header>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }, () => 0).map((_, idx: number) => (
          // Card
          <article
            key={idx}
            className="p-4 bg-slate-50 border border-gray-100 rounded-xl shadow-sm shadow-gray-100"
          >
            <header className="flex items-center gap-4 mb-2">
              <div
                className="p-2 bg-gray-100 rounded-full flex items-center justify-center
                  text-gray-500"
              >
                <BsChatLeft className="w-4 h-4" />
              </div>
              <div className="flex flex-col px-2">
                <h4 className="text-gray-600 font-bold tracking-tight text-sm">
                  Albert Chika
                </h4>
                <div className="flex gap-2 items-center justify-center text-xs text-gray-500">
                  <CiStopwatch className="w-3 h-3" />
                  <span>5 minutes ago</span>
                </div>
              </div>
            </header>
            <p className="p-2 text-sm [word-spacing:5px] tracking-wide text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              adipisci corporis eligendi officiis. Accusantium amet deleniti
              nesciunt, autem vero libero deserunt suscipit inventore quidem
              quia quibusdam aspernatur repellendus iure? Ipsam.
            </p>
          </article>
        ))}
      </div>
      <button
        className="w-[40%] mx-auto py-3 px-6 border border-gray-100 rounded-lg shadow-sm
          shadow-gray-100 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors
          duration-200 ease-in"
      >
        View Older Messages
      </button>
    </section>
  );
}

export function CardListSkeleton() {
  return (
    <section className="w-[40%] mx-auto flex flex-col gap-4 mb-4">
      <header className="flex justify-between items-center py-3">
        <div className="flex gap-2 items-center">
          <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-6 w-24 bg-gray-200 rounded-2xl animate-pulse" />
      </header>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }, () => 0).map((_, idx: number) => (
          // Card
          <article
            key={idx}
            className="p-4 bg-slate-50 border border-gray-100 rounded-xl shadow-sm shadow-gray-100"
          >
            <header className="flex items-center gap-4 mb-2">
              <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex flex-col flex-1 gap-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            </header>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
