import postgres from "postgres";
import { EntryType } from "./types";

const DB_URL = process.env.POSTGRES_URL!;
const sql = postgres(DB_URL);

export async function fetchEntries() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec delay to test out loading state

    const data = await sql<EntryType[]>`SELECT * FROM entries`;
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch messages");
  }
}
