import React from "react";
import tailright from "../assets/tail-right.png";
import rmax from "../assets/RMax.png";
import contactPage from "../assets/Contact page.png";

const SupportPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 px-4 mb-6 pt-10">
        {/* Logo */}
        <div className="flex items-center justify-center w-[71.88px] h-[58.48px] bg-white border border-gray-200 rounded-md">
          <div className="text-center relative">
            <span className="block text-base font-medium text-gray-700 ml-8">
              AI
            </span>
            <img
              src={rmax}
              alt="RMax Logo"
              className="block mx-auto w-auto h-4 mb-2"
            />
          </div>
        </div>
        {/* Text Box */}
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm w-full sm:w-[382.56px] h-[58.48px] flex items-center justify-center">
          <div className="text-[#CACACA] text-lg font-medium text-center">
            Curious? Let AI Uncover the Answers!
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="py-8 px-6 md:text-left md:ml-16 lg:ml-60 mt-8 md:mt-14">
        <h1 className="text-3xl md:text-6xl font-extrabold font-Urbanist mb-2 text-center md:text-left">
          Get in touch with us.
        </h1>
        <h2 className="text-3xl md:text-6xl font-extrabold text-center font-Urbanist md:text-left">
          We're here to assist you.
        </h2>
      </header>

      {/* Form Section */}
      <main className="max-w-4xl mx-auto p-4 mt-5 md:ml-60">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Business Name */}
          <div className="flex flex-col">
            <label htmlFor="businessName" className="text-lg mb-1 font-Roboto">
              Business Name*
            </label>
            <input
              id="businessName"
              type="text"
              placeholder="Search for your business listing"
              className="border rounded-md p-3 w-full h-[74px]"
              required
            />
          </div>

          {/* Your Name */}
          <div className="flex flex-col">
            <label htmlFor="yourName" className="text-lg mb-1 font-Roboto">
              Your Name*
            </label>
            <input
              id="yourName"
              type="text"
              placeholder="Enter your name"
              className="border rounded-md p-3 w-full h-[74px]"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-lg mb-1 font-Roboto">
              Phone Number*
            </label>
            <div className="flex">
              <select
                id="countryCode"
                className="border rounded-l-md p-3 bg-gray-100 h-[74px] w-[100px]"
                aria-label="Country Code"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                id="phoneNumber"
                type="text"
                placeholder="9851..."
                className="border rounded-r-md p-3 h-[74px] flex-1"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-1 font-Roboto">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g xyz@gmail.com"
              className="border rounded-md p-3 w-full h-[74px]"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="text-lg mb-1 font-Roboto">
              Message*
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="border rounded-md p-3 w-full min-h-[150px]"
              required
            ></textarea>
          </div>
        </form>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start mt-8">
          <button
            type="submit"
            className="bg-[#F54F35] text-white px-3 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition w-full md:w-[225px] h-[62px] flex items-center justify-center"
          >
            Leave us a Message
            <img
              src={tailright}
              alt="Tail Right"
              className="ml-2 w-5 h-5 mt-1"
            />
          </button>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 w-full mt-16">
        <div className="max-w-full mx-auto">
          <img
            src={contactPage}
            alt="Contact Page"
            className="w-full h-auto"
          />
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
