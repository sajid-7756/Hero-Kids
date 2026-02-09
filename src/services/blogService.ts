import dbConnect from "@/lib/dbConnect";
import { Blog, IBlog } from "@/models/blog.model";

export async function getAllBlogs(): Promise<IBlog[]> {
  try {
    await dbConnect();

    const blogs = await Blog.find().lean();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}

export async function getSingleBlog(id: string): Promise<IBlog> {
  try {
    await dbConnect();

    const blog = await Blog.findById({ _id: id }).lean();

    return JSON.parse(JSON.stringify(blog));
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}
