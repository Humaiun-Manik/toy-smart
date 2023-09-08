import client1 from "./../../../assets/images/review1_100x.avif";
import client2 from "./../../../assets/images/review2_1_100x.avif";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="my-24 max-w-screen-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">Customer Testimonials</h2>
        <p className="text-[#70be4e] text-lg">What Clients Says</p>
      </div>
      <div className="grid md:grid-cols-2 gap-20 mt-16 px-5">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={client1} alt="" />
              <div className="ms-5">
                <h4 className="text-[#333] text-xl font-bold">zina mekr</h4>
                <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              </div>
            </div>
            <FaQuoteRight className="w-14 h-14 text-[#70be4e42]" />
          </div>
          <p className="text-[#1f2226] mt-5 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quasi, deserunt ipsam sapiente
            quod, laboriosam fugiat nemo possimus fugit obcaecati, asperiores officia culpa modi nobis numquam
            quia doloribus tempora.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={client2} alt="" />
              <div className="ms-5">
                <h4 className="text-[#333] text-xl font-bold">Hester Perkins</h4>
                <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              </div>
            </div>
            <FaQuoteRight className="w-14 h-14 text-[#70be4e42]" />
          </div>
          <p className="text-[#1f2226] mt-5 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quasi, deserunt ipsam sapiente
            quod, laboriosam fugiat nemo possimus fugit obcaecati, asperiores officia culpa modi nobis numquam
            quia doloribus tempora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
