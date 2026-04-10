import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "book-meeting",
    message: "Placeholder booking endpoint is available.",
  });
}

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      route: "book-meeting",
      message: "Placeholder booking request accepted.",
    },
    { status: 202 },
  );
}