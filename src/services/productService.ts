import dbConnect from "@/lib/dbConnect";
import { IProduct, Product } from "@/models/product.model";

export async function getAllProducts(): Promise<IProduct[]> {
  await dbConnect();

  const products = await Product.find({}).lean();

  return JSON.parse(JSON.stringify(products));
}

export async function getSingleProduct(id: string): Promise<IProduct> {
  await dbConnect();

  const product = await Product.findById(id).lean();

  return JSON.parse(JSON.stringify(product));
}
