"use server";
import { fetchEntries } from "@/lib/helpers";
import { ResultType } from "@/lib/types";

export async function loadMoreEntries(options: {
  currentPage: number;
}): Promise<ResultType> {
  return await fetchEntries({ limit: 5, page: options.currentPage + 1 });
}

export async function createNewEntry(formData: FormData) {
  console.log("Name: ", formData.get("name"));
  console.log("Message: ", formData.get("message"));
}
