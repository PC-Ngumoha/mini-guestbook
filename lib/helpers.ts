import { sql } from "@/config/postgres";
import { EntryType, ResultType } from "./types";

export async function fetchEntries(options: {
  limit: number;
  page: number;
}): Promise<ResultType> {
  try {
    //TODO: Remove this line before pushing to production.
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec delay to test out loading state

    const [data, countResult] = await Promise.all([
      sql<EntryType[]>`SELECT * FROM entries
        ORDER BY created_at DESC, id DESC
        LIMIT ${options.limit} OFFSET ${options.page * options.limit}`,
      sql`SELECT COUNT(*) FROM entries`,
    ]);
    // console.log(typeof data[0].created_at.toString());
    const remaining =
      parseInt(countResult[0].count) - options.page * options.limit;
    const hasMore = remaining > 0;

    return { data, hasMore };
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch messages");
  }
}
