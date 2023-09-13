import { TbArrowBigRightLines } from "react-icons/tb";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#fbbe0b3d]">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 py-20">
            <div className="flex items-center">
              <div className="ps-5">
                <h3 className="bg-[#fbbd07] inline text-3xl italic text-white font-semibold py-2 px-5">
                  New arrival
                </h3>
                <h1 className="my-5 text-7xl text-[#333333] font-extrabold uppercase">One box toy</h1>
                <p className="text-xl">Flat 10% off on order above $29.99</p>
                <Link to={"/products"}>
                  <button className="btn uppercase text-white text-xl bg-[#70be4e] px-7 rounded-full mt-10 hover:bg-[#fbbd07] duration-300">
                    Shop now <TbArrowBigRightLines className="ms-2" />
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="https://i.ibb.co/rfqnwSq/thmb2d-836dbfe8-8883-4720-980e-39af19da7de5.webp"
              className="w-full"
            />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#fbbf0b13] border-2 border-[#fbbd07] hover:bg-[#70be4e] duration-300"
            >
              <AiOutlineArrowLeft className="text-4xl text-[#fbbd07]" />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#fbbf0b13] border-2 border-[#fbbd07] hover:bg-[#70be4e] duration-300"
            >
              <AiOutlineArrowRight className="text-4xl text-[#fbbd07]" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 py-20">
            <div className="flex items-center">
              <div className="ps-5">
                <h3 className="bg-[#fbbd07] inline text-3xl italic text-white font-semibold py-2 px-5">
                  Big discount
                </h3>
                <h1 className="my-5 text-7xl text-[#333333] font-extrabold uppercase">Kids offer</h1>
                <p className="text-xl">Flat 10% off on order above $29.99</p>
                <Link to={"/shop"}>
                  <button className="btn uppercase text-white text-xl bg-[#70be4e] px-7 rounded-full mt-10 hover:bg-[#fbbd07] duration-300">
                    Shop now <TbArrowBigRightLines className="ms-2" />
                  </button>
                </Link>
              </div>
            </div>
            <img src="https://i.ibb.co/Lr1Xtkr/h1thmb.webp" className="w-full h-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#fbbf0b13] border-2 border-[#fbbd07] hover:bg-[#70be4e] duration-300"
            >
              <AiOutlineArrowLeft className="text-4xl text-[#fbbd07]" />
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#fbbf0b13] border-2 border-[#fbbd07] hover:bg-[#70be4e] duration-300"
            >
              <AiOutlineArrowRight className="text-4xl text-[#fbbd07]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
