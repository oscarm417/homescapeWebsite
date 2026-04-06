const Button = (prop) => {
    return ( 
        
        <button className="bg-[#2AB838] text-white px-8 py-2 rounded-md hover:bg-white hover:text-black focus:ring focus:border-green-800  text-sm md:text-4xl mt-16 font-bold">
            {prop.text}
        </button>
        
     );
}
 
export default Button;