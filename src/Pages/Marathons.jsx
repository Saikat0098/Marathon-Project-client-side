import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonCard from '../Components/MarathonCard';

const Marathons = () => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
 
 
  React.useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
       
    );
  }

  return (
    <div className='h-96 text-5xl mt-14'>
      <div className="bg-gradient-to-r from-[#FF5E6C] to-pink-600 mt-10">
        <div className="w-full h-56 flex justify-center items-center">
          <h2 className="text-center font-extrabold text-5xl text-white">Marathon</h2>
        </div>
      </div>
      {/* Marathon Card Section */}
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {data.map(marathon => (
          <MarathonCard 
            key={marathon._id} 
            marathonCard={marathon}
          />
        ))}
      </div>
    </div>
  );
};

export default Marathons;