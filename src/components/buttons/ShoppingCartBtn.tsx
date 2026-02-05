"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import useCartStore from "@/store/useCartStore";
import CartSidebar from "../cart-sidebar/CartSidebar";

const ShoppingCartBtn = () => {
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5" />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      {/* Sidebar */}
      <CartSidebar cart={cart} subtotal={subtotal} />
    </Sheet>
  );
};

export default ShoppingCartBtn;
