import { Button } from "@/components/ui/button";
import useCartStore, { CartItem } from "@/store/useCartStore";
const Decrease = ({ item }: { item: CartItem }) => {
  const removeItem = useCartStore((state) => state.removeFromCart);
  return (
    <Button
      onClick={() =>
        removeItem({
          id: item.id,
          image: item.image,
          price: item.price,
          quantity: 1,
          title: item.title,
        })
      }
    >
      -
    </Button>
  );
};

export default Decrease;
