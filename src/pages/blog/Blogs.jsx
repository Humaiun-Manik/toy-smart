import { useEffect, useState } from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

const Blogs = () => {
  const { totalBlogs } = useLoaderData();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalBlogs / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch(`http://localhost:5000/blogs?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [currentPage, itemsPerPage]);

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <SubHeader>News</SubHeader>
      <div className="grid md:grid-cols-3 gap-10  my-20">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>

      {/* pagination */}
      <div className="text-center flex items-center justify-center mb-32 ">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="flex items-center justify-center text-xl mx-2 w-10 h-10 hover:text-white hover:bg-[#70be4e] rounded-full duration-300"
        >
          <MdOutlineArrowBackIosNew />
        </button>
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`${
              currentPage === number && "bg-[#70be4e] text-white"
            } mx-2 w-10 h-10 hover:text-white hover:bg-[#70be4e] rounded-full duration-300`}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex items-center justify-center text-xl mx-2 w-10 h-10 hover:text-white hover:bg-[#70be4e] rounded-full duration-300"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
