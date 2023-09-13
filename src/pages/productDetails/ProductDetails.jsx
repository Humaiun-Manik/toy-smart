import { useLoaderData } from "react-router-dom";
import SubHeader from "../../components/shared/subHeader/SubHeader";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="max-w-screen-2xl px-5 mx-auto">
      <SubHeader>Product Details</SubHeader>
    </div>
  );
};

export default ProductDetails;
