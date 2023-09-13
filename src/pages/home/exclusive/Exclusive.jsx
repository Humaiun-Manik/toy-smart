import { Link } from "react-router-dom";

const Exclusive = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 my-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <div className="hover:scale-110 duration-700">
            <img
              src="https://i.ibb.co/pXq991x/home4-banner-02-389f97e8-9d15-431a-abf3-8f72e0508721.webp"
              alt=""
            />
          </div>
          <div className="absolute top-1/3 right-20 text-white">
            <p>Sale on exclusive</p>
            <h3 className="text-3xl mt-2 mb-5">
              Accessories <br /> kids toy
            </h3>
            <Link to={"/products"}>
              <button className="uppercase bg-[#4285f4] px-5 py-2 rounded-full hover:bg-[#fbbd07] duration-300">
                shop now
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="hover:scale-110 duration-700">
            <img src="https://i.ibb.co/hgSkHvm/Untitled-2.webp" alt="" />
          </div>
          <div className="absolute top-1/3 left-20 text-white">
            <p>Sale on exclusive</p>
            <h3 className="text-3xl mt-2 mb-5">
              Accessories <br /> kids toy
            </h3>
            <Link to={"/products"}>
              <button className="uppercase bg-[#fbbd07] px-5 py-2 rounded-full hover:bg-[#4285f4] duration-300">
                shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
