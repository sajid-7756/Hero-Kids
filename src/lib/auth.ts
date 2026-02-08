import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { JWTPayload } from "jose";

export interface SessionPayload extends JWTPayload {
  userId: string;
  name: string;
  role: "user" | "admin";
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  if (!token) return null;

  try {
    const { payload }: { payload: SessionPayload } = await jwtVerify(
      token,
      secret,
    );

    return payload;
  } catch {
    return null;
  }
}
