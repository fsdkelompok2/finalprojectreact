// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div>
          <h2 className="text-normal font-semibold mb-4">
            <a href="#">FIND A STORE</a>
          </h2>
          <ul>
            <li>
              <h2 className="text-normal font-semibold mb-4">
                <a href="#">BECOME A MEMBER</a>
              </h2>
            </li>
            <li>
              <h2 className="text-normal font-semibold mb-4">
                <a href="#">STUDENTS DISCOUNT</a>
              </h2>
            </li>
            <li>
              <h2 className="text-normal font-semibold mb-4">
                <a href="#">Set us Feedback</a>
              </h2>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">HELP</h2>
          <ul>
            <li>
              <a href="#">Get Help</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">COMPANY</h2>
          <ul>
            <li>
              <a href="#">About Nike</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-end space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook">
                <FaFacebook />
              </i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-youtube">
                <FaYoutube />
              </i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="container lg:m-20 mx-auto mt-4 flex justify-between">
        <div>
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4 relative">
          <a href="#" className="group relative">
            Guides
            <div className="hidden group-hover:block absolute bg-black text-white w-40 mt-2 p-4 space-y-2 right-0 top-0">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Nike Adapt</h3>
                <h3 className="text-lg font-semibold">Nike Air Max</h3>
                <h3 className="text-lg font-semibold">Nike Flyleather</h3>
                <h3 className="text-lg font-semibold">Nike Pegasus</h3>
                <h3 className="text-lg font-semibold">Nike Zoom Fly</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Nike Air</h3>
                <h3 className="text-lg font-semibold">Nike FlyEase</h3>
                <h3 className="text-lg font-semibold">Nike Free</h3>
                <h3 className="text-lg font-semibold">Nike React</h3>
                <h3 className="text-lg font-semibold">Nike ZoomX</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Nike Air Force 1</h3>
                <h3 className="text-lg font-semibold">Nike Flyknit</h3>
                <h3 className="text-lg font-semibold">Nike Joyride</h3>
                <h3 className="text-lg font-semibold">Nike Vaporfly</h3>
              </div>
            </div>
          </a>
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
