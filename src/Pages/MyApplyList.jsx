import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import MyApplyListModal from "../Components/MyApplyListModal";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMarathonId, setSelectedMarathonId] = useState(null);
  const [marathons, setMarathons] = useState([]);
  const [search , setSearch ] = useState('')

  useEffect(() => {
    fetchMyMarathonPost();
  }, [user , search]);

  const fetchMyMarathonPost = async () => {
    const { data } = await axios.get(`http://localhost:5500/applyMarathon/${user?.email}?search=${search}`);
    setMarathons(data);
  };

  const handleOpenModal = (marathonId) => {
    setSelectedMarathonId(marathonId);
    setModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#FD267D] mb-8">
        My Marathons
      </h1>

      {/* Search Input Design */}
      <div className="mb-6">
        <input
          type="text"
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by marathon title..."
          className="input input-bordered w-full rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD267D] transition duration-200"
   
        />
      </div>

      {marathons.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't created any marathons yet.
        </p>
      ) : (
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-[#FD267D] to-[#FF5E6C] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Number</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {marathons.map((marathon) => (
                <tr key={marathon._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{marathon.marathonTitle}</td>
                  <td className="py-3 px-4">
                    {marathon.firstName + " " + marathon.lastName}
                  </td>
                  <td className="py-3 px-4">{marathon.contactNumber}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={() => handleOpenModal(marathon._id)}
                      className="text-blue-500 hover:text-blue-600 transition"
                      aria-label="Update"
                    >
                      <FaEdit size={20} />
                    </button>
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
