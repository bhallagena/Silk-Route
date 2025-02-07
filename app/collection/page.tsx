"use client";

import { useQueryState } from "nuqs";
import React from "react";
import CollectionHeader from "./_components/CollectionHeader";
import { collections } from "@/data";
import Link from "next/link";

const page = () => {
  const [selectedTag, setSelectedTag] = useQueryState("tags", {
    defaultValue: "all",
  });

  const filteredCollections =
    selectedTag === "all"
      ? collections
      : collections.filter((item) => item.tag === selectedTag);

  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <CollectionHeader
        setSelectedTag={setSelectedTag}
        selectedTag={selectedTag}
      />

      {/* Collection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCollections.map((item) => (
          <Link href={`/collection/${item.id}`}>
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&q=80`}
                  alt={item.name}
                  className="w-full h-[500px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={`https://images.unsplash.com/${item.hoverImage}?auto=format&fit=crop&q=80`}
                  alt={`${item.name} Alternate View`}
                  className="absolute inset-0 w-full h-[500px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600 mt-1">${item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
