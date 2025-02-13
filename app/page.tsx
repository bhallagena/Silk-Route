"use client";
import Image from "next/image";
import { ArrowRight, Recycle, Handshake, Sprout } from "lucide-react";
import Slide from "@/components/Slide";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

export default function Home() {
  const collectionItems = [
    {
      id: 1,
      defaultImage: "/images/0A4A1984-3.jpg",
      hoverImage: "/images/0A4A1981-1.jpg",
      name: "Summer Collection",
      price: 299,
    },

    {
      id: 2,
      defaultImage: "/images/0A4A1888-1.jpg",
      hoverImage: "/images/0A4A1895-1.jpg",
      name: "Winter Elegance",
      price: 399,
    },
    {
      id: 3,
      defaultImage: "/images/0A4A2069-1.jpg",
      hoverImage: "/images/0A4A2067-1.jpg",
      name: "Autumn Essentials",
      price: 349,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="h-screen relative overflow-hidden">
        {/* <img
          src="/111.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <video
        key="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/111.jpg"
          className="absolute w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLVideoElement
            target.style.display = "none"
          }}
        >
          <source src="/videos/silkroute-landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
              <Link href={`/collection/${item.id}`} passHref key={item.id}>
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
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80"
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

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            className="flex overflow-hidden h-auto max-w-full bg-[linear-gradient(to right, rgba(255, 255, 255, 0), white)]"
            style={{ userSelect: "none" }}
          >
            <div className="flex flex-shrink-0 items-center animate-slider justify-around whitespace-nowrap w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img) => (
                <div key={img} className="grid place-items-center ">
                  <Image
                    src={`/logos/${img}.jpg`}
                    height={69}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-shrink-0 items-center animate-slider justify-around whitespace-nowrap w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img) => (
                <div key={img} className="grid place-items-center">
                  <Image
                    src={`/logos/${img}.jpg`}
                    height={50}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex overflow-hidden h-auto mt-10 max-w-full"
            style={{ userSelect: "none" }}
          >
            <div className="flex flex-shrink-0 items-center animate-slidee justify-around whitespace-nowrap w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img) => (
                <div key={img} className="grid place-items-center ">
                  <Image
                    src={`/logos/${img}.jpg`}
                    height={69}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-shrink-0 items-center animate-slidee justify-around whitespace-nowrap w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img) => (
                <div key={img} className="grid place-items-center">
                  <Image
                    src={`/logos/${img}.jpg`}
                    height={50}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Slide>
      </section>
    </div>
  );
}
