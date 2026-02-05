import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};

const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id,
      );

      // If product already exists → increase quantity
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem,
          ),
        };
      }

      // If product does NOT exist → add new item
      return {
        cart: [...state.cart, item],
      };
    }),

  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart
        .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((item) => item.quantity > 0),
    })),
}));

export default useCartStore;
