import Image from "next/image";
import { BsStars, BsChatLeft } from "react-icons/bs";
import { MdOutlineChat } from "react-icons/md";
import { LuSend, LuActivity } from "react-icons/lu";
import { PiBookOpen } from "react-icons/pi";
import { CiStopwatch } from "react-icons/ci";

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
      <section className="w-[40%] mx-auto flex flex-col gap-2 mb-4">
        <header className="flex gap-2 items-center">
          <MdOutlineChat className="h-5 w-5 text-blue-700" />
          <span className="font-bold text-sm text-gray-600 tracking-wide">
            Sign Guestbook
          </span>
        </header>
        <form
          className="w-full bg-slate-50 border border-gray-100 shadow shadow-gray-100 py-8 px-4
        flex flex-col gap-6 rounded-2xl"
        >
          <caption className="font-bold text-gray-700/90 tracking-tight">
            Leave a Message
          </caption>
          <div className="w-full flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-bold tracking-wide text-gray-500 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Chika Ayomide"
              required
              className="border border-gray-200 outline-0 p-3 rounded-xl placeholder:text-gray-300
              text-sm tracking-wide"
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-bold tracking-wide text-gray-500 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Type your message here ..."
              required
              className="border border-gray-200 outline-0 p-3 rounded-xl placeholder:text-gray-300
              text-sm tracking-wide"
            ></textarea>
          </div>
          <button
            className="flex justify-center items-center gap-2 bg-blue-600 text-white
          font-bold p-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 ease-in"
          >
            <LuSend className="h-5 w-5" />
            <span>Post Message</span>
          </button>
        </form>
      </section>

      {/* Message list */}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate adipisci corporis eligendi officiis. Accusantium amet
                deleniti nesciunt, autem vero libero deserunt suscipit inventore
                quidem quia quibusdam aspernatur repellendus iure? Ipsam.
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

      {/* No entries */}
      {/* <section className="w-[40%] mx-auto mb-6">
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-slate-50 px-8 py-12 text-center shadow-sm">
          <svg
            viewBox="0 0 360 300"
            role="img"
            aria-label="A colorful blank guestbook page"
            className="relative mx-auto mb-6 h-48 w-64 overflow-hidden rounded-xl bg-white/70 shadow-inner"
          >
            <defs>
              <linearGradient id="guestbook-page" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#eff6ff" />
              </linearGradient>
              <linearGradient id="guestbook-accent" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <circle
              cx="180"
              cy="-35"
              r="175"
              fill="none"
              stroke="#2563eb"
              strokeWidth="18"
              opacity=".9"
            />
            <circle
              cx="180"
              cy="-10"
              r="150"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="6"
              opacity=".8"
            />
            <path
              d="M68 45h190v210H68z"
              fill="url(#guestbook-page)"
              stroke="#dbeafe"
              strokeWidth="3"
            />
            <path
              d="M68 45h190l-26 32H68z"
              fill="#e2e8f0"
              transform="rotate(-7 163 61)"
            />
            <path
              d="M68 255V130l42 55-20 70z"
              fill="#fff"
              stroke="#fcd34d"
              strokeWidth="3"
              strokeDasharray="6 7"
            />
            <path
              d="M245 245c18-25 22-55 4-84-25 19-32 55-4 84z"
              fill="#bbf7d0"
              opacity=".8"
            />
            <path
              d="M142 104v112M175 104v112M208 104v112"
              stroke="#bfdbfe"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M130 92h92"
              stroke="url(#guestbook-accent)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M130 235h95"
              stroke="#fda4af"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".8"
            />
            <circle cx="113" cy="92" r="8" fill="#34d399" />
            <path
              d="M105 66l18 18"
              stroke="#fb7185"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
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
      </section> */}
    </main>
  );
}
