"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

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
    <nav className={` fixed w-full bg-white/80 backdrop-blur-md z-50 transition-transform duration-300 ${
        isNavbarHidden ? "transform -translate-y-full" : ""
      }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-light tracking-widest">
          SILK ROUTE
        </Link>
        
        {/* Main Navigation */}
        <div className="flex space-x-8">
          <Link href="/about" className="text-gray-600 hover:text-black transition">About Us</Link>
          <Link href="/collection" className="text-gray-600 hover:text-black transition">Collection</Link>
          <Link href="/services" className="text-gray-600 hover:text-black transition"> Services</Link>
          <Link href="/csr" className="text-gray-600 hover:text-black transition">CSR</Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-black transition">Testimonials</Link>
          <Link href="/partners" className="text-gray-600 hover:text-black transition">Partners</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black transition">Contact Us</Link>
        </div>

        {/* Icons */}
        {/* <div className="flex items-center space-x-6">
          <button className="hover:text-gray-600 transition">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-gray-600 transition">
            <User className="h-5 w-5" />
          </button>
          <button className="hover:text-gray-600 transition">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div> */}
      </div>
    </div>
  </nav>
  )
}

export default Navbar