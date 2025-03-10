"use client";
import Image from "next/image";
import { ArrowRight, Recycle, Handshake, Sprout } from "lucide-react";
import Slide from "@/components/Slide";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";

export default function Home() {
  const collectionItems = [
    {
      id: 1,
      defaultImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/11%2F0A4A1981-1.jpg?alt=media&token=6bb978bd-8e37-4c83-b578-ff4df6072a89",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/11%2F0A4A1984-3.jpg?alt=media&token=9596e9e0-c191-4e67-a6d8-49ea17ead155",
      name: "All",
      href: "/collection",
    },

    {
      id: 2,
      defaultImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/4%2F0A4A1888-1.jpg?alt=media&token=8b92ae7e-e28f-4406-b924-b6fd7549e82d",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/4%2F0A4A1895-1.jpg?alt=media&token=b1fcd307-4ed8-4110-9b4f-c4c7d2c70fb9",
      name: "Summer",
      href: "/collection?tags=summer",
    },
    {
      id: 3,
      defaultImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/15%2F0A4A2067-1.jpg?alt=media&token=f7bda7ea-9ca2-4f15-b841-eb6f3229fe04",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/15%2F0A4A2069-1.jpg?alt=media&token=adc90638-1262-4627-abae-ef3b2879a57a",
      name: "Winter",
      href: "/collection?tags=winter"
    },
  ];
  const logoSources = [
    "/logo/1.png",
    "/logo/2.svg",
    "/logo/3.svg",
    "/logo/4.svg",
    "/logo/5.svg",
    "/logo/6.svg",
    "/logo/7.svg",
    "/logo/8.svg",
    "/logo/9.png",
    "/logo/10.svg",
    "/logo/11.avif",
    "/logo/12.png",
    "/logo/13.png",
    "/logo/14.png",
    "/logo/15.png",
    "/logo/16.webp",
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 3250);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="sync">
        {isLoading && <Preloader key="1" />}
      </AnimatePresence>
      <section className="h-screen relative overflow-hidden">
        <img
          src="/WB EDITED 1.png"
          alt="Hero"
          className="absolute hidden md:block inset-0 w-full max-h-fit object-cover"
        />
        <img
          src="/911.jpg"
          alt="Hero"
          className="absolute md:hidden  inset-0 w-full h-full object-cover"
        />
        {/* <video
          key="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/111.jpg"
          className="absolute w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            target.style.display = "none";
          }}
        >
          <source src="/videos/silkroute-landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
              SILK ROUTE
            </h1>
            <p className="text-xl md:text-2xl tracking-wide mb-8">
              Elegance in Every Thread
            </p>
            <button
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition duration-300"
              onClick={() => window.open("/collection")}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Slide>
          <h2 className="text-3xl font-light text-center mb-16">
            Latest Collection
          </h2>
        </Slide>
        <Slide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collectionItems.map((item) => (
              <Link href={item.href} passHref key={item.id}>
                <div className="group relative cursor-pointer ">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.defaultImage}
                      alt={item.name}
                      width={384}
                      height={500}
                      className="ease-in-out w-full h-[500px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                      src={item.hoverImage}
                      alt={`${item.name} Alternate View`}
                      width={384}
                      height={500}
                      className="ease-in-out absolute inset-0 w-full h-[500px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <div className="mt-6 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-semibol text-center ">
                      {item.name}
                    </h3>
                    {/* <p className="mt-1">Starting from ${item.price}</p> */}
                    <InteractiveHoverButton className=" mt-2 font-medium">
                      Explore
                    </InteractiveHoverButton>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Slide>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Slide>
                <h2 className="text-3xl font-light mb-6">Our Story</h2>
              </Slide>
              <Slide>
                <p className="mb-8">
                  Founded on the principles of quality and sustainability, Silk
                  Route brings together traditional craftsmanship with modern
                  design sensibilities. Our journey began with a simple idea: to
                  create timeless pieces that celebrate the art of textile
                  making.
                </p>
              </Slide>
              <Link href="/about" passHref>
                <InteractiveHoverButton className="font-normal">
                  Learn More
                </InteractiveHoverButton>
              </Link>
            </div>
            <Slide>
              <div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/about%2FWORLD%20MAP%20final.png?alt=media&token=405aa5ac-9e4a-49a9-9a4e-d3f9b9a8703e"
                  alt="About"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <Slide>
            <h2 className="text-3xl font-light mb-6">Our Services</h2>
          </Slide>
          <Slide>
            <p className="mb-12">
              We believe in creating fashion that respects both people and
              planet. Every piece is crafted with care using sustainable
              materials and ethical practices.
            </p>
          </Slide>
        </div>
        <Slide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Organic Materials",
                desc: "We source only the finest, ethically harvested fibers, transformed through our exquisite hand-weaving, printing, dyeing, embroidery, and hand painting techniques, ensuring every piece reflects true beauty.",
                icon: <Sprout className="h-8 w-8" />,
              },
              {
                name: "Ethical Production",
                desc: "Our artisans craft each piece under fair conditions, backed by prompt communication and robust in-house quality checks that guarantee exceptional standards from start to finish.",
                icon: <Handshake className="h-8 w-8" />,
              },
              {
                name: "Zero Waste",
                desc: "By meticulously repurposing every material remnant through innovative techniques, we ensure that our production of timeless scarves and garments not only delights our customers but also champions sustainability.",
                icon: <Recycle className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 text-primary rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center justify-center">
          <Slide>
            <h2 className="text-3xl font-light mb-6">Our Partners</h2>
          </Slide>
          <Slide>
            <p className="mb-12">
              We collaborate with top brands of the planet.
            </p>
          </Slide>
        </div>
        <Slide>
          <div
            className="relative flex w-full flex-col items-center justify-center overflow-hidden"
            style={{ userSelect: "none" }}
          >
            <Marquee pauseOnHover className="[--duration:50s]">
              {logoSources.map((img, index) => (
                <div key={index} className="grid place-items-center">
                  <Image
                    src={img}
                    height={50}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:50s]">
              {logoSources.map((img, index) => (
                <div key={index} className="grid place-items-center">
                  <Image
                    src={img}
                    height={50}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
          </div>
        </Slide>
      </section>
    </div>
  );
}
