import Link from "next/link";
import React from "react";
import { X } from "lucide-react";

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

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out w-64 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="py-4">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
