import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";

const CartRow = ({ product }) => {
  const { name, img, price, available, quantity } = product;
  const [quantityText, setQuantityText] = useState(quantity);
  const total = price * quantity;

  return (
    <tr className="text-lg">
      <td className="border w-36">
        <div className=" flex justify-center">
          <img src={img} alt="product" />
        </div>
      </td>
      <td className="border">{name}</td>
      <td className="border">${price}</td>
      <td className="border">
        <div className="flex justify-center">
          <button
            onClick={() => setQuantityText(quantityText - 1)}
            disabled={quantityText === 1}
            className="border-s-2 rounded-s-full px-1"
          >
            <HiMinusSm />
          </button>
          <p className="w-20 py-2 border">{quantityText}</p>
          <button
            onClick={() => setQuantityText(quantityText + 1)}
            disabled={quantityText === available}
            className="border-e-2 rounded-e-full px-1"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </td>
      <td className="border">${total}</td>
      <td className="border">
        <div className=" flex justify-evenly">
          <button className="text-2xl hover:text-[#70be4e] duration-200">
            <VscEdit />
          </button>
          <button className="text-2xl hover:text-[#70be4e] duration-200">
            <AiOutlineCloseCircle />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartRow;
