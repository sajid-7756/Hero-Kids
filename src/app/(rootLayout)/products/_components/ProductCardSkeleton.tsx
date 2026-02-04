import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg border">
      {/* Image */}
      <Skeleton className="aspect-square w-full" />

      {/* Content */}
      <div className="space-y-2 p-4">
        {/* Title */}
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />

        {/* Rating */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-12" />
        </div>

        {/* Price */}
        <Skeleton className="h-5 w-20" />

        {/* Button */}
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
