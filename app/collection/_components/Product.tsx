"use client";

import { collections, CollectionType } from "@/data";
import { Heart, LucideLoader2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  id: string;
}

const Product = ({ id }: Props) => {
  const [data, setData] = useState<CollectionType | undefined>(undefined);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (id) {
      setData(collections.find((item) => item.id === parseInt(id)));
    }
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-screen">
        <LucideLoader2 className="animate-spin w-5 h-5" />
      </div>
    );
  }

  const handleLike = () => {
    setLike(!like);
    if (like) localStorage.setItem("liked-products", JSON.stringify(data));
    else localStorage.removeItem("liked-products");
  };

  console.log(localStorage.getItem("liked-products"));
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 w-full">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <Image
            src={data.image}
            alt={data.name}
            width={384}
            height={500}
            className="w-full h-[500px] object-cover rounded-md"
          />
          <Image
            src={data.hoverImage}
            alt={data.name}
            width={100}
            height={100}
            className="w-40 h-40 rounded-md"
          />
        </div>
        <div className="flex flex-row justify-between items-start w-full">
          <div>
            <h3 className="text-3xl font-bold">{data.name}</h3>
            <p className="mt-1">Starting from ${data.price}</p>
          </div>
          <div>
            <Heart
              className={`w-6 h-6 cursor-pointer ${like ? "fill-black" : ""}`}
              onClick={() => handleLike()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
