import React from 'react';
import apple from "../assets/Apple logo.png";
import googleplay from "../assets/Play Store.png";

const ManageYourBusiness = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center text-center bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        Manage Your Business On the Go
      </h2>

      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mt-2 sm:mt-4 px-4">
        With free Business Mobile App, you can manage your entire service business
        from anywhere. Stay connected and stay in control, no matter where your day
        takes you.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-4">
        <button className="flex items-center justify-center px-4 sm:px-6 py-3 border border-black rounded-lg shadow-sm hover:shadow-md w-[180px] sm:w-[205px] h-[60px] sm:h-[74px] mx-auto sm:mx-0">
          <img
            src={apple}
            alt="App Store"
            className="w-8 sm:w-10 h-8 sm:h-10 mr-2"
          />
          <span className="font-medium text-lg sm:text-xl">App Store</span>
        </button>
        <button className="flex items-center justify-center px-4 sm:px-6 py-3 border border-black rounded-lg shadow-sm hover:shadow-md w-[180px] sm:w-[205px] h-[60px] sm:h-[74px] mx-auto sm:mx-0">
          <img
            src={googleplay}
            alt="Google Play"
            className="w-7 sm:w-9 h-7 sm:h-9 mr-2"
          />
          <span className="text-lg sm:text-xl font-medium">Google Play</span>
        </button>
      </div>
    </div>
  );
};

export default ManageYourBusiness;