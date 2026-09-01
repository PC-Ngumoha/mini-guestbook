import { fetchEntries } from "@/lib/helpers";
import { CardList, NoEntry, CardListSkeleton } from "./CardList";

export async function CardLoader() {
  const { data: entries, hasMore } = await fetchEntries({ limit: 5, page: 0 });

  return (
    <section className="w-[40%] mx-auto flex flex-col gap-4 mb-4">
      {entries.length > 0 ? (
        <CardList
          initialEntries={entries}
          initialHasMore={hasMore}
          initialPage={0}
        />
      ) : (
        <NoEntry />
      )}
    </section>
  );
}

export function CardLoaderSkeleton() {
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
      <CardListSkeleton length={5} />
    </section>
  );
}
