import React from 'react';
import { ArrowRight } from 'lucide-react';
import rmax from "../assets/RMax.png";
 // Import the sparkle icon

function App() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Search Bar Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-1 mb-6 mt-4">
          {/* Logo Box */}
          <div className="flex items-center justify-center w-[71.88px] h-[58.48px] bg-white border border-gray-200 rounded-md">
            <div className="text-center">
              <span className="block text-base font-medium text-gray-700 ml-6">AI</span>
              <img 
                src={rmax} 
                alt="RMax Logo" 
                className="h-1 md:h-5 w-auto mx-auto mb-3"
              />
            </div>
          </div>
          {/* Text Box */}
          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm w-full md:w-[382.56px] h-[58.48px] text-center">
            <div className="text-[#CACACA] text-base md:text-lg font-medium text-center mt-1">
              Curious? Let AI Uncover the Answers!
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 md:mt-14 space-y-4">
          {/* Headings */}
          <div className="text-3xl md:text-6xl font-bold text-gray-800 font-inter leading-tight space-y-2 md:space-y-4 ">
            <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 font-inter leading-tight space-y-2 md:space-y-4">
              Maximize Your Impact
            </h1>
            <h2 className="text-[#F54F35] font-Urbanist font-extrabold text-6xl">
              Business with 
              <span className="text-black font-bold ml-2">R</span>
              <span className="text-red-900 font-bold ">Max</span>
            </h2>
          </div>

          {/* Subheading */}
          <p
            className="text-gray-600 text-base md:text-lg px-4 md:px-0 mb-14 md:mb-20"
            style={{ marginTop: "40px" }} // Adjust the value as needed
          >
            Enhance your business with Rmax's all-in-one platform—streamlining
            <br className="hidden md:block" /> client engagement, automating workflows, and fueling growth.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4" 
            style={{ marginTop: "60px" }} // Adjust this value as needed
          >
            <button className="bg-[#F54F35] text-white px-2 py-2 rounded-lg hover:bg-red-500 inline-flex items-center justify-center gap-2 w-full md:w-[126px] h-[49px]">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-black border border-gray-200 px-2 py-1 font-semibold rounded-lg text-sm hover:bg-gray-100 w-full md:w-[120px] h-[49px]">
              Book A Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 md:px-44 mt-10 md:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Seamless Onboarding",
              "Client Engagement",
              "Generate Report",
              "Revenue Growth",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg text-xl py-4 px-6 text-[#1F1F1F] font-urbanist hover:shadow-lg h-[46px] flex items-center justify-center border border-gray-200"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
