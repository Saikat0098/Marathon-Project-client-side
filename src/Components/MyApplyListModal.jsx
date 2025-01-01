import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyApplyListModal = ({ isOpen, onClose , marathon_id , setMarathons}) => {
  //  (marathon_id);
  const {user} = useContext(AuthContext)
  const [update , setUpdate ] = useState([]) ; 
   useEffect(() => {
    fetch('https://assignment11-server-side-six.vercel.app/applyMarathon')
    .then(res => res.json())
    .then(data => setUpdate(data))
  } , [])

 
 
 
  const sameIdMarathon = update.filter((marathon) => marathon._id === marathon_id);
  //  ("modal" , sameIdMarathon);
  

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());

    try {
      const response = await axios.put(`https://assignment11-server-side-six.vercel.app/UpdateMarathon/${marathon_id}`, updateData);
      if (response.data) {
        
        Swal.fire({
          title: 'success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool' ,
      

        })
        // Update the parent state
        setMarathons((prevMarathons) =>
          prevMarathons.map((marathon) =>
            marathon._id === marathon_id ? { ...marathon, ...updateData } : marathon
          )
        );
        onClose();
      }
    } catch (error) {
      console.error("Failed to update marathon:", error);
    }
  };

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Add Marathon</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 rounded-full"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>
      {
        sameIdMarathon.map(sameMarathon =>    
          <form onSubmit={handleSubmit} key={sameMarathon._id}   className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={sameMarathon?.applyEmail || ""}
              readOnly
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
            />
          </div>

          {/* Marathon Title */}
          <div>
            <label htmlFor="marathonTitle" className="block text-sm font-medium text-gray-700">
              Marathon Title
            </label>
            <input
              type="text"
              id="marathonTitle"
              name="marathonTitle"
              value={sameMarathon.marathonTitle}
              readOnly
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
            />
          </div>

          {/* Marathon Start Date */}
          <div>
            <label htmlFor="marathonStartDate" className="block text-sm font-medium text-gray-700">
              Marathon Start Date
            </label>
            <input
              type="text"
              id="marathonStartDate"
              name="marathonStartDate"
              value={sameMarathon.marathonStartDate}
              readOnly
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
            />
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              defaultValue={sameMarathon.firstName}
              className="w-full p-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={sameMarathon.lastName}
              className="w-full p-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              defaultValue={sameMarathon.contactNumber}
              className="w-full p-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
              placeholder="Enter your contact number"
              required
            />
          </div>
 
     

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#FD267D] to-[#FF5E6C] text-white font-bold rounded-lg hover:from-[#FF5E6C] hover:to-[#FD267D] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FD267D]"
            >
              Submit Registration update
            </button>
          </div>
        </form>
        )
      }
      
        </div>
      </div>
    </div>
  );
};

export default MyApplyListModal;