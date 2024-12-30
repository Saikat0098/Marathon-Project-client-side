import Header from "../Components/Header";
import HomePageCards from "../Components/HomePageCards";
import Navbar from "../Components/Navbar";

 

const Home = () => {
    return (
        <div>
             <Header></Header>
             <main>
                <HomePageCards></HomePageCards>
             </main>
        </div>
    );
};

export default Home;