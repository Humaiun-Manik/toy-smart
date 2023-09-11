import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [filterProducts, setFilterProducts] = useState("feature");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">We Love Trends</h2>
        <p className="text-[#70be4e] text-lg">Featured Products</p>
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-center">
        <button
          onClick={() => {
            setFilterProducts("feature");
          }}
          className={
            filterProducts === "feature"
              ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
              : "py-2 px-7 text-lg"
          }
        >
          Featured
        </button>
        <button
          onClick={() => {
            setFilterProducts("sellers");
          }}
          className={
            filterProducts === "sellers"
              ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
              : "py-2 px-7 text-lg"
          }
        >
          Best Sellers
        </button>
        <button
          onClick={() => {
            setFilterProducts("arrivals");
          }}
          className={
            filterProducts === "arrivals"
              ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
              : "py-2 px-7 text-lg"
          }
        >
          New Arrivals
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
