import React,{useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { AiFillHome,AiFillProject } from 'react-icons/ai';
import {FaInfoCircle} from "react-icons/fa"
import { MdWork,MdMail } from 'react-icons/md';
import { Link } from 'react-scroll';


const Navbar = () => {
	const [nav,setNav] = useState(false);
    return ( 
        
<div className="max-w-[1640px] mx-auto items-center px-4 border-t border-b border-white text-white absolute left-1/4 mt-4 z-10">    
            {/* Left Side */}
            <div className='flex items-center'>
                <div onClick = {()=> setNav(!nav)} className='cursor-pointer absolute left-0 '>
                    <AiOutlineMenu size = {30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl px-2 mx-8'>Home <span className='font-bold'>Scape</span></h1>

                <div className='flex flex-row hidden md:inline-block'>
                    <ul className='flex space-x-4'>
                        <Link to="home"smooth={true} duration={500}><li className=' cursor-pointer text-xl py-4 flex items-center'>Home</li></Link>
                        <Link to="services"smooth={true} duration={500}><li className=' cursor-pointer text-xl py-4 flex items-center'>Services</li></Link>
                        <Link to="about"smooth={true} duration={500}><li className=' cursor-pointer text-xl py-4 flex items-center'>About</li></Link>
                        <Link to="contact"smooth={true} duration={500}><li className=' cursor-pointer text-xl py-4 flex items-center'>Contact</li></Link>
                        <Link to="projects"smooth={true} duration={500}><li className=' cursor-pointer text-xl py-4 flex items-center'>Projects</li></Link>
                        <a href="/faq"><li className=' cursor-pointer text-xl py-4 flex items-center'>FAQ</li></a>
                    </ul>
                </div>
            </div>
            {/*Menu */}
            
            
            
            {/* Mobile Menu */}
            {/* Overlay*/}
            {nav?<div className={nav?'bg-black/80 fixed w-full h-screen z-10 top-0 left-0':''}></div>:''}
                {/* Side Drawer */}
                <div className={nav?'fixed top-0 left-0  w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%]  w-[300px] h-screen bg-white z-10 duration-300'}>
                    <AiOutlineClose onClick={()=>setNav(!nav)} size = {30} className = 'absolute  right-4 top-4 cursor-pointer text-black'/>	
                    <h2 className='text-2xl p-4'>Home <span className='font-bold'>Scape</span></h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <Link onClick={()=>setNav(!nav)} to="home"smooth={true} duration={500}><li className='text-xl py-4 flex items-center cursor-pointer'><AiFillHome size = {25} className = 'mr-4'/> Home</li></Link>
                            <Link onClick={()=>setNav(!nav)} to="services"smooth={true} duration={500}><li className='text-xl py-4 flex items-center cursor-pointer'><MdWork size = {25} className = 'mr-4'/> Services</li></Link>
                            <Link onClick={()=>setNav(!nav)} to="about"smooth={true} duration={500}><li className='text-xl py-4 flex items-center cursor-pointer'><FaInfoCircle size = {25} className = 'mr-4'/> About</li></Link>
                            <Link onClick={()=>setNav(!nav)} to="contact"smooth={true} duration={500}><li className='text-xl py-4 flex items-center cursor-pointer'><MdMail size = {25} className = 'mr-4'/> Contact</li></Link>
                            <Link onClick={()=>setNav(!nav)} to="projects"smooth={true} duration={500}><li className='text-xl py-4 flex items-center cursor-pointer'><AiFillProject size = {25} className = 'mr-4'/> Projects</li></Link>
                            <a href="/faq"><li className='text-xl py-4 flex items-center cursor-pointer'><FaInfoCircle size = {25} className = 'mr-4'/> FAQ</li></a>

                        </ul>
                    </nav>
                </div>
                
        </div>
     );
}
 
export default Navbar;
