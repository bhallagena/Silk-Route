"use client";
import Link from "next/link";
import React, { useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import Curve from './Curve';

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
const menuSlide = {
  initial: { x: "calc(100% + 100px)" },

  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={`h-screen fixed right-0 top-0 bg-black w-screen text-white ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="gap-3 text-xl "
          >
            <div className="flex items-center justify-between p-5 border-b  uppercase text-2xl ">
              <div className="w-11"></div>
              <p className="text-center">Navigation</p>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 cursor-pointer rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-6  text-2xl p-5">

            {navLinks.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  selectedIndicator={selectedIndicator}
                  setIsOpen={setIsOpen}
                ></NavLink>
              );
            })}
            </div>
          </div>
        </div>
        <Curve/>
      </motion.div>
    </>
  );
};

export default Sidebar;
