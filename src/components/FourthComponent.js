import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sports from "../assets/Sports.png";
import healthcare from "../assets/Healthcare.png";
import Learning from "../assets/Learning.png";

const FourthComponent = () => {
  const industries = [
    {
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses",
      link: "Know more...",
      image: sports, // Correctly assigning the imported image
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors and gyms",
      link: "Know more...",
      image: healthcare,
    },
    {
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios",
      link: "Know more...",
      image: Learning,
    },
    {
      title: "Household Services",
      description:
        "From Plumbing to Cleaning and all Household Services in between",
      link: "Know more...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Miscellaneous",
      description:
        "From Event Planning to Photography and All Services in between",
      link: "Know more...",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < industries.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Empowering Service <br className="hidden md:block" /> Providers Across Industries
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 max-w-3xl mx-auto">
            Whether you're in sports, education, wellness, household services, or niche markets, our technology
            <br className="hidden md:block" /> simplifies your business operations, making it easier for you to focus on what you do best.
          </p>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-14">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className={`rounded-full p-2 shadow-md mx-2 md:mx-4 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex space-x-4 md:space-x-6 overflow-hidden">
            {industries
              .slice(
                currentIndex,
                currentIndex + getVisibleCards()
              )
              .map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full max-w-[300px] md:w-[302px] bg-white rounded-lg shadow-lg"
                >
                  {industry.image ? (
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-40 md:h-56 object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-40 md:h-56 bg-gray-200 rounded-t-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm md:text-base">No Image Available</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg md:text-3xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4">{industry.description}</p>
                    <a href="#" className="text-blue-500 hover:underline text-sm md:text-base">
                      {industry.link}
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`rounded-full p-2 shadow-md mx-2 md:mx-4 ${
              currentIndex >= industries.length - getVisibleCards()
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthComponent;