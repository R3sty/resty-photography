"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const SiteHeader: React.FC = () => {
  const [scrollDir, setScrollDir] = useState("up");

  // Assuming usePathname is available in your project
  const pathName = usePathname();

  useEffect(() => {
    if (pathName.startsWith("/studio")) return;

    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const { scrollY } = window;
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [pathName]);

  if (pathName.startsWith("/studio")) return null;

  return (
    <header className={`sticky top-0 z-40 w-full border-b bg-background transform transition-transform duration-300 ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto flex h-16 items-center px-6 justify-between">
        <MainNav />
        <div className="flex items-center">
          <div className="flex">
            <Link href="/blog" className="hover:text-blue-800 mr-10">Blog</Link>
            <Link href="/projects" className="hover:text-blue-800 mr-10">Web dev</Link>
            <Link href="/store" className="hover:text-blue-800 mr-10">Store</Link>
            <Link href="/contact" className="hover:text-blue-800 mr-10">Contact me</Link>
          </div>
          <div className="flex items-center space-x-1">
            <ThemeToggle />
            {process.env.NODE_ENV === "development" && (
              <Link href="/studio">
                <Button size="sm" variant="ghost">
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
