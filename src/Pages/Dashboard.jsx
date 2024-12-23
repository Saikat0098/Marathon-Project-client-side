import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaPlus, FaListAlt, FaClipboardCheck } from "react-icons/fa";
import "react-tabs/style/react-tabs.css"; // Ensure this is included.

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab

  const handleTabClick = (index) => {
    setActiveTab(index); // Set active tab on click
  };

  return (
    <section>
      {/* Banner Section */}
      <div className="bg-bannerImg2 bg-cover bg-repeat bg-top mt-10">
        <div className="w-full h-56 bg-blackOverlay flex justify-center items-center">
          <h2 className="text-center font-extrabold text-5xl text-white">
            Dashboard
          </h2>
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="flex w-full h-screen">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick} className="flex w-full">
          {/* Sidebar Tabs */}
          <div className="w-64 bg-gray-100 h-full shadow-xl rounded-l-2xl p-4">
            <TabList className="flex flex-col space-y-4">
              <Tab
                className={`flex items-center gap-4 p-3 font-semibold text-gray-700 rounded-lg cursor-pointer transition-transform duration-200 transform ${
                  activeTab === 0
                    ? "bg-green-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaPlus className="text-lg" />
                Add Marathon
              </Tab>
              <Tab
                className={`flex items-center gap-4 p-3 font-semibold text-gray-700 rounded-lg cursor-pointer transition-transform duration-200 transform ${
                  activeTab === 1
                    ? "bg-green-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaListAlt className="text-lg" />
                My Marathon List
              </Tab>
              <Tab
                className={`flex items-center gap-4 p-3 font-semibold text-gray-700 rounded-lg cursor-pointer transition-transform duration-200 transform ${
                  activeTab === 2
                    ? "bg-green-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaClipboardCheck className="text-lg" />
                My Apply List
              </Tab>
            </TabList>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white shadow-xl rounded-r-2xl p-6">
            <TabPanel>
              <h2 className="text-2xl font-bold text-[#FF5E6C]">
                Add Marathon
              </h2>
              <p className="mt-4 text-gray-600">
                This is the content area for adding marathons. Customize it as
                needed.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl font-bold text-[#FF5E6C]">
                My Marathon List
              </h2>
              <p className="mt-4 text-gray-600">
                This is the content area for viewing your marathon list. Add
                details here.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl font-bold text-[#FF5E6C]">
                My Apply List
              </h2>
              <p className="mt-4 text-gray-600">
                This is the content area for your applied marathons. Customize
                as needed.
              </p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Dashboard;
