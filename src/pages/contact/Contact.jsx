import { SlLocationPin } from "react-icons/sl";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import SubHeader from "../../components/shared/subHeader/SubHeader";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <SubHeader>contact</SubHeader>
      <div className="hero my-20">
        <div className="hero-content grid md:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#333]">Get in touch</h1>
            <p className="py-6 text-[#5a5a5a] mb-10">
              We nod love to hear from you, lets get in touch! lorem ipsum is not simply random text. It has
              roots in a piece of classical.
            </p>
            <div className="flex items-center mb-10">
              <div className="w-16 h-16 bg-[#70be4e] rounded-full flex items-center justify-center me-5">
                <SlLocationPin className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333] mb-2">Headquarter</h3>
                <p className="text-[#5a5a5a]">Address goes here, street, Crossroad 123.</p>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <div className="w-16 h-16 bg-[#70be4e] rounded-full flex items-center justify-center me-5">
                <GiSmartphone className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333] mb-2">Phone Number</h3>
                <p className="text-[#5a5a5a]">+880 190000222 / +880 1777446699</p>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <div className="w-16 h-16 bg-[#70be4e] rounded-full flex items-center justify-center me-5">
                <HiOutlineMail className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333] mb-2">Email Us</h3>
                <p className="text-[#5a5a5a]">info@example.com / info@example.com</p>
              </div>
            </div>
          </div>
          <div className="card w-full">
            <form className="card-body">
              <input type="text" placeholder="Name" className="input input-bordered mb-3" required />
              <input type="text" placeholder="Email" className="input input-bordered mb-3" required />
              <input type="text" placeholder="Subject" className="input input-bordered mb-3" required />
              <textarea className="textarea textarea-bordered textarea-lg w-full"></textarea>
              <input
                className="w-44 text-white text-lg font-semibold uppercase bg-[#fbbc05] py-3 rounded-full mt-5"
                type="submit"
                value="send message"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
