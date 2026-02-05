import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};
export default function BlogsPage() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <p>This is a dummy blogs page for testing navigation.</p>
    </Container>
  );
}
