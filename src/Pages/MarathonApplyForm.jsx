import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MarathonApplyForm = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();

  
  const [filteredMarathon] = data.filter((marathon) => marathon._id === id);
 
  const marathonApplyId = filteredMarathon?._id ; 
   (marathonApplyId);
  const marathonTitle = filteredMarathon?.title || "Unknown Marathon";
  const marathonStartDate = new Date(filteredMarathon?.marathonStartDate).toLocaleDateString() || "Unknown Date";

 

  const marathonApply =(e) =>{
    e.preventDefault()
    const form = e.target ; 
    const marathonTitle = form.marathonTitle.value ; 
    const marathonStartDate = form.marathonStartDate.value ; 
    const firstName = form.firstName.value ; 
    const lastName = form.lastName.value ; 
    const contactNumber = form.contactNumber.value ; 
    const applyEmail = user?.email ; 

    const marathonApplyDetails = {marathonApplyId , marathonTitle , marathonStartDate , firstName , lastName ,contactNumber , applyEmail }
     axios.post('https://assignment11-server-side-six.vercel.app/applyMarathon' , marathonApplyDetails)
    .then(result => {
         (result);
        if(result.data.insertedId){
          

          Swal.fire({
            title: 'success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool' ,
        

          }
         

        ) ;
         
        }
       
    })
  }
  return (
    <section>
      {/* Header Section */}
      <div className="h-96 text-5xl mt-14">
        <div className="bg-gradient-to-r from-[#FF5E6C] to-pink-600 mt-10">
          <div className="w-full h-56 flex justify-center items-center">
            <h2 className="text-center font-extrabold text-5xl text-white">Marathon Register Form</h2>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-[#FD267D] text-center mb-6">
          Register for {marathonTitle}
        </h2>
        <form onSubmit={marathonApply} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email || ""}
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
              value={marathonTitle}
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
              value={marathonStartDate}
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
              className="w-full p-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
              placeholder="Enter your contact number"
              required
            />
          </div>

          {/* Additional Info */}
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Info
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              className="w-full p-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-[#FD267D] focus:border-[#FD267D]"
              placeholder="Enter any additional info"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#FD267D] to-[#FF5E6C] text-white font-bold rounded-lg hover:from-[#FF5E6C] hover:to-[#FD267D] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FD267D]"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MarathonApplyForm;
