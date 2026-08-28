// import Image from "next/image";
import { CardList, NoEntry } from "@/components";
import { fetchEntries } from "@/lib/helpers";
import { EntryType } from "@/lib/types";

export default async function Home() {
  const entries: EntryType[] = await fetchEntries();

  return (
    <main>
      {/* Message list */}
      {entries.length > 0 ? <CardList entries={entries} /> : <NoEntry />}
    </main>
  );
}
