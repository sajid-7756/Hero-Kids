import { Separator } from "@/components/ui/separator";
import { getSingleBlog } from "@/services/blogService";
import { Badge } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-static";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const blog = await getSingleBlog(id);

  return (
    <div>
      <article className="container mx-auto max-w-3xl px-4 py-10">
        {/* Category */}
        <Badge className="mb-4">{blog.category}</Badge>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight">{blog.title}</h1>

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <Separator className="my-6" />

        {/* Featured Image */}
        <div className="relative mb-8 h-95 w-full overflow-hidden rounded-xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          <p>{blog.description}</p>

          {/* Example extra content */}
          <p>
            Teaching children to share helps build empathy, patience, and
            emotional intelligence. Parents and educators can model sharing
            behavior through everyday actions and positive reinforcement.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
