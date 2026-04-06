import groundImg from "../assets/ground.jpg";
import Button from "./Button";
import { Link } from 'react-scroll';

const Hero = () => {

    const phoneNumber = "915-433-7668";

    const handleCallClick = () =>{
        const phoneLink = `tel:${phoneNumber}`;
        window.location.href = phoneLink;
    };

    
    return ( 
        <div 
            id="home"
            className=" relative h-[450px] md:h-[900px] items-center bg-cover bg-center  p-4  overflow-hidden"
            style={{backgroundImage:`url(${groundImg})`}}
        >

            <div className="absolute inset-0 bg-black opacity-25"></div>
            
            
            <div >
                <img 
                    className="absolute top-1/3 left-[-20px] w-[15%]"
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-1.png"} alt="left to right leaf"/>
                <img 
                    className="absolute bottom-[-200px] left-0 w-[30%]"
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-2.png"} alt="Gloves"/>
                <img 
                    className="absolute bottom-[-450px] right-[250px] w-[30%]" 
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-4.png"} alt="Empty Pot"/>
                <img 
                    className="absolute bottom-[-50px] right-1/3 w-[25%]" 
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-3.png"} alt="bottom up leaf"/>                
                <img 
                    className="absolute top-0 right-[-30px] w-[30%] object-cover rounded-full"
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-6.png"} alt="cactus plant"/>
                <img 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] object-cover rounded-full" 
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-5.png"} alt="plant & pot" />
                <img 
                    className ="absolute bottom-[-80px] right-[150px] w-[30%]" 
                    src={"https://bracketweb.com/gardonwp/wp-content/uploads/2023/06/main-slider-three-shape-8.png"} alt="tool"/>
            </div>
            
            

            <div className="text-white absolute md:top-1/3 md:left-[300px] top-1/3 left-8">
                <h2 className="font-bold text-1xl md:text-3xl">Welcome to HomeScape</h2>
                <h1 className="font-bold text-5xl md:text-8xl">Your lawn is <br/>in good hands</h1>
                <Link to="contact" smooth={true} duration={500} className="inline-block cursor-pointer">
                    <Button text="Contact Us" />
                </Link>
                <button type="button" onClick={handleCallClick} className="ml-8">
                    <Button text="Call" />
                </button>
            </div>
        </div>
     );
}
 
export default Hero;
