import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CartRow = ({ product, handleDeleteProduct }) => {
  const { _id, name, img, price, quantity } = product;
  const total = (price * quantity).toFixed(2);

  return (
    <tr className="text-lg">
      <td className="border w-36">
        <div className=" flex justify-center">
          <Link to={`/product-details/${product.productId}`}>
            <img src={img} alt="product" />
          </Link>
        </div>
      </td>
      <td className="border hover:text-[#70be4e] duration-200">
        <Link to={`/product-details/${product.productId}`}>{name}</Link>
      </td>
      <td className="border">${price}</td>
      <td className="border">{quantity}</td>
      <td className="border">${total}</td>
      <td className="border">
        <div className=" flex justify-evenly">
          <Link to={`/product-details/${product.productId}`}>
            <button className="text-2xl hover:text-[#70be4e] duration-200">
              <VscEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="text-2xl hover:text-[#70be4e] duration-200"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartRow;
