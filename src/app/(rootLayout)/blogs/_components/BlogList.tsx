import BlogCard from "@/app/(rootLayout)/blogs/_components/BlogCard";
import Container from "@/components/common/Container";
import { IBlog } from "@/models/blog.model";
import { use } from "react";

const BlogList = ({ blogPromise }: { blogPromise: Promise<IBlog[]> }) => {

  const blogs: IBlog[] = use(blogPromise);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog._id.toString()} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-muted-foreground">
              No blogs found.
            </h3>
            <p className="text-muted-foreground">
              Check back later for new stories!
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogList;
