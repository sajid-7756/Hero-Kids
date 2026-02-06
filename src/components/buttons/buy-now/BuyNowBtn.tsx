"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/models/product.model";
import { usePathname, useRouter } from "next/navigation";

const BuyNowBtn = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  const path = usePathname();
  const isLoggedIn = false;

  const handleBuyProduct = () => {
    if (!isLoggedIn) {
      router.push(`/login?callbackUrl=${path}`);
    } else {
      alert(product._id);
    }
  };
  return (
    <Button onClick={handleBuyProduct} variant="outline" size="lg">
      Buy Now
    </Button>
  );
};

export default BuyNowBtn;
