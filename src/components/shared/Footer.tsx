import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Hero<span className="text-primary">Kids</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              HeroKids is a small, single-vendor e-commerce platform designed
              for selling quality, fun, and safe products for children.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HeroKids. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
