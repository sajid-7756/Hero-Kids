import Image from "next/image";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
          {/* Text Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-bold leading-tight md:text-5xl">
              আপনার শিশুকে দিন একটি সুন্দর ভবিষ্যৎ
            </h3>

            <p className="text-muted-foreground">
              Buy every toy up to{" "}
              <span className="font-semibold text-primary">15% OFF</span>
            </p>

            <Button size="lg" className="mt-2">
              Explore Products
            </Button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/hero.png"
              alt="HeroKids banner image"
              width={600}
              height={400}
              priority
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
