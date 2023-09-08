import "./About.css";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import { FiPlay } from "react-icons/fi";
import Testimonial from "../../components/shared/testimonial/Testimonial";
import Team from "./team/Team";
import block from "./../../assets/images/block_3fd8e71d-ad90-4a82-b3dd-5e014ea255ae_small.avif";
import puzzle from "./../../assets/images/puzzle_1_small.avif";
import abc from "./../../assets/images/abc_small.avif";
import robot from "./../../assets/images/robot_small.avif";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <SubHeader>about</SubHeader>
      <div>
        <div className="text-center">
          <p className="text-[#70be4e] text-lg mb-3">The furture of Toyman</p>
          <h2 className="text-3xl text-[#333333] font-bold">We provide & offer premium toys</h2>
          <div className="relative">
            <img className="mx-auto my-16" src="https://i.ibb.co/qmj4hZs/video-img.webp" alt="" />
            <div className="h-24 w-24 bg-white rounded-full absolute top-1/3 left-1/2 flex items-center justify-center border-2 hover:border-[#70be4e] hover:bg-[#ffffff05] hover:scale-125 duration-200">
              <FiPlay className="text-2xl text-[#70be4e]" />
            </div>
          </div>
          <h2 className="text-3xl text-[#333333]">
            Made of high quality materials and by <br /> highest possible standards
          </h2>
        </div>
        <Testimonial />
        <Team />
        <div className="my-24 px-5">
          <h1 className="text-3xl text-[#333333] text-center">
            Made of high quality materials and by highest possible standards
          </h1>
          <div className="grid gap-20 md:grid-cols-2 mt-20">
            <div className="flex items-center">
              <img src={block} alt="" />
              <div className="ms-5">
                <h3 className="text-xl text-[#242424] font-semibold mb-2">Dust Resistant</h3>
                <p className="text-[#757575] leading-6 text-justify">
                  we offer a wide selection of dust-resistant toys that are perfect for little ones who love
                  to have fun while keeping their living spaces tidy.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={puzzle} alt="" />
              <div className="ms-5">
                <h3 className="text-xl text-[#242424] font-semibold mb-2">Eco Friendly</h3>
                <p className="text-[#757575] leading-6 text-justify">
                  we offer a wide selection of dust-resistant toys that are perfect for little ones who love
                  to have fun while keeping their living spaces tidy.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={abc} alt="" />
              <div className="ms-5">
                <h3 className="text-xl text-[#242424] font-semibold mb-2">Water Resistance</h3>
                <p className="text-[#757575] leading-6 text-justify">
                  we offer a wide selection of dust-resistant toys that are perfect for little ones who love
                  to have fun while keeping their living spaces tidy.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={robot} alt="" />
              <div className="ms-5">
                <h3 className="text-xl text-[#242424] font-semibold mb-2">Easy Assembling</h3>
                <p className="text-[#757575] leading-6 text-justify">
                  we offer a wide selection of dust-resistant toys that are perfect for little ones who love
                  to have fun while keeping their living spaces tidy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="text-center">
            <h2 className="text-3xl text-[#333333] font-bold mb-3">Join Our Tribe</h2>
            <p className="text-[#70be4e] text-lg">@ToyMan Toys</p>
          </div>
          <Marquee className="mt-14" pauseOnHover={true} gradient={true}>
            <img className="me-5" src="https://i.ibb.co/B3Nr6S4/ins1.webp" alt="" />
            <img className="me-5" src="https://i.ibb.co/PhRb1kM/ins2.png" alt="" />
            <img className="me-5" src="https://i.ibb.co/48HfrCN/ins3.png" alt="" />
            <img className="me-5" src="https://i.ibb.co/Nnxm7jy/ins4.png" alt="" />
            <img className="me-5" src="https://i.ibb.co/v16w1jy/ins5.png" alt="" />
            <img className="me-5" src="https://i.ibb.co/wzKLPQH/ins6.png" alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
