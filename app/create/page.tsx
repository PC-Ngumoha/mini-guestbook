import { MdOutlineChat } from "react-icons/md";
import { LuSend } from "react-icons/lu";

export default function CreatePage() {
  return (
    <main className="h-[80vh] w-[60%] mx-auto flex flex-col justify-center gap-2 mb-4">
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
        <legend className="font-bold text-gray-700/90 tracking-tight">
          Leave a Message
        </legend>
        <div className="w-full flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-bold tracking-wide tex  t-gray-500 mb-2"
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
    </main>
  );
}
