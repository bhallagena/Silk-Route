"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type Props = {};

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Collection",
    href: "/collection",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "CSR",
    href: "/csr",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Partners",
    href: "/partners",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Navbar = (props: Props) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [wishlist, setWishlist] = useState<
    {
      id: string;
      name: string;
      price: number;
      image: string;
      hoverImage: string;
    }[]
  >([]);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const wishlist = localStorage.getItem("wishlist");

    if (wishlist) {
      setWishlist(JSON.parse(wishlist));
    }
  }, []);

  // console.log(wishlist);

  return (
    <nav
      className={` fixed w-full bg-white/80 backdrop-blur-md z-[90] transition-transform duration-300 ${
        isNavbarHidden ? "transform -translate-y-full" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-widest">
            <Image
              src="/Logo-1.png"
              height={50}
              width={150}
              alt="company-logo"
            />
          </Link>

          {/* Main Navigation */}
          <div className="md:flex space-x-8 hidden">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={cn(
                  "text-gray-600 hover:text-black transition",
                  pathname === link.href && "text-black"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="cursor-pointer">
            <Popover>
              <PopoverTrigger asChild>
                <h1 className="text-gray-600 hover:text-black transition">
                  <ShoppingCart />
                </h1>
              </PopoverTrigger>
              <PopoverContent className="relative top-7 z-[99]">
                <ul className="space-y-2">
                  {wishlist.length === 0 ? (
                    <h1 className="p-3 ">No items in wishlist!</h1>
                  ) : (
                    wishlist.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-row justify-between border-b p-3 cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/collection/${item.id}`)
                        }
                      >
                        <img
                          src={item.image}
                          alt={item.id}
                          className="w-14 h-14 rounded-md"
                        />
                        <h1>{item.id}</h1>
                      </div>
                    ))
                  )}
                </ul>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <button className="text-gray-600 hover:text-black transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
