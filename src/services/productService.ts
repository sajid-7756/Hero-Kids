import dbConnect from "@/lib/dbConnect";
import { IProduct, Product } from "@/models/product.model";
import { unstable_cache } from "next/cache";

export async function getAllProducts(): Promise<IProduct[]> {
  await dbConnect();

  const products = await Product.find({}).lean();

  return JSON.parse(JSON.stringify(products));
}

export const getSingleProduct = unstable_cache(
  async (id: string): Promise<IProduct> => {
    await dbConnect();
    const product = await Product.findById(id).lean();
    return JSON.parse(JSON.stringify(product));
  },
  ["product"],
  { revalidate: 3600, tags: ["products"] },
);