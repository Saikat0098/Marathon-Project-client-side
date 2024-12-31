import React from 'react';
import { ChevronRight, Menu } from 'lucide-react';

const FitnessLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      
     

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section with Images */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5"
                  alt="Runner stretching"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white leading-tight drop-shadow-lg">
                    Make The<br className="hidden sm:block" />
                    Difference
                  </h2>
                </div>
              </div>
              
              {/* Inset Image - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 right-[-10%] w-2/5 transform hover:scale-105 transition-transform duration-300">
                <div className="rounded-xl overflow-hidden shadow-2xl ring-4 ring-[#FF5E6C]/20">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                    alt="Runner at starting block"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-6 lg:space-y-8 lg:pl-8">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-[#FD267D] font-semibold tracking-wider text-sm">
                  WHY YOU SHOULD JOIN US
                </h3>
                <h2 className="text-3xl sm:text-4xl font-black italic text-gray-900 bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] bg-clip-text text-transparent">
                  Run unintentionally,
                  <br className="hidden sm:block" />
                  and feel the difference
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Transform your running experience with our innovative approach. 
                  Join a community that understands your passion for excellence 
                  and supports your journey to peak performance.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Be Healthy",
                    description: "Expert guidance for optimal health and performance enhancement."
                  },
                  {
                    title: "Be Strong",
                    description: "Develop strength and endurance through specialized training."
                  },
                  {
                    title: "Be Faster",
                    description: "Advanced techniques to improve your speed and agility."
                  },
                  {
                    title: "Be One of Us",
                    description: "Join an elite community of dedicated runners."
                  }
                ].map((feature, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] flex items-center justify-center 
                                    transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 italic group-hover:text-[#FF5E6C] transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 ml-11 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="w-full sm:w-auto bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] text-white px-8 py-3 rounded-full font-semibold 
                                 hover:shadow-[#FF5E6C]/50 transform hover:-translate-y-1 transition-all duration-300
                                 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <span className="relative z-10">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FD267D] to-[#FF5E6C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

             
              
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FitnessLanding;