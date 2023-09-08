import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen relative">
      <img className="w-full h-full" src="https://i.ibb.co/xJrGGX6/167966-OVVF4-O-666.png" alt="" />
      <Link to={"/"}>
        <button className="absolute top-1/3 left-28 md:left-1/2 uppercase btn border-0 text-white text-xl bg-[#fbbc05] hover:bg-[#70be4e] duration-300">
          Go to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
