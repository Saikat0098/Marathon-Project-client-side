import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MarathonDetailsCard = ({ marathonDetailsCard,   }) => {
  const {
    image,
    title,
    location,
    startRegistrationDate,
    endRegistrationDate,
    marathonStartDate,
    _id,
    distance,
    description,
  } = marathonDetailsCard;

  return (
  <section className='h-screen'>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-xl mb-6 md:mb-0 transform transition duration-500 hover:rotate-3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-110"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#FD267D] mb-4 transition duration-500 transform hover:text-[#FF5E6C]">
              {title}
            </h1>
            <div className="flex items-center text-[#FF5E6C] mb-4">
              <FaMapMarkerAlt className="mr-2" />
              <span>{location}</span>
            </div>
            <p className="text-lg text-gray-700 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-1">
              <FaCalendarAlt className="mr-2 inline" />
              <strong>Registration Opens:</strong> {new Date(startRegistrationDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <FaCalendarAlt className="mr-2 inline" />
              <strong>Registration Closes:</strong> {new Date(endRegistrationDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              <FaCalendarAlt className="mr-2 inline" />
              <strong>Marathon Date:</strong> {new Date(marathonStartDate).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xl font-semibold text-[#FD267D] mb-4">Total Registrations:  
                
            </p>
           <Link to='/marathonApplyForm'>
           <button
              className="py-3 px-6 bg-[#FD267D] text-white font-bold rounded-full hover:bg-[#FF5E6C] transition duration-300 transform hover:scale-105"
            >
              Register Now
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default MarathonDetailsCard;
