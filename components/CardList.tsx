"use client";
import { BsChatLeft } from "react-icons/bs";
import { PiBookOpen } from "react-icons/pi";
import { Card, CardSkeleton } from "./Card";
import Image from "next/image";
import { EntryType } from "@/lib/types";
import Link from "next/link";
import { useState, useTransition } from "react";
import { loadMoreEntries } from "@/app/actions";

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
        <Link
          href="/create"
          className="relative mt-8 inline-flex items-center gap-2 rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-blue-500 text-xs leading-none">
            +
          </span>
          Write the First Note
        </Link>
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

export function CardList(props: {
  initialEntries: EntryType[];
  initialHasMore: boolean;
  initialPage: number;
}) {
  const [entries, setEntries] = useState(props.initialEntries);
  const [hasMore, setHasMore] = useState(props.initialHasMore);
  const [currentPage, setCurrentPage] = useState(props.initialPage);
  const [isPending, startTransition] = useTransition();

  function handleLoadMore() {
    startTransition(async () => {
      setCurrentPage((page) => page + 1); // move to next page;
      const { data: newEntries, hasMore } = await loadMoreEntries({
        currentPage,
      });
      setEntries((previousEntries) => [...previousEntries, ...newEntries]);
      setHasMore(hasMore);
    });
  }

  return (
    // {/* Cards */}
    <>
      <div className="flex flex-col gap-4">
        {entries.map((entry) => (
          // Card
          <Card key={entry.id} entry={entry} />
        ))}
        {isPending && <CardListSkeleton length={5} />}
      </div>
      {hasMore && (
        <button
          className="w-1/2 mx-auto py-3 px-6 border border-gray-100 rounded-lg shadow-sm
          shadow-gray-100 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors
          duration-200 ease-in"
          onClick={handleLoadMore}
          disabled={isPending}
        >
          {isPending ? "Loading ..." : "Load More Messages"}
        </button>
      )}
    </>
  );
}

export function CardListSkeleton(props: { length: number }) {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: props.length }, () => 0).map((_, idx: number) => (
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
  );
}
