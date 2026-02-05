import { Button } from "@/components/ui/button";
import useCartStore, { CartItem } from "@/store/useCartStore";
const Increase = ({ item }: { item: CartItem }) => {
  const addItem = useCartStore((state) => state.addToCart);
  return (
    <Button
      onClick={() =>
        addItem({
          id: item.id,
          image: item.image,
          price: item.price,
          quantity: 1,
          title: item.title,
        })
      }
    >
      +
    </Button>
  );
};

export default Increase;
