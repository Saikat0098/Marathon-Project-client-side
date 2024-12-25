import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddMarathon = () => {
  const [marathonDetails, setMarathonDetails] = useState({
     
  });

  

  const handleDateChange = (name, date) => {
    setMarathonDetails((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const addMarathonData = Object.fromEntries(formData.entries());


    axios.post('http://localhost:5500/addMarathon' , addMarathonData)
    .then(result => {
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
      
    
    
  };

  return (
    <div className="min-h-screen mt-11 p-8 bg-gradient-to-b from-[#FF5E6C] via-[#FF9E9F] to-white flex justify-center items-center">
      <div className="card w-full max-w-xl bg-white shadow-2xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#FF5E6C]">
          Add Marathon
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Marathon Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Marathon Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter marathon title"
              className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
             
            
              required
            />
          </div>

          {/* Date Pickers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Start Registration Date
                </span>
              </label>
              <DatePicker
                selected={marathonDetails.startRegistration}
                onChange={(date) => handleDateChange("startRegistration", date)}
                className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select start date" 
                name="startRegistrationDate"

                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  End Registration Date
                </span>
              </label>
              <DatePicker
                selected={marathonDetails.endRegistration}
                onChange={(date) => handleDateChange("endRegistration", date)}
                className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select end date"
                name="endRegistrationDate"
                required
              />
            </div>
          </div>

          {/* Marathon Start Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Marathon Start Date
              </span>
            </label>
            <DatePicker
              selected={marathonDetails.marathonStart}
              onChange={(date) => handleDateChange("marathonStart", date)}
              className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
              dateFormat="yyyy-MM-dd"
              placeholderText="Select marathon start date"
              name="marathonStartDate"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Location
              </span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
            
              required
            />
          </div>

          {/* Running Distance */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Running Distance
              </span>
            </label>
            <select
              name="distance"
              className="select select-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
              
              required
            >
              <option value=' Select distance'>
                Select distance
              </option>
              <option value="25k">25k</option>
              <option value="10k">10k</option>
              <option value="3k">3k</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Description
              </span>
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
              rows="3"
             
              required
            ></textarea>
          </div>

          {/* Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Marathon Image
              </span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full"
             
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="p-3 rounded-lg text-white bg-[#FF5E6C] hover:bg-[#E0545D] transition-colors w-full"
            >
              Add Marathon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;
