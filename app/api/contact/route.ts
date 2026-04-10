import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "contact",
    message: "Placeholder contact endpoint is available.",
  });
}

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      route: "contact",
      message: "Placeholder contact submission accepted.",
    },
    { status: 202 },
  );
}