import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import Image from "next/image";
import { Button } from "../ui/button";
import { CartItem } from "@/store/useCartStore";
import Link from "next/link";
import Decrease from "./_components/Decrease";
import Increase from "./_components/Increase";

const CartSidebar = ({
  cart,
  subtotal,
}: {
  cart: CartItem[];
  subtotal: number;
}) => {
  console.log(cart);
  return (
    <SheetContent side="right" className="w-120 p-5">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
      </SheetHeader>

      {/* Cart Items */}
      <div className="mt-6 flex h-full flex-col ">
        {cart.length === 0 ? (
          <p className="text-sm text-muted-foreground">Your cart is empty</p>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto">
              {cart.map((item) =>
                item.quantity === 0 ? (
                  <p key={item.id}></p>
                ) : (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 bg-accent rounded-md p-2"
                  >
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />

                    {/* Info */}
                    <div className="flex flex-1 flex-col">
                      <p className="text-sm font-medium line-clamp-1">
                        {item.title}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>

                      <p className="text-sm font-semibold text-primary">
                        ৳ {item.price}
                      </p>
                    </div>
                    {/* Ingress/Decrease from cart  */}
                    <div className="space-x-2">
                      <Decrease item={item} />
                      <Increase item={item} />
                    </div>
                  </li>
                ),
              )}
            </ul>

            {/* Subtotal */}
            <div className="border-t pt-4">
              <p className="flex justify-between text-sm font-semibold">
                <span>Subtotal</span>
                <span>৳ {subtotal}</span>
              </p>

              {/* Buttons */}
              <div className="mt-4">
                <Link href="/cart">
                  <Button className="w-full">View Cart</Button>
                </Link>

                <Link href="/checkout">
                  <Button variant="outline" className="w-full">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </SheetContent>
  );
};

export default CartSidebar;
