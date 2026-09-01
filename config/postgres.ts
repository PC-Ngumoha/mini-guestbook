import postgres from "postgres";

const DB_URL = process.env.POSTGRES_URL!;
export const sql = postgres(DB_URL);
