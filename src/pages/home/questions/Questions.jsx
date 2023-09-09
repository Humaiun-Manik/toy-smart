import { FiPlay } from "react-icons/fi";

const Questions = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-24 px-5">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">Frequently Asked Questions</h2>
        <p className="text-[#70be4e] text-lg">Find your answer from here</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-16">
        <div className="relative">
          <img src="https://i.ibb.co/VT4QWvT/toys-party.webp" alt="" />
          <div className="h-24 w-24 bg-white rounded-full absolute top-1/3 left-1/3 ml-5 md:ml-16 flex items-center justify-center border-2 hover:border-[#70be4e] hover:bg-[#ffffff05] hover:scale-125 duration-200">
            <FiPlay className="text-2xl text-[#70be4e]" />
          </div>
        </div>
        <div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is the age range of toys available in the store?
            </div>
            <div className="collapse-content">
              <p>
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <hr />
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you offer a warranty or return policy for your products?
            </div>
            <div className="collapse-content">
              <p>
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <hr />
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I order toys online or do I need to visit the store?
            </div>
            <div className="collapse-content">
              <p>
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <hr />
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do I need to pick them up in-store or delivered at home?
            </div>
            <div className="collapse-content">
              <p>
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <hr />
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Are your toys environmentally friendly and sustainable?
            </div>
            <div className="collapse-content">
              <p>
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <hr />
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What age range of toys do you have in your store?
            </div>
            <div className="collapse-content">
              <p>
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center mt-20">
        <img src="https://i.ibb.co/qs2VNs7/logo1-compact.png" alt="" />
        <img src="https://i.ibb.co/8nyZZt6/logo2-compact.png" alt="" />
        <img src="https://i.ibb.co/QYSQPVh/logo3-compact.png" alt="" />
        <img src="https://i.ibb.co/1MBS4Xx/logo5-compact.png" alt="" />
      </div>
    </div>
  );
};

export default Questions;
