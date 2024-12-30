import { key } from "localforage";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

 

const HomePageCards = () => {
    const [cards , setCards ] = useState([]) ; 
    useEffect(()=>{
        fetch('http://localhost:5500/homeMarathonSixCards')
        .then(res => res.json())
        .then(data =>  setCards(data))
    },[])
    return (
        <section className="mt-11">
            <div>
                <h2 className="text-2xl font-bold text-center">Running Marathon </h2>
            </div>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {
                    cards.map(card =>  
                    <div key={card._id} className="flex justify-center">
                        <div className="group relative bg-gradient-to-b from-gray-50 to-gray-100 w-full sm:w-80 md:w-96 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl py-5">
                          {/* Marathon Image */}
                          <figure className="relative h-60 overflow-hidden">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-[#FF5E6C] text-white text-sm font-medium px-3 py-1 rounded-full shadow-md flex items-center">
                              <FaMapMarkerAlt className="mr-1" />
                              {card.location}
                            </div>
                          </figure>
                  
                          {/* Marathon Details */}
                          <div className="p-5 space-y-4">
                            <h2 className="text-xl font-bold text-[#FF5E6C] group-hover:text-[#FD267D] transition duration-300 flex items-center">
                              {card.title}
                            </h2>
                            <div className="text-sm text-gray-700 space-y-1">
                              <p className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-[#FF5E6C]" />
                                <strong>Start:</strong>{" "}
                                {new Date(card.startRegistrationDate).toLocaleDateString()}
                              </p>
                              <p className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-[#FF5E6C]" />
                                <strong>End:</strong>{" "}
                                {new Date(card.endRegistrationDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                  
                          {/* <button onClick={logOut} className="py-[7px] text-[1rem] px-[16px] rounded-full ">
                            LogOut
                           </button> */}
                          {/* Action Button */}
                          <div className="text-right">
                            <Link to={`/marathonDetails/${card._id}`}>
                              <button
                                className="py-[7px] px-[16px] text-[1rem] rounded-full capitalize bg-[#FF5E6C] text-white hover:bg-[#FD267D] transition-all duration-300 sm:flex hidden   text-right"
                              >
                                See Details &rarr;
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>)
                }
            </div>
        </section>
    );
};

export default HomePageCards;