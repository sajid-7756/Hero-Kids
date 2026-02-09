import { getSingleBlog } from "@/services/blogService";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const blog = await getSingleBlog(id);
  console.log(blog);
  return <div></div>;
};

export default BlogDetails;
