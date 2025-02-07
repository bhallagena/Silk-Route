import React from "react";
import Product from "../_components/Product";

interface Props {
  params: Promise<{
    collectionId: string;
  }>;
}

const page = async ({ params }: Props) => {
  const unwrappedParams = await params;

  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Product id={unwrappedParams.collectionId} />
    </div>
  );
};

export default page;
