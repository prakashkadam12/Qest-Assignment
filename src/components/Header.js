import React, { useState } from "react";
import { Link } from "react-router-dom";
import RMaxLogo from "../assets/RMax.png";
import customBrandedWebsite from "../assets/Custom branded website.png";
import userMobileApp from "../assets/User Mobile App.png";
import businessWebpage from "../assets/Bussiness Webpage.png";
import courses from "../assets/courses.png";
import classes from "../assets/Classes.png";
import appointments from "../assets/Appointemts.png";
import services from "../assets/service.png";
import retreats from "../assets/Retreats.png";
import payments from "../assets/Payments.png";
import DesignTools from "../assets/Design Tools.png";
import communication from "../assets/Communication.png";
import TrailSession from "../assets/trail sestion.png";
import StaffRoles from "../assets/Staff roles.png";
import Workshops from "../assets/work shopes.png";
import ReportingTools from "../assets/Reporting tools.png";
import MultiLocation from "../assets/Multi Locations.png";
import Events from "../assets/Events.png";
import svgMargin from "../assets/SVG_margin.png";
import seeAllFeature from "../assets/See All Feature.png";

const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center border border-[#E5E7EB] w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600 ml-5">
          <img src={RMaxLogo} alt="RMax Logo" className="h-6 w-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
          >
            {mobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Navigation Links and Action Buttons */}
        <div
          className={`lg:flex items-center space-x-6 ${
            mobileMenuOpen ? "flex flex-col absolute top-20 left-0 w-full bg-white shadow-lg z-10 p-4" : "hidden lg:flex"
          }`}
        >
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:underline font-Roboto">
              Home
            </Link>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowFeatures(true)}
              onMouseLeave={() => setShowFeatures(false)}
            >
              <button className="hover:underline flex items-center gap-1">
                Features <img src={svgMargin} alt="Dropdown Icon" className="h-5 w-5 font-Roboto" />
              </button>
              {showFeatures && (
                <div
                  className="absolute top-full left-0 ml-96 bg-white shadow-lg rounded mt-4 p-6 grid grid-cols-4 gap-8 w-[800px] border border-gray-200"
                  style={{ transform: "translateX(-100%)" }}
                >
                  {/* Discover Column */}
                  <div className="border-r border-gray-200 pr-4">
                    <h3 className="text-lg font-bold mb-4 font-Roboto">Discover</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <img src={customBrandedWebsite} alt="Custom Branded Website" className="h-5 w-5 font-Roboto" />
                        Custom Branded Website
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={userMobileApp} alt="User Mobile App" className="h-5 w-5 font-Roboto" />
                        User Mobile App
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={businessWebpage} alt="Business Webpage" className="h-5 w-5 font-Roboto" />
                        Business Webpage
                      </li>
                    </ul>
                  </div>

                  {/* Manage Column 1 */}
                  <div className=" pr-4">
                    <h3 className="text-lg font-bold mb-4 font-Roboto">Manage</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <img src={courses} alt="Courses" className="h-5 w-5 font-Roboto" />
                        Courses
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={classes} alt="Classes" className="h-5 w-5 font-Roboto" />
                        Classes
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={appointments} alt="Appointments" className="h-5 w-5 font-Roboto" />
                        Appointments
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={services} alt="Services" className="h-5 w-5 font-Roboto" />
                        Services
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={retreats} alt="Retreats" className="h-5 w-5 font-Roboto" />
                        Retreats
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={payments} alt="Payments" className="h-5 w-5 font-Roboto" />
                        Payments
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={DesignTools} alt="Design Tools" className="h-5 w-5 font-Roboto" />
                        Design Tools
                      </li>
                    </ul>
                  </div>

                  {/* Manage Column 2 */}
                  <div className="border-r border-gray-200 pr-4">
                    <h3 className="text-lg font-bold mb-4 font-Roboto">Manage</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <img src={communication} alt="Communication" className="h-5 w-5 font-Roboto" />
                        Communication
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={TrailSession} alt="Trial Session" className="h-5 w-5 font-Roboto" />
                        Trial Session
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={StaffRoles} alt="Staff Roles" className="h-5 w-5 font-Roboto" />
                        Staff Roles
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={Workshops} alt="Workshops" className="h-5 w-5 font-Roboto" />
                        Workshops
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={ReportingTools} alt="Reporting Tools" className="h-5 w-5 font-Roboto" />
                        Reporting Tools
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={MultiLocation} alt="Multi-Location" className="h-5 w-5 font-Roboto" />
                        Multi-Location
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={Events} alt="Events" className="h-5 w-5 font-Roboto" />
                        Events
                      </li>
                    </ul>
                  </div>

                  {/* Grow Column */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 font-Roboto">Grow</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <img src={DesignTools} alt="AI Marketing Tools font-Roboto" className="h-5 w-5" />
                        AI Marketing Tools
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={communication} alt="Social Media Integration font-Roboto" className="h-5 w-5" />
                        Social Media Integration
                      </li>
                      <li className="flex items-center gap-3">
                        <img src={courses} alt="CRM" className="h-5 w-5 font-Roboto" />
                        CRM
                      </li>
                    </ul>
                  </div>

                  {/* Footer Link */}
                  <div className="col-span-4 text-center mt-6">
                    <button
                      className="bg-[#FEE7E6] text-[#E44343] hover:bg-[#FDD7D6] text-sm font-medium py-2 px-4 rounded-md border font-Roboto border-[#FCD6D6] w-[200px]"
                    >
                      See all features → 
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="hover:underline font-semibold font-Roboto">
              Pricing
            </Link>

            <div className="relative group">
              <button className="hover:underline flex items-center gap-1">
                Solutions <img src={svgMargin} alt="Dropdown Icon" className="h-5 w-5 font-Roboto" />
              </button>
              {/* Dropdown Menu for Solutions */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                <Link
                  to="/solution1"
                  className="block px-4 py-2 hover:bg-gray-100 font-Roboto"
                >
                  Solution 1
                </Link>
                <Link
                  to="/solution2"
                  className="block px-4 py-2 hover:bg-gray-100 font-Roboto"
                >
                  Solution 2
                </Link>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 font-Roboto">
              Login
            </button>
            <button className="px-1 py-1 bg-[#F54F35] text-white rounded hover:bg-red-700 w-[101px] h-[38px] font-Roboto">
              Try For Free
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown for Features */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white shadow-lg p-6 mt-4 grid grid-cols-1 gap-8 w-full"
        >
          <div className="space-y-4">
            <button className="w-full text-left font-Roboto">Home</button>
            <button className="w-full text-left font-Roboto">Pricing</button>
            <button className="w-full text-left font-Roboto" onClick={() => setShowMobileFeatures(!showMobileFeatures)}>
              Features
            </button>

            {showMobileFeatures && (
              <div className="space-y-4 font-Roboto">
                <div>
                  <h3 className="font-bold font-Roboto">Discover</h3>
                  <ul>
                    <li>Custom Branded Website</li>
                    <li>User Mobile App</li>
                    <li>Business Webpage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold font-Roboto">Manage</h3>
                  <ul>
                    <li>Courses</li>
                    <li>Classes</li>
                    <li>Appointments</li>
                    <li>Services</li>
                    <li>Retreats</li>
                    <li>Payments</li>
                    <li>Design Tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold font-Roboto">Grow</h3>
                  <ul>
                    <li>AI Marketing Tools</li>
                    <li>Social Media Integration</li>
                    <li>CRM</li>
                  </ul>
                </div>
              </div>
            )}
            <button className="w-full text-left font-Roboto">Login</button>
            <button className="w-full text-left font-Roboto">Try For Free</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
