import backyard from "../assets/backyard.jpg";
import bkGarden from "../assets/bk_garden.jpg";
import bkGarden2 from "../assets/bk_garden2.jpg";
import desertHome1 from "../assets/desert_home_1.jpg";
import franklinMountainHome from "../assets/franklin_mountain_home.jpg";
import home4 from "../assets/home4.jpg";



const imageBoxes = [
    {
    image:backyard,
    description: "East Side Home"
    },
    {
    image:bkGarden,
    description: "Burger King Locale"
    },
    {
    image:bkGarden2,
    description: "Burger King Locale"
    },
    {
    image:desertHome1,
    description: "North Hills Home"
    },
    {
    image:franklinMountainHome,
    description: "Franklin Mountain Home"
    },
    {
    image:home4,
    description: "New Mexico Home"
    },

]




const Projects = () => {
    return (
        <div id = "projects" className="w-full bg-[#272726] p-16">
            <h1 className="text-2xl md:text-6xl text-white font-bold">Latest Projects</h1>
            <div className="w-32 h-2 bg-green-500 my-8"></div>
            <p className="text-xl font-semibold text-white">Our latest projects range from large scale developers and contractors<br/> to small local homes in the beautiful New Mexico and Texas desert.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {imageBoxes.map((curr, currIndex) => (
                    <div key={currIndex} className="flex items-center justify-center gap-4 masonry-item relative overflow-hidden group">
                        <img src={curr.image} style= {{"width":"90%","height":"90%"}} alt={curr.description} className="w-full h-auto group-hover:brightness-75 transition duration-300"/>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-center font-bold text-3xl">{curr.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Projects;