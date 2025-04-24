import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/7Q1ZDBW/hero1.jpg",
    gradient: "from-pink-500 to-red-500",
    tag: "Marathon Experience",
    title: "Run for a Cause,",
    highlight: "Achieve Your Goals",
    features: ["Professional Training", "Custom Plans", "Supportive Community"],
    description: "Join the ultimate marathon journey and push your limits."
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/LZCcR5D/martins-zemlickis-NPFu4-Gf-FZ7-E-unsplash.jpg",
    gradient: "from-pink-500 to-purple-500",
    tag: "Endurance Training",
    title: "Push Your Limits,",
    highlight: "Break Records",
    features: ["Personalized Coaching", "Live Tracking", "Exclusive Events"],
    description: "Train with experts and achieve peak performance."
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/6BnLj92/marathon-4631285-1280.jpg",
    gradient: "from-pink-500 to-blue-500",
    tag: "Ultimate Challenge",
    title: "One Step Closer",
    highlight: "To Victory",
    features: ["Smart Analytics", "Elite Community", "24/7 Support"],
    description: "Embrace the marathon spirit and achieve greatness."
  }
];

const Header = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-screen   overflow-hidden bg-gray-900"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-transparent" />
            <div className="relative h-full container mx-auto px-6 flex items-center">
              <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-6 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`h-px w-12 bg-gradient-to-r ${slide.gradient}`} />
                    <span className="text-white/80 uppercase tracking-widest text-sm font-medium">{slide.tag}</span>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                      {slide.title}{' '}
                      <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>{slide.highlight}</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-xl">{slide.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                        <p className="text-white font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <Link to="/Marathons" className={`px-8 py-4 bg-gradient-to-r ${slide.gradient} rounded-lg text-white font-medium hover:bg-opacity-80 transition-all`}>Join the Marathon</Link>
                    <Link to="https://youtu.be/fSELvEwBGZQ?si=F3AItTQGXmiRbf59" className="px-8 py-4 border border-white/10 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-all">
                      <FaPlay className="text-sm" /> Watch Highlights
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 pt-8">
                    {[FaInstagram, FaFacebook, FaTwitter].map((Icon, idx) => (
                      <Link key={idx} to="#" className={`p-3 rounded-full bg-gradient-to-r ${slide.gradient} bg-opacity-10 hover:bg-opacity-30 transition-all`}>
                        <Icon className="text-white" size={20} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;