import { NextResponse } from "next/server";

const API_KEY = process.env.RAWG_API_KEY;

export const GET = async () => {
  try {
    const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`);
    const data = await res.json();
    
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { results: [], error: "Failed to fetch" },
      { status: 500 },
    );
  }
};
