import Container from "@/components/common/Container";
import Banner from "@/components/home/Banner";
import Products from "./products/page";

export default function Home() {
  return (
    <Container>
      <section>
        <Banner />
      </section>

      <section>
        <Products />
      </section>
    </Container>
  );
}
