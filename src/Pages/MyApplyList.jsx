import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import MyApplyListModal from "../Components/MyApplyListModal";
import Swal from "sweetalert2";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMarathonId, setSelectedMarathonId] = useState(null);
  const [marathons, setMarathons] = useState([]);
  const [search, setSearch] = useState('');
console.log(marathons);
  useEffect(() => {
    fetchMyMarathonPost();
  }, [user, search]);

  const fetchMyMarathonPost = async () => {
    const { data } = await axios.get(`https://assignment11-server-side-six.vercel.app/applyMarathon/${user?.email}?search=${search}` , {withCredentials:true});
    setMarathons(data);
  };

  const handleOpenModal = (marathonId) => {
    setSelectedMarathonId(marathonId);
    setModalOpen(true);
  };
  const handelDelete =   (id) => {
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
          const response =   axios.delete(`https://assignment11-server-side-six.vercel.app/applyMarathon/${id}` , {withCredentials: true});
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

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#FD267D] mb-6">
        My Marathons
      </h1>

      <div className="mb-6">
        <input
          type="text"
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by marathon title..."
          className="input input-bordered w-full p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD267D] transition duration-200"
        />
      </div>

      {marathons.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't created any marathons yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              {/* Desktop Table */}
              <table className="hidden md:table min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-[#FD267D] to-[#FF5E6C]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Title</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Number</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {marathons.map((marathon) => (
                    <tr key={marathon._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{marathon.marathonTitle}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {marathon.firstName + " " + marathon.lastName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{marathon.contactNumber}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleOpenModal(marathon._id)}
                            className="text-blue-500 hover:text-blue-600 transition"
                            aria-label="Update"
                          >
                            <FaEdit size={20} />
                          </button>
                          <button
                          onClick={()=>handelDelete(marathon._id)}
                            className="text-red-500 hover:text-red-600 transition"
                            aria-label="Delete"
                          >
                            <FaTrashAlt size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="md:hidden">
                {marathons.map((marathon) => (
                  <div key={marathon._id} className="bg-white p-4 border-b">
                    <div className="mb-2">
                      <span className="font-semibold text-gray-600">Title: </span>
                      <span>{marathon.marathonTitle}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-gray-600">Name: </span>
                      <span>{marathon.firstName + " " + marathon.lastName}</span>
                    </div>
                    <div className="mb-3">
                      <span className="font-semibold text-gray-600">Number: </span>
                      <span>{marathon.contactNumber}</span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleOpenModal(marathon._id)}
                        className="flex items-center text-blue-500 hover:text-blue-600"
                      >
                        <FaEdit size={18} className="mr-1" />
                        <span>Edit</span>
                      </button>
                      <button
                      onClick={()=> handelDelete(marathon._id)}
                        className="flex items-center text-red-500 hover:text-red-600"
                      >
                        <FaTrashAlt size={18} className="mr-1" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <MyApplyListModal
        marathon_id={selectedMarathonId}
        setMarathons={setMarathons}
        marathons={marathons}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default MyApplyList;