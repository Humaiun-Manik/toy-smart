import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { _id, name, img, date, description } = blog;
  return (
    <div className="card-compact border border-spacing-2 p-3 rounded-lg">
      <figure className="overflow-hidden">
        <Link to={`/blog-details/${_id}`}>
          <img className="hover:scale-110 duration-500" src={img} alt="" />
        </Link>
      </figure>
      <div className="card-body text-[#333]">
        <p
          style={{ marginTop: "-35px" }}
          className="w-36 relative bg-[#fbbc06] text-lg text-center text-white py-1 rounded-full mt-[-10]"
        >
          {date}
        </p>
        <Link to={`/blog-details/${_id}`}>
          <h2 className="card-title mt-5 hover:text-[#70be4e] duration-300 inline">{name}</h2>
        </Link>
        <p className="text-base">{description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default Blog;
