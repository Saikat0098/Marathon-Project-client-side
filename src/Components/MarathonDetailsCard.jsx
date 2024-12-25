import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const MarathonDetailsCard = ({ marathonDetailsCard, totalRegistrations, updateRegistrationCount }) => {
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span>{location}</span>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-1">
              <FaCalendarAlt className="mr-2 inline text-blue-500" />
              <strong>Registration Opens:</strong> {new Date(startRegistrationDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <FaCalendarAlt className="mr-2 inline text-blue-500" />
              <strong>Registration Closes:</strong> {new Date(endRegistrationDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              <FaCalendarAlt className="mr-2 inline text-blue-500" />
              <strong>Marathon Date:</strong> {new Date(marathonStartDate).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-800 font-semibold">Total Registrations: {totalRegistrations}</p>
         
              <button
                
                className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
              >
                Register Now
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetailsCard;
