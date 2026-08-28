import { NextResponse } from "next/server";
import postgres from "postgres";
import { entries } from "../../lib/data";

const DB_URL = process.env.POSTGRES_URL!;
const sql = postgres(DB_URL);

export async function GET() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; // enable uuid ids

  await sql`CREATE TABLE IF NOT EXISTS entries (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          name VARCHAR(255) NOT NULL,
          message VARCHAR(1000) NOT NULL
      ) `;

  try {
    let seeded = 0;

    for (const entry of entries) {
      const result = await sql`
  				INSERT INTO entries (name, message)
  				VALUES (${entry.name}, ${entry.message})
  				ON CONFLICT DO NOTHING
  				RETURNING id
  			`;

      seeded += result.length;
    }

    return NextResponse.json(
      { message: `Successfully seeded ${seeded} entries` },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to seed the database:", error);

    return NextResponse.json(
      { error: "Unable to seed the database" },
      { status: 500 },
    );
  } finally {
    await sql.end();
  }

  //TESTING CODE
  //   console.log(DB_URL);
  //   return NextResponse.json(
  //     { message: "Welcome to the seeding route" },
  //     { status: 200 },
  //   );
}
