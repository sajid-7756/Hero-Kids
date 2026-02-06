import { create } from "zustand";
import { persist } from "zustand/middleware"; // Import middleware

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

// Wrap the state creator in persist()
const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          return { cart: [...state.cart, item] };
        }),

      removeFromCart: (item) =>
        set((state) => ({
          cart: state.cart
            .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((item) => item.quantity > 0),
        })),
    }),
    {
      name: "shopping-cart-storage", // Unique name for localStorage key
    }
  )
);

export default useCartStore;
