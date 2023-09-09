import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-24">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">Shop By Age</h2>
        <p className="text-[#70be4e] text-lg">Our Collections</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-5 mt-16">
        <Link to={"/collections"}>
          <div>
            <img src="https://i.ibb.co/0Fzg79F/category-img1.png" alt="" />
            <h3 className="text-[#333] text-xl font-bold text-center mt-5">For Baby</h3>
          </div>
        </Link>
        <Link to={"/collections"}>
          <div>
            <img src="https://i.ibb.co/GCzRM1L/category-img2.png" alt="" />
            <h3 className="text-[#333] text-xl font-bold text-center mt-5">1 to 2 years</h3>
          </div>
        </Link>
        <Link to={"/collections"}>
          <div>
            <img src="https://i.ibb.co/dDv07tS/category-img3.png" alt="" />
            <h3 className="text-[#333] text-xl font-bold text-center mt-5">3 to 4 years</h3>
          </div>
        </Link>
        <Link to={"/collections"}>
          <div>
            <img src="https://i.ibb.co/PmkR0NQ/category-img4.png" alt="" />
            <h3 className="text-[#333] text-xl font-bold text-center mt-5">5 to 7 years</h3>
          </div>
        </Link>
        <Link to={"/collections"}>
          <div>
            <img src="https://i.ibb.co/zsWr5GZ/category-img5.png" alt="" />
            <h3 className="text-[#333] text-xl font-bold text-center mt-5">8 to 11 years</h3>
          </div>
        </Link>
        <Link to={"/collections"}>
          <div>
            <img src="https://i.ibb.co/SNZXwZS/category-img6.png" alt="" />
            <h3 className="text-[#333] text-xl font-bold text-center mt-5">12 years & up</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
