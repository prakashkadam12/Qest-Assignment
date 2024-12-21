import React, { useState } from "react";
import { Link } from "react-router-dom";
import rightside from "../assets/right side.png";
import above from "../assets/above.png";
import searchicon from "../assets/search icon.png";

const FAQComponent = () => {
  const [faq, setFaq] = useState([
    {
      question: "What is RMax?",
      answer:
        "Qest, is a SaaS platform/ecosystem that lets any small to medium service business set up & manage their business quickly & easily.",
      isOpen: true,
    },
    {
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      isOpen: false,
    },
    {
      question: "How much does it cost?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor consequat velit.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };

  return (
    <div className="bg-white py-6 md:py-10 text-center px-4 md:px-0">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg mt-4 md:mt-8">
          Find answers to common questions about our services and features.
          <br className="hidden md:block" />
          For more details, contact our support team.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6 md:mb-8 mt-8 md:mt-16 px-4 md:px-0">
        <div className="w-full max-w-[722px] flex">
          <input
            type="text"
            placeholder="Ask Q! e.g Tell me about key Features."
            className="flex-1 h-10 md:h-[48px] p-3 text-base md:text-lg border border-gray-300 rounded-l-lg"
          />
          <button className="bg-[#F54F35] text-white px-3 md:p-3 text-lg rounded-r-lg flex items-center justify-center">
            <img src={searchicon} alt="Search" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-[760px] mx-auto text-left px-4 md:px-0">
        {faq.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-md mb-2 p-3 md:p-4 transition-all duration-200 ${
              item.isOpen 
                ? "bg-gray-100 min-h-[120px] md:h-[165px]" 
                : "bg-white min-h-[60px] md:h-[83px]"
            }`}
          >
            <div
              onClick={() => toggleFaq(index)}
              className="cursor-pointer text-base md:text-lg font-semibold text-gray-800 flex justify-between items-center"
            >
              <span className="pr-4">{item.question}</span>
              <img
                src={item.isOpen ? above : rightside}
                alt={item.isOpen ? "Collapse" : "Expand"}
                className="w-2 md:w-2.5 h-3 md:h-4 flex-shrink-0"
              />
            </div>
            {item.isOpen && (
              <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Support Link */}
      <p className="mt-6 md:mt-8 text-gray-600 w-full md:w-3/5 mx-auto text-center text-base md:text-lg px-4 md:px-0">
        Haven't got your answer?{" "}
        <Link to="/support" className="text-[#0000EE] font-semibold">
          Contact our support now
        </Link>
      </p>
    </div>
  );
};

export default FAQComponent;