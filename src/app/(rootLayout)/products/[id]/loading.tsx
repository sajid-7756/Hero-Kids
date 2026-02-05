import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Image Skeleton */}
          <Skeleton className="aspect-square w-full rounded-lg" />

          {/* Info Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />

            {/* Rating */}
            <Skeleton className="h-4 w-40" />

            {/* Price */}
            <Skeleton className="h-7 w-32" />

            {/* Buttons */}
            <div className="flex gap-3">
              <Skeleton className="h-11 w-32" />
              <Skeleton className="h-11 w-32" />
            </div>

            {/* Info bullets */}
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-3">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Q&A */}
        <div className="mt-12 space-y-3">
          <Skeleton className="h-6 w-56" />

          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-2 rounded-lg border p-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
