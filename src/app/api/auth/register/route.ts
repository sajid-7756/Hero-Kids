import dbConnect from "@/lib/dbConnect";
import { IUser, User } from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // 1. Check for missing fields
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing credentials",
        },
        { status: 404 },
      );
    }

    await dbConnect();

    const existingUser: IUser | null = await User.findOne({ email });

    // 2. Check existing user
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exist",
        },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: IUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 3. Security: Remove password from the response object
    const userResponse = {
      _id: user?._id,
      name: user?.name,
      email: user?.email,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Registration success",
        data: userResponse,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 },
    );
  }
}
