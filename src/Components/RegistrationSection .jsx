import React from 'react';

const RegistrationSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
          alt="Running track"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E6C]/90 to-[#FD267D]/90"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
              <p className="text-sm uppercase tracking-wider">Register Now</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold italic leading-tight">
              Run With Us to get a fit body.
              <br />
              We are waiting for your presence!
            </h2>
            
            <p className="text-white/80 leading-relaxed max-w-lg">
              Join our elite fitness community and transform your life with expert guidance,
              personalized training programs, and a supportive environment designed for your success.
            </p>

            <button className="bg-white text-[#FF5E6C] px-8 py-3 rounded-lg font-semibold 
                             hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300
                             shadow-lg hover:shadow-xl">
              DISCOVER MORE
            </button>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                    placeholder="Activity"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5E6C] focus:border-transparent"
                  rows="4"
                  placeholder="Notes (Additional)"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] text-white rounded-lg
                         font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                REGISTER NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;