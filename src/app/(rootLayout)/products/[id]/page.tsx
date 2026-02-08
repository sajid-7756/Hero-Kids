import Image from "next/image";
import { getSingleProduct } from "@/services/productService";
import Container from "@/components/common/Container";
import { Star } from "lucide-react";
import AddToCartBtn from "@/app/(rootLayout)/products/[id]/_components/AddToCartBtn";
import BuyNowBtn from "@/components/buttons/buy-now/BuyNowBtn";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return {
    title: product.bangla,

    description: product.description.slice(0, 150),

    openGraph: {
      title: product.bangla,
      description: product.description.slice(0, 150),
      images: [
        {
          url: product.image,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  const discount = product.discount ?? 0;
  const finalPrice = product.price - (product.price * discount) / 100;

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className=" h-auto w-auto"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold md:text-3xl">{product.bangla}</h1>

            <p className="text-muted-foreground">{product.title}</p>

            {/* Ratings */}
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{product.ratings}</span>
              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
              <span className="ml-2 text-muted-foreground">
                Sold {product.sold}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                ৳{Math.round(finalPrice)}
              </span>

              {discount > 0 && (
                <span className="text-muted-foreground line-through">
                  ৳{product.price}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <AddToCartBtn product={product} />
              <BuyNowBtn product={product} />
            </div>

            {/* Info Highlights */}
            <ul className="space-y-1 text-sm text-muted-foreground">
              {product.info.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">Product Description</h2>

          <p className="whitespace-pre-line text-muted-foreground">
            {product.description}
          </p>
        </div>

        {/* Q&A Section */}
        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {product.qna.map(
              (item: { question: string; answer: string }, index: number) => (
                <div key={index} className="rounded-lg border p-4">
                  <p className="font-medium">{item.question}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
