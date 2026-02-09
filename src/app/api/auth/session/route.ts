import { getCurrentUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session =await getCurrentUser();
  return NextResponse.json(session);
}
