import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavLink from "../buttons/NavLink";
import ShoppingCartBtn from "../buttons/ShoppingCartBtn";
import AuthButtons from "../buttons/AuthButtons";
import { getCurrentUser } from "@/lib/auth";

const Navbar = async () => {
  const session = await getCurrentUser();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Hero<span className="text-primary">Kids</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary"
            >
              {item.label}
            </NavLink>
          ))}

          {/* Shopping Cart Button  */}
          <ShoppingCartBtn />

          {/* Auth Buttons */}
          <AuthButtons session={session} />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem asChild key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}

              {/* Auth Buttons */}
              <AuthButtons session={session} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
