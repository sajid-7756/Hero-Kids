import { use } from "react";
import { IProduct } from "@/models/product.model";
import ProductCard from "./ProductCard";

const ProductsList = ({
  productsPromise,
}: {
  productsPromise: Promise<IProduct[]>;
}) => {
  const products = use(productsPromise);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {products.map((product: IProduct) => (
        <ProductCard
          key={product?._id as unknown as string}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsList;
