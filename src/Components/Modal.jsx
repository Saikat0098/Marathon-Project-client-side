import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Marathon Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter marathon title"
                  required
                />
              </div>

              {/* Dates Section */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Registration Start
                  </label>
                  <input
                    type="date"
                    name="startRegistrationDate"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Registration End
                  </label>
                  <input
                    type="date"
                    name="endRegistrationDate"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    required
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Marathon Date
                  </label>
                  <input
                    type="date"
                    name="marathonStartDate"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Location and Distance */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
                    Distance
                  </label>
                  <select
                    name="distance"
                    id="distance"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    required
                  >
                    <option value="">Select distance</option>
                    <option value="25k">25k</option>
                    <option value="10k">10k</option>
                    <option value="3k">3k</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enter marathon description"
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  id="image"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enter image URL"
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-[#FF5E6C] px-4 py-2 text-sm font-medium text-white hover:bg-[#E0545D]"
              >
                Add Marathon
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;