import React from "react";
import calendarIcon from "../assets/calendar-check-alt.png";
import starIcon from "../assets/star-magic.png";
import briefcaseIcon from "../assets/briefcase.png";
import billing from "../assets/Billing Payment.png";
import customBranded from "../assets/Custom branded website.png";
import framepk from "../assets/framepk.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: calendarIcon,
      title: "Scheduling",
      description:
        "Manage appointments, classes, and <br/> events, workshops with...",
      link: "View details",
    },
    {
      icon: null,
      title: "Client Management & CRM",
      description:
        "Keep track of customer data,<br/> preferences, and interactions to...",
      link: "View details",
    },
    {
      icon: starIcon,
      title: "AI Powered Insights",
      description:
        "Know exactly what is happening in<br/> business and get actionable...",
      link: "View details",
    },
    {
      icon: null,
      title: "Billing & Payments",
      description:
        "Streamline invoicing and payments<br/> with automated workflows, reducing ...",
      link: "View details",
    },
    {
      icon: briefcaseIcon,
      title: "Marketing & Engagement Tools",
      description:
        "Boost client retention and grow your <br/>business with integrated...",
      link: "View details",
    },
    {
      icon: null,
      title: "Multi-Location Management",
      description:
        "Manage multiple locations with ease,<br/> assigning roles and permissions...",
      link: "View details",
    },
    {
      title: "Custom Branded Website",
      description:
        "Qest’s Custom Branded Website Builder<br/> allows you to create a fully personalized...",
      link: "View details",
    },
  ];

  const cardClasses = [
    "sm:h-auto lg:h-[244px]",
    "sm:h-auto lg:h-[205px]",
    "sm:h-auto lg:h-[244px]",
    "sm:h-auto lg:h-[476px]",
    "sm:h-auto lg:h-[282px] lg:mt-[-52px]",
    "sm:h-auto lg:h-[205px] lg:mt-[-302px] lg:col-start-2 lg:row-start-5",
    "sm:h-auto lg:h-[476px]",
  ];

  return (
    <section className="py-6 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-6 text-[#191A15]">
          Why Rmax?
        </h2>
        <p className="text-[#475467] text-center sm:text-left mb-6 sm:mb-10 text-sm sm:text-base md:ml-44">
          Rmax is designed to simplify and transform the way service businesses
          operate. From onboarding, scheduling, and billing to client <br className="hidden sm:block" />
          management, payments, and growth, Rmax integrates everything in one
          easy-to-use platform connecting all the stakeholders.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left">
          {features.map((feature, index) => {
            const hideLogo =
              feature.title === "Client Management & CRM" ||
              feature.title === "Multi-Location Management" ||
              feature.title === "Custom Branded Website";

            const isBillingPayments = feature.title === "Billing & Payments";
            const isCustomBrandedWebsite = feature.title === "Custom Branded Website";

            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center bg-white p-4 sm:p-6 shadow-md hover:shadow-lg border border-[#E5E7EB] transition duration-300 rounded-lg ${cardClasses[index]}`}
              >
                <div className="flex flex-col items-center justify-center mb-4 font-urbanist">
                  {!hideLogo &&
                    (isBillingPayments ? (
                      <img
                        src={billing}
                        alt={feature.title}
                        className="w-full sm:w-[313px] h-auto sm:h-[271px] mb-3 "
                      />
                    ) : feature.icon ? (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-8 sm:w-10 h-8 sm:h-10 mb-2"
                      />
                    ) : (
                      <div className="w-8 sm:w-10 h-8 sm:h-10 mb-2 bg-gray-200 rounded-full"></div>
                    ))}
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-center sm:text-left">
                    {feature.title}
                  </h3>
                </div>

                <p
                  className="text-gray-600 text-sm sm:text-base flex-grow text-center sm:text-left"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
                {feature.link && (
                  <a
                    href="#"
                    className={`${
                      isBillingPayments ? "mt-1" : "mt-2"
                    } text-[#0000EE] font-medium hover:underline`}
                  >
                    {feature.link} &gt;
                  </a>
                )}

                {isCustomBrandedWebsite && (
                  <img
                    src={framepk}
                    alt="Custom Branded Website"
                    className="mt-4 w-full sm:w-[314px] h-auto sm:h-[324px]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
