import React from "react";
import userIcon from "../assets/user.png";
import inboxDownloadIcon from "../assets/inbox-download.png";
import airplayIcon from "../assets/airplay.png";
import vector12 from "../assets/Vector 12.png";
import vector66 from "../assets/Vector 66.png";
import frame171 from "../assets/Frame 171.png";
import frame172 from "../assets/Frame 172.png";
import frame173 from "../assets/Frame 173.png";
import profilecircle from "../assets/profile-circle.png";
import vector200 from "../assets/vector200.png";
import vector201 from "../assets/vector201.png";
import vector202 from "../assets/vector202.png";

const StepsSection = () => {
  const steps = [
    {
      number: "1",
      icon: profilecircle,
      title: "Claim your preset profile",
      description: (
        <>
          Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.
        </>
      ),
      vector: vector200, // Vector for step 1
    },
    {
      number: "2",
      icon: profilecircle,
      title: "Add services",
      description: (
        <>
          Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.
        </>
      ),
      vector: vector201, // Vector for step 2
    },
    {
      number: "3",
      icon: profilecircle,
      title: "Built Website",
      description: (
        <>
          Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient client experience.
        </>
      ),
      vector: vector202, // Vector for step 3
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-[#191A15] mb-4">
          Onboard business in <span className="text-[#191A15]">3 simple steps</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 mt-8">
          Quick assisted onboarding with a 30-day free trial. No credit card needed.
        </p>

        <div className="relative flex flex-wrap justify-center items-center mt-24 gap-10 md:gap-44">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative w-[280px] md:w-[300px] mb-12 md:mb-0">
              {/* Step Number */}
              <div className="absolute -top-6 left-14 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#F6F6F7] text-[#000000] font-bold flex items-center justify-center shadow">
                {step.number}
              </div>

              {/* Icon Circle */}
              <div className="w-[160px] h-[160px] rounded-full bg-[#FFFFFF] mx-auto flex items-center justify-center shadow-md relative">
                <img
                  src={step.icon}
                  alt={`Step ${step.number}`}
                  className="w-[80px] h-[80px] object-contain "
                />
                {step.vector && (
                  <img
                    src={step.vector}
                    alt={`Vector for step ${step.number}`}
                    className="absolute top-14 left-18 w-12 h-12 object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mt-14">{step.title}</h3>

              {/* Description */}
              <p className="text-[#475467] text-sm mt-6 ">{step.description}</p>

              {/* Arrow Vectors */}
              {index < steps.length - 1 && (
                <img
                  src={index === 0 ? vector12 : vector66}
                  alt="arrow"
                  className="absolute left-72 top-16 transform rotate-[0deg] md:left-80"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
