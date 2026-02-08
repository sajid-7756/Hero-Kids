import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { IProduct } from "@/models/product.model";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <Card className="group overflow-hidden transition hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {product.discount > 0 && (
          <span className="absolute left-2 top-2 rounded bg-destructive px-2 py-1 text-xs font-semibold text-white">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <CardContent className="space-y-2 p-4">
        {/* Title */}
        <h3 className="line-clamp-2 text-sm font-semibold">{product.bangla}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{product.ratings}</span>
          <span>({product.reviews})</span>
          <span className="ml-auto text-xs">Sold {product.sold}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{Math.round(discountedPrice)}
          </span>

          {product.discount > 0 && (
            <span className="text-sm text-muted-foreground line-through">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* Button */}
        <Link href={`/products/${product?._id as unknown as string}`}>
          <Button className="w-full" size="sm">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
