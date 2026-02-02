"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};
const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors",
        isActive ? "font-bold text-black" : "text-muted-foreground hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
