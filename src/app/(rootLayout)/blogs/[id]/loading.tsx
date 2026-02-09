import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailsLoading() {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-10 space-y-6">
      {/* Category */}
      <Skeleton className="h-6 w-28 rounded-full" />

      {/* Title */}
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-10 w-2/3" />

      {/* Meta info */}
      <div className="flex flex-wrap gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Featured image */}
      <Skeleton className="h-95 w-full rounded-xl" />

      {/* Content */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-9/12" />
        <Skeleton className="h-4 w-8/12" />
      </div>
    </article>
  );
}
