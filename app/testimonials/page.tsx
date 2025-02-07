"use client";
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    videoUrl: "https://player.vimeo.com/external/373839467.sd.mp4?s=39c5c955fc5c3ee1f49dd4d37c29c41d69c05b7c&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    videoUrl: "https://player.vimeo.com/external/403293771.sd.mp4?s=92c2458c403ba50b2a89c8992a9674c1460328eb&profile_id=164&oauth2_token_id=57447761"
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div 
        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video 
          src={testimonial.videoUrl}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay={false}
          ref={(video) => {
            if (video) {
              if (isHovered) {
                video.play();
              } else {
                video.pause();
                video.currentTime = 0;
              }
            }
          }}
        />
        {!isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Quote className="w-12 h-12 text-white opacity-80" />
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Hear directly from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;