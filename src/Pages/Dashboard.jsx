import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaPlus, FaListAlt, FaClipboardCheck, FaBars, FaTimes } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import AddMarathon from "./AddMarathon";
import MyMarathonsList from "./MyMarathonsList ";

const Dashboard = () => {
  // State to manage active tab and sidebar visibility
  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Handle tab clicks
  const handleTabClick = (index) => {
    setActiveTab(index);
    // Auto-close sidebar on mobile devices when a tab is clicked
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <section className="relative">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-[#FF5E6C] to-pink-600 mt-10">
        <div className="w-full h-56 flex justify-center items-center">
          <h2 className="text-center font-extrabold text-5xl text-white">Dashboard</h2>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex w-full min-h-screen">
        {/* Mobile Sidebar Toggle Button */}
        <button
          className="md:hidden p-4 bg-pink-500 text-white fixed top-16 left-4 rounded-full shadow-lg z-20 flex items-center gap-2"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <>
              <FaTimes size={24} />
              <span className="text-sm font-medium">Close Menu</span>
            </>
          ) : (
            <>
              <FaBars size={24} />
              <span className="text-sm font-medium">Open Menu</span>
            </>
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl border-r z-10 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <TabList className="flex flex-col space-y-6 px-4 pt-[14rem] md:pt-28">
            {/* Sidebar Tabs */}
            {[
              { category: "Add Marathon", icon: <FaPlus /> },
              { category: "My Marathon List", icon: <FaListAlt /> },
              { category: "My Apply List", icon: <FaClipboardCheck /> },
            ].map((tab, index) => (
              <Tab
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex items-center gap-3 p-4 text-lg font-medium rounded-lg cursor-pointer transition-all ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#FF5E6C] to-pink-500 text-white"
                    : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {React.cloneElement(tab.icon, { size: 20 })}
                {tab.category}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Main Content */}
        <div className="ml-0 md:ml-64 flex-1 bg-gray-50 p-6 md:p-10 min-h-screen">
          <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
            <TabPanel>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#FF5E6C] mb-4">Add Marathon</h2>
                <AddMarathon />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#FF5E6C] mb-4">My Marathon List</h2>
                {/* <p className="text-gray-700">This is the content area for viewing your marathon list.</p> */}
                <MyMarathonsList></MyMarathonsList>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#FF5E6C] mb-4">My Apply List</h2>
                <p className="text-gray-700">This is the content area for applied marathons.</p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
