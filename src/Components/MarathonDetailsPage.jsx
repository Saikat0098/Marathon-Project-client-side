import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MarathonDetailsCard from './MarathonDetailsCard';

const MarathonDetailsPage = () => {
    const data = useLoaderData();
    const {id} = useParams() ; 
     const detailsCard = data.filter(data =>data._id === id )
      
    return (
      <section>
          <div className='h-96 text-5xl mt-14'>
        <div className="bg-gradient-to-r from-[#FF5E6C] to-pink-600 ">
     <div className="w-full h-56 flex justify-center items-center">
       <h2 className="text-center font-extrabold text-5xl text-white">Marathon Details Page </h2>
     </div>
      </div>
        </div>
          {
            detailsCard.map(card => <MarathonDetailsCard key={card._id} marathonDetailsCard={card}></MarathonDetailsCard>)
          }
      </section>
    );
};

export default MarathonDetailsPage;