"use server";
import { fetchEntries } from "@/lib/helpers";

export async function loadMoreEntries(options: { currentPage: number }) {
  return await fetchEntries({ limit: 5, page: options.currentPage + 1 });
}
