import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const collectionItems = [
    {
      id: 1,
      defaultImage: "/images/0A4A2401.JPG",
      hoverImage: "/images/0A4A2402.JPG",
      name: "Summer Collection",
      price: 299,
    },
    {
      id: 2,
      defaultImage: "/images/0A4A2417.JPG",
      hoverImage: "/images/0A4A2420.JPG",
      name: "Autumn Essentials",
      price: 349,
    },
    {
      id: 3,
      defaultImage: "/images/0A4A2427.JPG",
      hoverImage: "/images/0A4A2428.JPG",
      name: "Winter Elegance",
      price: 399,
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="h-screen relative overflow-hidden">
        <img
          src="/images/0A4A2428.JPG"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
              SILK ROUTE
            </h1>
            <p className="text-xl md:text-2xl tracking-wide mb-8">
              Elegance in Every Thread
            </p>
            <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-light text-center mb-16">
          Latest Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collectionItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
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
              <div className="mt-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600 mt-1">
                  Starting from ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                Founded on the principles of quality and sustainability, Silk
                Route brings together traditional craftsmanship with modern
                design sensibilities. Our journey began with a simple idea: to
                create timeless pieces that celebrate the art of textile making.
              </p>
              <button className="flex items-center text-lg hover:space-x-4 transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80"
                alt="About"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-6">Sustainable Fashion</h2>
          <p className="text-gray-600 mb-12">
            We believe in creating fashion that respects both people and planet.
            Every piece is crafted with care using sustainable materials and
            ethical practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Organic Materials", "Ethical Production", "Zero Waste"].map(
            (item) => (
              <div key={item} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-4">{item}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
