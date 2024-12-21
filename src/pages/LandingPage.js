import React from "react";
import HeroSection from "../components/HeroSection";
import StepsSection from "../components/StepsSection";
import SixthComponent from "../components/SixthComponent";
import FeaturesSection from "../components/FeaturesSection";
import FourthComponent from "../components/FourthComponent";
import FifthComponent from "../components/FifthComponent";
import ManageYourBusiness from "../components/manageYourBusiness";
import sparkle from "../assets/Fab Button.png";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <FourthComponent />
      <FifthComponent />
      <ManageYourBusiness />
      <SixthComponent />
      {/* Right-Corner Icon */}
      <img
        src={sparkle}
        alt="Sparkle Icon"
        className="fixed bottom-4 right-4 w-16 mt-4 h-16 md:w-20 md:h-20"
      />
    </div>
  );
};

export default LandingPage;
