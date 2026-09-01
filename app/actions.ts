"use server";
import { sql } from "@/config/postgres";
import { fetchEntries } from "@/lib/helpers";
import { ResultType } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loadMoreEntries(options: {
  currentPage: number;
}): Promise<ResultType> {
  return await fetchEntries({ limit: 5, page: options.currentPage + 1 });
}

export async function createNewEntry(formData: FormData) {
  // console.log("Name: ", formData.get("name"));
  // console.log("Message: ", formData.get("message"));

  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  try {
    await sql`INSERT INTO entries (name, message)
      VALUES (${name}, ${message})`;

    console.log("Created new entry successfully !!!");
  } catch (error) {
    console.error("Failed to create new entry.");
    throw new Error("Failed to create new entry.");
  }

  revalidatePath("/");
  redirect("/");
}

export async function deleteExistingEntry(id: string) {
  try {
    await sql`DELETE FROM entries
    WHERE id = ${id}`;
  } catch (error) {
    console.error("Failed to delete entry.");
    throw new Error("Failed to delete entry.");
  }

  revalidatePath("/");
  redirect("/");
}
