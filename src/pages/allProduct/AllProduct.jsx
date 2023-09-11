import { useEffect, useState } from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import Product from "../../components/shared/products/Product";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-screen-2xl px-5 mx-auto">
      <SubHeader>Products</SubHeader>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
