import React from "react";

interface Props {
  setSelectedTag: (value: string) => void;
  selectedTag: string;
}

const CollectionHeader = ({ setSelectedTag, selectedTag }: Props) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-light mb-4">Our Collection</h1>
      <p className="text-gray-600 mb-8">
        Discover our seasonal collections crafted with precision and care
      </p>

      {/* Filter Tags */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setSelectedTag("all")}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedTag === "all"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedTag("summer")}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedTag === "summer"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Summer
        </button>
        <button
          onClick={() => setSelectedTag("winter")}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedTag === "winter"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Winter
        </button>
      </div>
    </div>
  );
};

export default CollectionHeader;
