import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomePageCard from "./HomePageCard";

const HomePageCards = () => {
    const [cards, setCards] = useState([]);
          const [campaignCards , setCampaignCards] = useState([]) ;
    const currentDate = new Date();
    const runningMarathon = cards 
    .filter((running) => new Date(running.endRegistrationDate) > currentDate) ; 
    console.log(runningMarathon);


    useEffect(() => {
        fetch('https://assignment11-server-side-six.vercel.app/homeMarathonSixCards')
            .then(res => res.json())
            .then(data => setCards(data) )
    }, []);

    return (
        <section className="mt-11">
            <div className="text-center space-x-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] bg-clip-text text-transparent">
                    Running Marathon
                </span>
            </div>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {runningMarathon.map(card => <HomePageCard key={card._id} card={card}></HomePageCard>)}
            </div>
        </section>
    );
};

export default HomePageCards;