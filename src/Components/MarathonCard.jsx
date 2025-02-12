import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const MarathonCard = ({ marathonCard }) => {
  const {
    image,
    title,
    location,
    startRegistrationDate,
    endRegistrationDate,
    _id,
  } = marathonCard;

  return (
    <div className="flex justify-center">
      <div className="group relative bg-gradient-to-b from-gray-50 to-gray-100 w-full sm:w-80 md:w-96 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl py-5">
        {/* Marathon Image */}
        <figure className="relative h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-[#FF5E6C] text-white text-sm font-medium px-3 py-1 rounded-full shadow-md flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            {location}
          </div>
        </figure>

        {/* Marathon Details */}
        <div className="p-5 space-y-4">
          <h2 className="text-xl font-bold text-[#FF5E6C] group-hover:text-[#FD267D] transition duration-300 flex items-center">
            {title}
          </h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-[#FF5E6C]" />
              <strong>Start:</strong>{" "}
              {new Date(startRegistrationDate).toLocaleDateString()}
            </p>
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-[#FF5E6C]" />
              <strong>End:</strong>{" "}
              {new Date(endRegistrationDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <Link to={`/marathonDetails/${_id}`}>
          <button className="py-[7px] px-[16px] text-[1rem] rounded-full capitalize bg-[#FF5E6C] text-white hover:bg-[#FD267D] transition-all duration-300 text-right">
            See Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MarathonCard;