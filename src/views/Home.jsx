import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <About/>
            <Projects/>
            <Contact/>
            <Location/>
            <Footer/>

        </div>
     );
}
 
export default Home;