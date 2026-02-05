import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      
      {/* 404 Number */}
      <h1 className="text-7xl font-bold text-primary">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    </div>
  );
}
