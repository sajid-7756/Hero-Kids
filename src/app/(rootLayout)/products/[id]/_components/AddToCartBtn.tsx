"use client";
import useCartStore from "@/store/useCartStore";
import { Button } from "../../../../../components/ui/button";
import { IProduct } from "@/models/product.model";

const AddToCartBtn = ({ product }: { product: IProduct }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      onClick={() =>
        addToCart({
          id: product?._id as unknown as string,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
      size="lg"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
