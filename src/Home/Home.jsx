import EventsList from "../Components/EventsList";
import FitnessLanding from "../Components/FitnessLanding";
import Header from "../Components/Header";
import HomePageCards from "../Components/HomePageCards";
import Navbar from "../Components/Navbar";

 

const Home = () => {
    return (
        <div>
             <Header></Header>
             <main>
                <HomePageCards></HomePageCards>
                <div className="md:mt-9">
                    <EventsList></EventsList>
                </div>
                <div>
                    <FitnessLanding></FitnessLanding>
                </div>
             </main>
        </div>
    );
};

export default Home;