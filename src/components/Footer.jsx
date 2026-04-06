import { FaMapMarker,FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
    return ( 
        <div className="h-full bg-[#3D4144] text-white">
            <ul className="grid grid-cols-2 sm:grid-cols-4">
                <li className='m-4 text-left flex items-center  font-semibold text-xl'><h2>Home <span className="font-bold">Scape</span></h2></li>
                <li className='m-4 text-left flex items-center  text-xs lg:text-lg'><FaMapMarker size = {25} className = 'mr-4'/><p>5616 Hemmingway Dr, El Paso, TX 79924</p></li>
                <li className='m-4 text-left flex items-center  text-xs lg:text-lg'><FaPhone size = {25} className = 'mr-4'/>(915) 433-7668</li>
                <li className='m-4 text-left flex items-center  text-xs lg:text-lg'><MdMail size = {25} className = 'mr-4'/> HomeScape915@gmail.com</li>
            </ul>
            <div className="bg-[#42464D]">
                <p className="text-center">Copyright All Rights Reserved @2016 Long Term Capital LLC</p>
            </div>
        </div>
     );
}
 
export default Footer;
