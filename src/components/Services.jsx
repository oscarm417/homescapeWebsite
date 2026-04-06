import Cards from "./Cards";
import hardScaping from "../assets/hardScaping.jpg";
import sprinkler from "../assets/sprinkler.jpg";
import design from "../assets/design.jpg";
import lawnMower from "../assets/lawnMowing.jpg";

const Services = () => {
    return (
      <div id = "services"  className="flex flex-col items-center justify-center bg-[#EAF1E7] h-full p-10 mx-auto">
        <h1 className="text-8xl font-bold text-center">Services we provide</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-12 mx-auto ">
          <Cards image={design} title="Design" description = "We can design your dream place. "/>
          <Cards image={sprinkler} title="Irrigation" description = "We fix and install irrigation" />
          <Cards image={hardScaping} title="Hard Scaping" description = "We can add an extra touch to your home" />
          <Cards image={lawnMower} title="Lawn Maintenance" description = "We can maintain your property year round."/>
        </div>
      </div>
    );
  };
  
  export default Services;
  