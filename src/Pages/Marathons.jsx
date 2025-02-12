import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonCard from '../Components/MarathonCard';
import { FaSort } from 'react-icons/fa';

const Marathons = () => {
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [marathons, setMarathons] = useState([]);
  const data = useLoaderData();

  React.useEffect(() => {
    if (data) {
      setMarathons(data);
      setLoading(false);
    }
  }, [data]);

  const handleSort = () => {
    const sorted = [...marathons].sort((a, b) => {
      const dateA = new Date(a.startRegistrationDate);
      const dateB = new Date(b.startRegistrationDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setMarathons(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:mt-10">
      <div className="flex justify-between items-center mb-6">
      
        <button 
          onClick={handleSort}
          className="py-[7px] px-[16px] text-[1rem] rounded-full capitalize bg-[#FF5E6C] text-white hover:bg-[#FD267D] transition-all duration-300 flex items-center gap-2"
        >
          <FaSort />
          Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map(marathon => (
          <MarathonCard key={marathon._id} marathonCard={marathon} />
        ))}
      </div>
    </div>
  );
};

export default Marathons;