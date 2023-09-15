import SubHeader from "../../components/shared/subHeader/SubHeader";
import Product from "../../components/shared/product/Product";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

const AllProduct = () => {
  const { totalProducts } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  console.log(currentPage, totalPages);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);

  const options = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const handleSelectChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div className="max-w-screen-2xl px-5 mx-auto mb-24">
      <SubHeader>Products</SubHeader>
      <div className="mb-5 flex items-center justify-around">
        <p>
          Showing 1 - {itemsPerPage} of {totalProducts} result
        </p>
        <div className="flex items-center">
          <p className="me-3">Show:</p>
          <select value={itemsPerPage} onChange={handleSelectChange} className="select select-sm">
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>

      {/* pagination */}
      <div className="text-center flex items-center justify-center my-5">
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

export default AllProduct;
