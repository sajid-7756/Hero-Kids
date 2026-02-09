import { Metadata } from "next";

import { getAllBlogs } from "@/services/blogService";
import { Suspense } from "react";
import BlogList from "./_components/BlogList";
import Container from "@/components/common/Container";
import BlogCardSkeleton from "./_components/BlogCardSkeleton";

export const metadata: Metadata = {
  title: "Blogs | Hero Kids",
  description:
    "Explore our latest stories, tips, and insights about kids' health, education, and creativity.",
};

export default function BlogsPage() {
  const blogPromise = getAllBlogs();
  return (
    <Container className="min-h-screen py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Our Latest <span className="text-primary">Blogs</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Discover a world of wisdom and fun! From parenting tips to creative
          activities, our blog is your companion in raising happy, healthy, and
          heroic kids.
        </p>
      </div>

      {/* Grid */}
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <BlogList blogPromise={blogPromise} />
      </Suspense>
    </Container>
  );
}
