import dbConnect from "@/lib/dbConnect";
import { Product } from "@/models/product.model";
import { NextResponse } from "next/server";

// Post product
export async function POST(req: Request) {
  try {
    // 1. Establish database connection
    await dbConnect();

    // 2. Parse the JSON body from the request
    const body = await req.json();

    if (!body.title || !body.price) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 4. Create the document in MongoDB
    const newProduct = await Product.create(body);

    // 5. Return the created object
    return NextResponse.json(
      { success: true, data: newProduct },
      { status: 201 },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message });
  }
}

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, total: products.length, data: products },
      { status: 200 },
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
