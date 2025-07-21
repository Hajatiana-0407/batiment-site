import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";



import logo from "/assets/Logo_BAT.jpg";


const Footer = () => {
  return (
    <footer className="bg-[#f9f9ff] py-10 px-6 sm:px-12 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
              <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
              <span>BAT</span>
            </div>
            <p className="text-gray-700">
              Stay in the loop and sign up for <br /> the Wardiere newsletter:
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 flex flex-row flex-wrap sm:grid sm:grid-cols-3 gap-8 text-sm text-gray-800">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-2">Documentation</h4>
              <ul className="space-y-1">
                <li>lorem</li>
                <li>lorem</li>
                <li>LOREM</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-2">Social</h4>
              <ul className="space-y-1">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center py-8">
          <div className="flex items-center gap-5 text-red-500 text-xl scale-[1.5] sm:scale-[2.2]">
            <FaFacebookF />
            <FaWhatsapp />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full h-px bg-gray-300"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 pb-2 text-sm">
          <div>© Wardiere Inc. All Rights Reserved 2023</div>
          <div className="text-gray-700 underline hover:text-black cursor-pointer">
            Terms & Conditions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
