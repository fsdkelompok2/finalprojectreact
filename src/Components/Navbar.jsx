// src/components/Navbar.jsx
import React from "react";
import { SiJordan } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex items-center justify-between">
      {/* Logo Jordan */}
      <div className="flex items-center">
        <SiJordan />
      </div>

      {/* Hamburger Menu untuk layar kecil */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Find a Store, Help, Join Us, Sign In */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <a href="#" className="hover:text-gray-700">
          Find a Store
        </a>
        <span>|</span>
        <div className="group relative">
          <a href="#" className="group-hover:text-gray-700">
            Help
          </a>
          <div className="hidden group-hover:block absolute right-0 bg-white p-4 space-y-2">
            <a href="#" className="font-normal">
              Order Status
            </a>
            <a href="#" className="font-normal">
              Dispatch and Delivery
            </a>
            <a href="#" className="font-normal">
              Returns
            </a>
            <a href="#" className="font-normal">
              Contact Us
            </a>
            <a href="#" className="font-normal">
              Privacy Policy
            </a>
            <a href="#" className="font-normal">
              Term of Sale
            </a>
            <a href="#" className="font-normal">
              Term of Use
            </a>
            <a href="#" className="font-normal">
              Send Us Feedback
            </a>
          </div>
        </div>
        <span>|</span>
        <a href="#" className="hover:text-gray-700">
          Join Us
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-700">
          Sign In
        </a>
      </div>

      {/* Hamburger Menu Content */}
      <div className="md:hidden absolute top-16 right-0 bg-gray-100 w-64 p-4 space-y-2 hidden">
        <a href="#" className="font-semibold">
          Find a Store
        </a>
        <a href="#" className="font-semibold">
          Help
        </a>
        <a href="#" className="font-semibold">
          Join Us
        </a>
        <a href="#" className="font-semibold">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
