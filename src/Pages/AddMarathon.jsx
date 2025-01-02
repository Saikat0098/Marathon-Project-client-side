import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddMarathon = () => {
  const [marathonDetails, setMarathonDetails] = useState({});

  const { user } = useContext(AuthContext);

  const handleDateChange = (name, date) => {
    setMarathonDetails((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const title = formData.title.value;
    const startRegistrationDate = formData.startRegistrationDate.value;
    const endRegistrationDate = formData.endRegistrationDate.value;
    const marathonStartDate = formData.marathonStartDate.value;
    const location = formData.location.value;
    const distance = formData.distance.value;
    const description = formData.description.value;
    const image = formData.image.value;
    const post_email = user?.email;
    const total_count = 0;

    const AllMarathonData = {
      title,
      startRegistrationDate,
      endRegistrationDate,
      marathonStartDate,
      location,
      distance,
      description,
      image,
      total_count,
      post_email,
    };
    console.log(AllMarathonData);
    axios
      .post(
        "http://localhost:5500/addMarathon",
        AllMarathonData
      )
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          }
        );
      
        formData.reset()

        }
      });
  };

  return (
    <div className="min-h-screen mt-4 sm:mt-11 p-4 sm:p-8 bg-gradient-to-b from-[#FF5E6C] via-[#FF9E9F] to-white flex justify-center items-center">
    <div className="card w-full max-w-xl bg-white shadow-2xl rounded-lg p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-[#FF5E6C]">
        Add Marathon
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Marathon Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Marathon Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter marathon title"
            className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
            required
          />
        </div>

        {/* Date Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Start Registration</span>
            </label>
            <DatePicker
              selected={marathonDetails.startRegistration}
              onChange={(date) => handleDateChange("startRegistration", date)}
              className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
              dateFormat="yyyy-MM-dd"
              placeholderText="Select start date"
              name="startRegistrationDate"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">End Registration</span>
            </label>
            <DatePicker
              selected={marathonDetails.endRegistration}
              onChange={(date) => handleDateChange("endRegistration", date)}
              className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
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
            <span className="label-text font-semibold text-gray-700">Marathon Start Date</span>
          </label>
          <DatePicker
            selected={marathonDetails.marathonStart}
            onChange={(date) => handleDateChange("marathonStart", date)}
            className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select marathon start date"
            name="marathonStartDate"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
            required
          />
        </div>

        {/* Running Distance */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Running Distance</span>
          </label>
          <select
            name="distance"
            className="select select-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
            required
          >
            <option value=" Select distance">Select distance</option>
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Marathon Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="input input-bordered border-[#FF5E6C] focus:ring-[#FF5E6C] focus:border-[#FF5E6C] w-full p-2 sm:p-3"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button
            type="submit"
            className="p-2 sm:p-3 rounded-lg text-white bg-[#FF5E6C] hover:bg-[#E0545D] transition-colors w-full text-base sm:text-lg"
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
