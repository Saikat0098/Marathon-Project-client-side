import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "../Components/Modal";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const MyMarathonsList = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMarathonId, setSelectedMarathonId] = useState(null);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyMarathonPost();
  }, [user]);

  const fetchMyMarathonPost = async () => {
    try {
      const { data } = await axios.get(
        `https://assignment11-server-side-six.vercel.app/addMarathon/${user?.email}`,
        { withCredentials: true }
      );
      setMarathons(data);
    } catch (error) {
      console.error("Error fetching marathons:", error);
    } finally {
      setLoading(false);
    }
  };

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = axios.delete(`https://assignment11-server-side-six.vercel.app/addMarathon/${id}`);
          if (response.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        } catch (error) {
          console.error("Error deleting marathon:", error);
        }
        setMarathons((prevMarathons) => prevMarathons.filter((marathon) => marathon._id !== id));
      }
    });
  };

  const handleOpenModal = (marathonId) => {
    setSelectedMarathonId(marathonId);
    setModalOpen(true);
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
       <span className="loading loading-bars loading-lg"></span>

      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#FD267D] mb-4 sm:mb-8">
        My Marathons
      </h1>

      {marathons.length === 0 ? (
        <p className="text-center text-gray-500">You haven't created any marathons yet.</p>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">
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
                {marathons.map((marathon) => (
                  <tr key={marathon._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4">{marathon.title}</td>
                    <td className="py-3 px-4">{marathon.location}</td>
                    <td className="py-3 px-4">
                      {new Date(marathon.marathonStartDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 flex space-x-2">
                      <button
                        onClick={() => handleOpenModal(marathon._id)}
                        className="text-blue-500 hover:text-blue-600 transition"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => handelDelete(marathon._id)}
                        className="text-red-500 hover:text-red-600 transition"
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {marathons.map((marathon) => (
              <div key={marathon._id} className="bg-white rounded-lg shadow-lg p-4">
                <div className="space-y-2 mb-3">
                  <div>
                    <span className="font-semibold">Title: </span>
                    {marathon.title}
                  </div>
                  <div>
                    <span className="font-semibold">Location: </span>
                    {marathon.location}
                  </div>
                  <div>
                    <span className="font-semibold">Start Date: </span>
                    {new Date(marathon.marathonStartDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => handleOpenModal(marathon._id)}
                    className="text-blue-500 hover:text-blue-600 transition flex items-center"
                  >
                    <FaEdit size={18} className="mr-1" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handelDelete(marathon._id)}
                    className="text-red-500 hover:text-red-600 transition flex items-center"
                  >
                    <FaTrashAlt size={18} className="mr-1" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Modal
        marathon_id={selectedMarathonId}
        setMarathons={setMarathons}
        marathons={marathons}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default MyMarathonsList;