import { howLongAgo } from "@/lib/utils";
import { EntryType } from "@/lib/types";
import { BsChatLeft } from "react-icons/bs";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteExistingEntry } from "@/app/actions";

export function Card(props: {
  entry: EntryType;
  onDelete: (id: string) => void;
}) {
  const lastSeen = howLongAgo(props.entry.created_at);

  //FIXME: This is prone to bugs in situations where
  // deletion fails due to an external issue. But we'll
  // leave it for now.
  async function handleDeleteClick() {
    props.onDelete(props.entry.id);

    try {
      await deleteExistingEntry(props.entry.id);
    } catch (error) {
      console.error(error);
    }
  }

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
        <div className="flex-1 flex flex-col px-2 justify-start text-start">
          <h4 className="text-gray-600 font-bold tracking-tight text-sm text-start">
            {props.entry.name}
          </h4>
          <div className="flex gap-2 items-center text-xs text-gray-500">
            <CiStopwatch className="w-3 h-3" />
            <span>{lastSeen}</span>
          </div>
        </div>
        <button
          type="button"
          aria-label={`Delete message from ${props.entry.name}`}
          className="ml-auto p-1.5 rounded-full text-gray-400 opacity-60 transition-colors duration-200 hover:opacity-100 hover:bg-red-50 hover:text-red-500"
          onClick={handleDeleteClick}
        >
          <MdOutlineDeleteOutline className="w-4 h-4" />
        </button>
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
