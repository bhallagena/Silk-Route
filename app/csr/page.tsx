"use client";
import React, { useState } from 'react';
import { Globe2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
}

interface CSRImage {
  id: number;
  url: string;
  alt: string;
}

const csrImages: CSRImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    alt: "Medical camp registration"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    alt: "People waiting in line"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1576091160310-dec503adb6b3?w=800&auto=format&fit=crop&q=80",
    alt: "Doctor consultation"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1576091160291-7e81c184d4d6?w=800&auto=format&fit=crop&q=80",
    alt: "Camp entrance"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1576091160236-73d3c4033929?w=800&auto=format&fit=crop&q=80",
    alt: "Medical camp banner"
  }
];

interface ImageModalProps {
  image: CSRImage | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function ImageModal({ image, onClose, onPrevious, onNext }: ImageModalProps) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div 
        className="relative max-w-5xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

function CSRImageCard({ image, onClick }: { image: CSRImage; onClick: () => void }) {
  return (
    <div 
      className="relative aspect-[4.5/3] rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    </div>
  );
}

function CSRPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImageIndex(current => 
      current !== null ? (current - 1 + csrImages.length) % csrImages.length : null
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(current => 
      current !== null ? (current + 1) % csrImages.length : null
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 text-center">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-gray-600">
          At Silkroute, corporate social responsibility is at the heart of our mission, reflecting our commitment to uplifting communities and creating a meaningful impact beyond fashion. We actively organize relief camps and social initiatives to support the underprivileged, ensuring access to essential resources and opportunities for a better future. Rooted in ethical values and sustainability, we strive to empower artisans, promote fair trade, and contribute to social welfare while maintaining our dedication to high-quality craftsmanship. By blending tradition with responsibility, we continue to build a brand that values people, the planet, and purposeful change.

          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Eye Check Up Camp
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrImages.map((image, index) => (
              <CSRImageCard
                key={image.id}
                image={image}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dudu camp
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrImages.map((image, index) => (
              <CSRImageCard
                key={image.id}
                image={image}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      

      <ImageModal 
        image={selectedImageIndex !== null ? csrImages[selectedImageIndex] : null}
        onClose={() => setSelectedImageIndex(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

export default CSRPage;