import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Log out success",
  });

  // Clear cookies
  response.cookies.delete("token");

  return response;
}
