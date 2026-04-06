const Cards = (props) => {
    return ( 
        <div className=" container h-[400px] w-[85%] text-center rounded-xl shadow-sm shadow-gray-400 m-2 bg-white">
            <img src={props.image} style={{"width":"100%","height":"70%"}} alt="" className="rounded-t-xl"/>
            <h2 className="font-bold text-2xl text-black p-2">
                {props.title}
            </h2>
            <p className="font-semibold text-lg ">
                {props.description}
            </p>
        </div>
     );
}
 
export default Cards;
