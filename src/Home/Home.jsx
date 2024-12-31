import EventsList from "../Components/EventsList";
import FitnessLanding from "../Components/FitnessLanding";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomePageCards from "../Components/HomePageCards";
import Navbar from "../Components/Navbar";
import RegistrationSection from "../Components/RegistrationSection ";

 

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
                <div>
                    <RegistrationSection></RegistrationSection>
                </div>
                <div>
                    <Footer></Footer>
                </div>
             </main>
        </div>
    );
};

export default Home;