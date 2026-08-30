import { EntryType } from "@/lib/types";
import { BsChatLeft } from "react-icons/bs";
import { CiStopwatch } from "react-icons/ci";

export function Card(props: { entry: EntryType }) {
  return (
    <article
      key={props.entry.id}
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
            {props.entry.name}
          </h4>
          <div className="flex gap-2 items-center justify-center text-xs text-gray-500">
            <CiStopwatch className="w-3 h-3" />
            <span>5 minutes ago</span>
          </div>
        </div>
      </header>
      <p className="p-2 text-sm [word-spacing:5px] tracking-wide text-gray-600">
        {props.entry.message}
      </p>
    </article>
  );
}

export function CardSkeleton() {
  return (
    <article className="p-4 bg-slate-50 border border-gray-100 rounded-xl shadow-sm shadow-gray-100 animate-pulse">
      <header className="flex items-center gap-4 mb-2">
        <div className="p-2 bg-gray-300 rounded-full flex items-center justify-center w-10 h-10" />
        <div className="flex flex-col px-2 flex-1">
          <div className="h-4 bg-gray-300 rounded w-32 mb-2" />
          <div className="h-3 bg-gray-300 rounded w-24" />
        </div>
      </header>
      <div className="p-2 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    </article>
  );
}
