import Container from "@/components/common/Container";
import { getAllProducts } from "@/services/productService";
import { Suspense } from "react";
import ProductCardSkeleton from "./_components/ProductCardSkeleton";
import ProductsList from "./_components/ProductList";

const Products = () => {
  const productsPromise = getAllProducts();

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
        <Suspense
          fallback={
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <ProductsList productsPromise={productsPromise} />
        </Suspense>
      </Container>
    </section>
  );
};

export default Products;
