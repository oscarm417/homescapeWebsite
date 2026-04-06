import fancyHome from "../assets/fancyHome.jpg";
const About = () => {
    return ( 
        <div id = "about" className="grid grid-cols-1 sm:grid-cols-2  p-8">
            <div className="flex items-center justify-center">
                <img src={fancyHome} style = {{"width":"700px"}} alt="home" />
            </div>

            <div className="mr-8 md:mr-0">
                <h3 className="text-2xl md:text-5xl">Est. 2019</h3>
                <h2 className=" text-5xl md:text-8xl font-bold ">If you can dream it, we can build it</h2>
                
                <div className="w-32 h-2 bg-green-500 my-8"></div>
                <p className="text-2xl mr-8">
                    We are a well-established company based in El Paso, Texas, proudly serving 
                    our community for several years. Our dedicated team of professionals specializes
                    in designing, constructing, and enhancing both residential and commercial properties.
                    From local homes to large-scale commercial projects, our diverse clientele reflects the
                    trust and satisfaction we've earned. Your property could be the next success in our portfolio.
                </p>

            </div>

        </div>
     );
}
 
export default About;