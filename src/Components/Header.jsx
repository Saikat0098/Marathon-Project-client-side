import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <section className="bg-bannerImg bg-repeat bg-cover bg-left-bottom text-gray-900">
      <div className="w-full h-screen bg-blackOverlay">
        <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Stop Dreaming Start <span className="text-[#FF5E6C]">Running</span> With Runclub
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-[#FF5E6C] text-white hover:bg-[#FD267D]"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:text-[#FF5E6C] hover:border-[#FF5E6C]"
              >
                Malesuada
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="mt-16 bottom-4 w-full flex">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
