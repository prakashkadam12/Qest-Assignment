import React from "react";
import SixthComponent from "../components/SixthComponent";

const PricingPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Flexible Plans,<br /> Transparent Pricing
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-2">Find the Perfect Fit for You</p>
        <p className="text-[#F54F35] font-semibold text-sm sm:text-md">
          30-day free trial with money-back guarantee.
        </p>
        <p className="mt-8 sm:mt-16 text-[#1F1F1F] font-bold text-xl sm:text-2xl">Compare Our Plans</p>
      </div>

      {/* Pricing Table */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="py-4"></th>
                <th className="py-4 text-center">
                  <div className="text-base sm:text-lg font-bold">Starter</div>
                  <div className="text-sm text-[#475467] mt-2">$17/month, billed<br /> monthly</div>
                </th>
                <th className="py-4 text-center">
                  <div className="text-base sm:text-lg font-bold">Premium</div>
                  <div className="text-sm text-gray-600 mt-2">$88/month, billed<br /> monthly</div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Features Section */}
              <tr>
                <td colSpan="3" className="py-4 font-bold text-gray-700 text-left">
                  Features
                </td>
              </tr>

              {/* Basic Management Section */}
              <tr>
                <td className="py-4 font-bold text-gray-700">Basic Management</td>
                <td></td>
                <td></td>
              </tr>

              {/* Features Data */}
              {[
                { feature: "Users", starter: "1", premium: "15" },
                { feature: "Branches", starter: "1", premium: "10" },
                { feature: "Courses", starter: "3", premium: "15" },
                { feature: "Max. Students Allowed", starter: "25", premium: "500" },
                { feature: "Communication", starter: "25", premium: "Yes" },
                { feature: "Bulk Updates", starter: "25", premium: "Yes" },
                { feature: "User Roles", starter: "25", premium: "Yes" },
              ].map(({ feature, starter, premium }, index) => (
                <tr key={index} className="text-xs sm:text-sm md:text-base">
                  <td className="py-4">{feature}</td>
                  <td className="py-4 text-center">
                    <div className="relative">
                      <span>{starter}</span>
                      <div className="absolute bottom-0 left-20 right-20 border-b border-gray-300"></div>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <div className="relative">
                      <span>{premium}</span>
                      <div className="absolute bottom-0 left-20 right-20 border-b border-gray-300"></div>
                    </div>
                  </td>
                </tr>
              ))}

              {/* Action Buttons */}
              <tr>
                <td></td>
                <td className="py-6 text-center">
                  <button className="bg-red-100 text-red-500 font-semibold px-6 py-2 rounded-md hover:bg-red-500 hover:text-white w-full sm:w-auto">
                    Get Started →
                  </button>
                  <div className="text-gray-500 text-xs sm:text-sm mt-2">No credit card required</div>
                </td>
                <td className="py-6 text-center">
                  <button className="bg-red-100 text-red-500 font-semibold px-6 py-2 rounded-md hover:bg-red-500 hover:text-white w-full sm:w-auto">
                    Get Started →
                  </button>
                  <div className="text-gray-500 text-xs sm:text-sm mt-2">No credit card required</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <SixthComponent />
    </div>
  );
};

export default PricingPage;