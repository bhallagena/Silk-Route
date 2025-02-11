import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <Link href={"https://wa.me/+917044939051"}>
      <div className="fixed bottom-5 right-5  bg-gradient-to-r from-green-400 to-green-500 z-50 p-5 rounded-full text-white">
        <PhoneIcon className="text-white fill-white w-6 h-6" />
      </div>
    </Link>
  );
};

export default Banner;
