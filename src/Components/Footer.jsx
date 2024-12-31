import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534650075489-3baad0076692"
          alt="Fitness background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/95"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] bg-clip-text text-transparent">
                EarthForge
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Join our community of fitness enthusiasts and transform your life with expert guidance
                and personalized training programs.
              </p>
              <div className="space-y-2">
                <a href="mailto:support@yourmail.ltd" className="flex items-center space-x-2 text-gray-400 hover:text-[#FF5E6C] transition-colors">
                  <Mail size={18} />
                  <span>support@yourmail.ltd</span>
                </a>
                <a href="tel:+6221.2002.2012" className="flex items-center space-x-2 text-gray-400 hover:text-[#FF5E6C] transition-colors">
                  <Phone size={18} />
                  <span>+6221.2002.2012</span>
                </a>
              </div>
            </div>

            {/* Our Club */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#FF5E6C]">Our Club</h3>
              <ul className="space-y-2">
                {['ABOUT US', 'LEADERSHIP', 'CAREERS', 'PROGRAMS', 'LEGAL NOTICE'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#FF5E6C]">Support</h3>
              <ul className="space-y-2">
                {['HELP CENTER', 'FAQ', 'TICKET SUPPORT', 'CONTACT US', 'NEWS & ARTICLE'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#FF5E6C]">Subscribe Newsletter</h3>
              <p className="text-gray-400 text-sm">
                Sign up our newsletter to get update information, news, insight or promotions.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5E6C]"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FitnessPro. All rights reserved
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, bg: '#FF5E6C' },
                { Icon: Twitter, bg: '#FF5E6C' },
                { Icon: Instagram, bg: '#FF5E6C' },
                { Icon: Linkedin, bg: '#FF5E6C' }
              ].map(({ Icon, bg }, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;