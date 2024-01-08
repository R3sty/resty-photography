"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Edit, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const SiteHeader: React.FC = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (pathName.startsWith("/studio")) return null;

  return (
    <header className={`sticky top-0 z-40 w-full border-b bg-background transform transition-transform duration-300 ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto flex h-16 items-center px-6 justify-between">
        <MainNav />

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu />
          </button>
        </div>

        <div className="hidden lg:flex items-center">
          <div className="flex space-x-10">
          <Link href="/photography" className="hover:text-blue-800">Photography</Link>
            <Link href="/projects" className="hover:text-blue-800">Web dev</Link>
           {/* <Link href="/store" className="hover:text-blue-800">Store</Link> */}
            <Link href="/contact" className="hover:text-blue-800">Contact me</Link>
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

      {isOpen && (
        <div className="block lg:hidden absolute top-16 left-0 w-full bg-background z-50">
          <div className="flex flex-col space-y-2 mt-2 mx-6">
            <Link href="/photography" className="hover:text-blue-800">Photography</Link>
            <Link href="/projects" className="hover:text-blue-800">Web dev</Link>
            {/* <Link href="/store" className="hover:text-blue-800">Store</Link> */}
            <Link href="/contact" className="hover:text-blue-800">Contact me</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
