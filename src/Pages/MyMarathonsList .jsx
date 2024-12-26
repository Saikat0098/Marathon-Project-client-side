import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "../Components/Modal";

const MyMarathonsList = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  // Mock data for marathons created by the user
  const userMarathons = [
    {
      _id: "1",
      title: "Spring Marathon",
      location: "Central Park, NY",
      marathonStartDate: "2024-03-15",
    },
    {
      _id: "2",
      title: "Autumn Challenge",
      location: "Golden Gate Park, SF",
      marathonStartDate: "2024-09-10",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#FD267D] mb-8">My Marathons</h1>

      {/* Responsive Table for Desktop */}
      {userMarathons.length === 0 ? (
        <p className="text-center text-gray-500">You haven't created any marathons yet.</p>
      ) : (
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-[#FD267D] to-[#FF5E6C] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Location</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userMarathons.map((marathon) => (
                <tr key={marathon._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{marathon.title}</td>
                  <td className="py-3 px-4">{marathon.location}</td>
                  <td className="py-3 px-4">
                    {new Date(marathon.marathonStartDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                    onClick={() => setModalOpen(true)}
                      className="text-blue-500 hover:text-blue-600 transition"
                      aria-label="Update"
                    >
                      <FaEdit size={20} />
                    </button>
                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                    <button
                      className="text-red-500 hover:text-red-600 transition"
                      aria-label="Delete"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Responsive Card View for Mobile */}
      <div className="grid grid-cols-1 gap-6 sm:hidden">
        {userMarathons.map((marathon) => (
          <div
            key={marathon._id}
            className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg"
          >
            <h2 className="text-lg font-bold text-gray-800">{marathon.title}</h2>
            <p className="text-sm text-gray-500">
              <strong>Location:</strong> {marathon.location}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Start Date:</strong>{" "}
              {new Date(marathon.marathonStartDate).toLocaleDateString()}
            </p>
            <div className="mt-4 flex space-x-4">
              <button
               onClick={() => setModalOpen(true)}
                className="text-blue-500 hover:text-blue-600 transition"
                aria-label="Update"
              >
                <FaEdit size={20} />
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

              <button
                className="text-red-500 hover:text-red-600 transition"
                aria-label="Delete"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMarathonsList;
