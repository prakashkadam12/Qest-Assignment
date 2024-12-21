import React, { useState } from "react";

const FifthComponent = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="text-center py-8 md:py-12 bg-white px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Choose Plan<br className="hidden md:block"/> That's Right For You
      </h2>
      <p className="text-gray-500 mb-6 text-sm md:text-base">
        Simple and transparent pricing. Start for free, upgrade when you love it.{" "}
        <br className="hidden md:block"/>
        <span className="text-[#A10F0F] font-medium">30 day free trial in a button</span>
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 mb-8">
        <p className="text-gray-700 font-medium">
          Running a <span className="font-bold">Growth Business or Enterprise?</span>{" "}
          Let's connect -{" "}
        </p>
        <button className="bg-[#F54F35] w-[99px] h-[29px] text-white py-1 px-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 md:ml-2">
          Talk to Sales
        </button>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-10">
        <span className="text-gray-600 font-medium">Monthly</span>
        <button
          onClick={toggleBilling}
          className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
            isYearly ? "bg-red-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 font-medium">Yearly</span>
          <span className="bg-red-100 text-red-500 font-semibold text-xs py-1 px-2 rounded-full">
            SAVE 25%
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 p-4 md:p-6">
        {/* Starter Plan */}
        <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm w-full md:w-[327px] md:h-[567px] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-red-500 text-left ml-4">STARTER</h3>
            <div className="flex items-baseline ml-4 mt-4">
              <p className="text-3xl font-normal">$</p>
              <p className="text-6xl font-bold">17</p>
              <p className="text-xl font-normal ml-2">/ month</p>
            </div>
            <p className="text-gray-500 mb-6 text-sm text-left mt-6 ml-4">billed monthly</p>
            <ul className="space-y-4 mt-8 text-base md:text-lg">
              {[
                "Commercial License",
                "100+ HTML UI Elements",
                "Unlimited Domain Support",
                { text: "6 Month Premium Support", disabled: true },
                { text: "Lifetime Updates", disabled: true }
              ].map((item, index) => (
                <li key={index} className={`flex items-center ${typeof item === 'object' && item.disabled ? 'text-gray-400' : ''}`}>
                  <svg className={`w-4 h-4 mr-2 ${typeof item === 'object' && item.disabled ? 'text-gray-400' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={typeof item === 'object' && item.disabled ? 
                      "M5.293 4.707a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" :
                      "M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"} 
                      clipRule="evenodd" />
                  </svg>
                  {typeof item === 'object' ? item.text : item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-[#FEF1EF] text-[#F54F35] w-full md:w-[205px] h-[69px] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#F54F35] hover:text-white transition-colors duration-300">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-[#161C2D] font-semibold mt-4 text-sm">No credit card required</p>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm w-full md:w-[327px] md:h-[567px] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-red-500 text-left ml-4">PREMIUM</h3>
            <div className="flex items-baseline ml-4 mt-4">
              <p className="text-3xl font-normal">$</p>
              <p className="text-6xl font-bold">88</p>
              <p className="text-xl font-normal ml-2">/ month</p>
            </div>
            <p className="text-gray-500 mb-6 text-sm text-left mt-6 ml-4">billed monthly</p>
            <ul className="space-y-4 mt-8 text-base md:text-lg">
              {[
                "Commercial License",
                "100+ HTML UI Elements",
                "Unlimited Domain Support",
                "6 Month Premium Support",
                "Lifetime Updates"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-[#FEF1EF] text-[#F54F35] w-full md:w-[205px] h-[69px] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#F54F35] hover:text-white transition-colors duration-300">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-[#161C2D] font-semibold mt-4 text-sm">No credit card required</p>
          </div>
        </div>
      </div>

      <p className="text-blue-500 font-medium mt-8 underline cursor-pointer hover:text-blue-600">
        Explore In-Depth Differences
      </p>
    </section>
  );
};

export default FifthComponent;