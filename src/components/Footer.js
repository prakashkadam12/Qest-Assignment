import React from "react";
import instagram from "../assets/logo-instagram.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";
import linkedin from "../assets/Linkdein.png";
import apple from "../assets/Apple logo white.png";
import playstore from "../assets/Play Store.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-10">
      {/* Footer Main Content */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6 mt-20 mb-28">
        {/* Company Section */}
        <div className="space-y-6">
          <h3 className="text-gray-400 font-medium">Company</h3>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-gray-300 transition-colors">About us</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact us</a></li>
            <li><a href="#careers" className="hover:text-gray-300 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Business Size Section */}
        <div className="space-y-6">
          <h3 className="text-gray-400 font-medium">Business Size</h3>
          <ul className="space-y-3">
            <li><a href="#entrepreneurs" className="hover:text-gray-300 transition-colors">Entrepreneurs</a></li>
            <li><a href="#smbs" className="hover:text-gray-300 transition-colors">SMBs</a></li>
            <li><a href="#growth" className="hover:text-gray-300 transition-colors">Growth Business</a></li>
            <li><a href="#household" className="hover:text-gray-300 transition-colors">Household Services</a></li>
            <li><a href="#enterprise" className="hover:text-gray-300 transition-colors">Enterprise</a></li>
          </ul>
        </div>

        {/* Business Type Section */}
        <div className="space-y-6">
          <h3 className="text-gray-400 font-medium">Business Type</h3>
          <ul className="space-y-3">
            <li><a href="#health" className="hover:text-gray-300 transition-colors">Health & Wellness</a></li>
            <li><a href="#sports" className="hover:text-gray-300 transition-colors">Sports</a></li>
            <li><a href="#learning" className="hover:text-gray-300 transition-colors">Learning Activities</a></li>
            <li><a href="#household" className="hover:text-gray-300 transition-colors">Household Services</a></li>
            <li><a href="#miscellaneous" className="hover:text-gray-300 transition-colors">Miscellaneous</a></li>
          </ul>
        </div>

        {/* Download Section */}
        <div className="space-y-6">
          <h3 className="text-gray-400 font-medium">Download</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <img src={apple} alt="Apple" className="w-5 h-5" />
              <span>Business App</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <img src={playstore} alt="Google Play" className="w-5 h-5" />
              <span>Business App</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <img src={apple} alt="Apple" className="w-5 h-5" />
              <span>User App</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <img src={playstore} alt="Google Play" className="w-5 h-5" />
              <span>User App</span>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-6">
          <h3 className="text-gray-400 font-medium">Legal</h3>
          <ul className="space-y-3">
            <li><a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
            <li><a href="#return" className="hover:text-gray-300 transition-colors">Return Policy</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="text-gray-400 font-medium">Contact Us</h3>
          <div className="space-y-3">
            <p>
              <a href="mailto:support@rmax.com" className="hover:text-gray-300 transition-colors">support@rmax.com</a>
            </p>
            <p>+91-8459671235</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-20 pt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#FFFFFF] text-sm text-center sm:text-left">
              &copy; 2024 Copyright, All Rights Reserved @RMax
            </p>
            <div className="flex items-center space-x-6">
              <a href="#facebook" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="w-[18px] h-[18px]" />
              </a>
              <a href="#twitter" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="w-[18px] h-[18px]" />
              </a>
              <a href="#instagram" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="w-[18px] h-[18px]" />
              </a>
              <a href="#linkedin" className="hover:opacity-80 transition-opacity">
                <img src={linkedin} alt="LinkedIn" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;