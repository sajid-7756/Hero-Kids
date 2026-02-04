import Container from "@/components/common/Container";
import products from "@/../data/toys.json";
import ProductCard from "@/app/(rootLayout)/products/_components/ProductCard";

const Products = () => {
  return (
    <section className="py-12">
      <Container>
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Products</h2>
          <p className="mt-2 text-muted-foreground">
            Fun, safe & educational toys for kids
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
