import Container from "@/components/common/Container";
import ProductCardSkeleton from "./_components/ProductCardSkeleton";

const loading = () => {
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
          {Array.from({ length: 18 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default loading;
