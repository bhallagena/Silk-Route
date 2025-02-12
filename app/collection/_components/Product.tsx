"use client";

import AccordionExample from "@/components/Accordion";
import { collections, CollectionType } from "@/data";
import { Heart, LucideLoader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

const Product = ({ id }: Props) => {
  const [data, setData] = useState<CollectionType | undefined>(undefined);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (id) {
      setData(collections.find((item) => item.id === parseInt(id)));
      setLike(!!localStorage.getItem(`isLiked-${id}`));
    }
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-screen">
        <LucideLoader2 className="animate-spin w-10 h-10" />
      </div>
    );
  }

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      localStorage.setItem(`isLiked-${data.id}`, JSON.stringify(true));

      const wishlist = localStorage.getItem(`wishlist`) || null;

      if (wishlist) {
        const list = JSON.parse(wishlist);
        list.push(data);
        localStorage.setItem(`wishlist`, JSON.stringify(list));
      } else {
        localStorage.setItem(`wishlist`, JSON.stringify([data]));
      }
      
      toast("Added to liked products !");
    } else {
      localStorage.removeItem(`isLiked-${data.id}`);
      localStorage.removeItem(`wishlist`);

      toast("Removed from liked products !");
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row md:justify-center gap-20">
        <div className="relative overflow-hidden group cursor-pointer w-96 h-full rounded-md">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-[500px] object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={data.hoverImage}
            alt={`${data.name} Alternate View`}
            className="absolute inset-0 w-full h-[500px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-start gap-32">
            <div>
              <h3 className="text-3xl font-bold">{data.name}</h3>
              <p className="mt-5">Starting from ${data.price}</p>
            </div>
            <div>
              <Heart
                className={`w-6 h-6 cursor-pointer ${like ? "fill-black" : ""}`}
                onClick={() => handleLike()}
              />
            </div>
          </div>
          <AccordionExample />
          <Link href="/contact">
            <button className="text-white bg-[#1e1d25] hover:bg-[#3a3941] py-4 uppercase font-bold rounded-md w-full">
              Enquire Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
