import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <section className="bg-bannerImg bg-repeat bg-cover bg-left-bottom text-gray-900">
          <div className="w-full h-screen bg-blackOverlay">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Stop Dreaming Start <span className="text-[#FF5E6C]">Achieving</span> With Runclub
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200">
                  Discover your potential and break barriers
                  <br className="hidden md:inline lg:hidden" />
                  with every step you take.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Link
                    to="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-[#FF5E6C] text-white hover:bg-[#FD267D] shadow-lg"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:text-[#FF5E6C] hover:border-[#FF5E6C] shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>
                {/* Social Media Icons */}
                <div className="mt-16 bottom-4 w-full flex">
                  <div className="flex space-x-4">
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaInstagram size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaFacebook size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaTwitter size={20} />
                    </Link>
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
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-bannerImg2 bg-repeat bg-cover bg-left-bottom text-gray-900">
          <div className="w-full h-screen bg-blackOverlay">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Chase Your <span className="text-[#FF5E6C]">Goals</span> With Passion
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200">
                  Every mile is a milestone to greatness
                  <br className="hidden md:inline lg:hidden" />
                  Start your journey today.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Link
                    to="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-[#FF5E6C] text-white hover:bg-[#FD267D] shadow-lg"
                  >
                    Join Now
                  </Link>
                  <Link
                    to="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:text-[#FF5E6C] hover:border-[#FF5E6C] shadow-lg"
                  >
                    Discover More
                  </Link>
                </div>
                {/* Social Media Icons */}
                <div className="mt-16 bottom-4 w-full flex">
                  <div className="flex space-x-4">
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaInstagram size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaFacebook size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaTwitter size={20} />
                    </Link>
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
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-bannerImg3 bg-repeat bg-cover bg-left-bottom text-gray-900">
          <div className="w-full h-screen bg-blackOverlay">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Embrace the <span className="text-[#FF5E6C]">Challenge</span> Ahead
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200">
                  Push your limits and achieve the impossible
                  <br className="hidden md:inline lg:hidden" />
                  with every stride you take.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Link
                    to="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-[#FF5E6C] text-white hover:bg-[#FD267D] shadow-lg"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:text-[#FF5E6C] hover:border-[#FF5E6C] shadow-lg"
                  >
                    Explore More
                  </Link>
                </div>
                {/* Social Media Icons */}
                <div className="mt-16 bottom-4 w-full flex">
                  <div className="flex space-x-4">
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaInstagram size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaFacebook size={20} />
                    </Link>
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF5E6C] hover:text-white hover:bg-[#FF5E6C]"
                    >
                      <FaTwitter size={20} />
                    </Link>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
