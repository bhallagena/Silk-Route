"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

type Props = {}

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
]

const Navbar = (props: Props) => {
    const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname()

  useEffect(() => {
    const controlNavbar = () => { 
      if (window.scrollY > lastScrollY) {
        setIsNavbarHidden(true)
      } else {
        setIsNavbarHidden(false)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", controlNavbar)

    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])
  return (
    <nav className={` fixed w-full bg-white/80 backdrop-blur-md z-[90] transition-transform duration-300 ${
        isNavbarHidden ? "transform -translate-y-full" : ""
      }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-light tracking-widest">
          SILK ROUTE
        </Link>
        
        {/* Main Navigation */}
        <div className="md:flex space-x-8 hidden">
          {navLinks.map((link) => (
          <Link key={link.title} href={link.href} className={cn("text-gray-600 hover:text-black transition", pathname === link.href && "text-black")}>
            {link.title}
          </Link>
          ))}
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
  )
}

export default Navbar