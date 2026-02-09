import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BlogCardSkeleton() {
  return (
    <section className="container mx-auto px-4 py-10">
      <Card className="overflow-hidden">
        {/* Image skeleton */}
        <Skeleton className="h-48 w-full" />

        <CardHeader className="space-y-3">
          <Skeleton className="h-4 w-24" /> {/* category */}
          <Skeleton className="h-6 w-full" /> {/* title */}
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>

        <CardContent className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />

          <div className="flex items-center justify-between pt-4">
            <Skeleton className="h-4 w-24" /> {/* author */}
            <Skeleton className="h-4 w-16" /> {/* read time */}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
