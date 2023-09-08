import { Link } from "react-router-dom";

const SubHeader = ({ children }) => {
  return (
    <div className="flex text-lg font-bold my-14">
      <p className="me-2 text-[#70be4e]">
        <Link to={"/"}>Home</Link> /
      </p>
      <p className="capitalize text-[#ff0c00]">{children}</p>
    </div>
  );
};

export default SubHeader;
