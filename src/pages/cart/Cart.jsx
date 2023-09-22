import SubHeader from "../../components/shared/subHeader/SubHeader";
import { FcCalendar } from "react-icons/fc";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLoaderData } from "react-router-dom";
import CartRow from "./CartRow";

const Cart = () => {
  const products = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <SubHeader> Your Shopping Cart</SubHeader>
      <div className="overflow-x-auto mt-28">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className=" border text-sm text-[#333]">
              <th className=" border w-[10%">Image</th>
              <th className=" border w-[20%]">Product</th>
              <th className=" border">Price</th>
              <th className=" border w-[30%]">Quantity</th>
              <th className=" border">Total</th>
              <th className=" border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <CartRow key={product._id} product={product}></CartRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:flex justify-between mt-8">
        <Link to={"/products"}>
          <button className="mb-5 bg-[#70be4e] px-8 py-3 rounded-full uppercase text-white hover:bg-[#fbbc08] duration-300">
            continue shopping
          </button>
        </Link>
        <div>
          <button className="bg-[#70be4e] px-8 py-3 rounded-full uppercase text-white me-10 hover:bg-[#fbbc08] duration-300">
            update cart
          </button>
          <button className="bg-[#70be4e] px-8 py-3 rounded-full uppercase text-white hover:bg-[#fbbc08] duration-300">
            clear cart
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-32">
        <div className="border p-5">
          <h2 className="text-xl font-semibold pb-3">Delivery Date</h2>
          <hr />
          <div className="flex items-center my-4">
            <p>Pick a delivery date:</p>
            <div className="border flex items-center ms-5">
              <FcCalendar className="text-2xl mx-5" />
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                closeOnScroll={true}
              />
            </div>
          </div>
          <p>We do not deliver during the week-end.</p>
          <textarea
            className="textarea textarea-bordered w-full h-36 mt-10 text-xl font-semibold"
            placeholder="Special instructions for seller"
          ></textarea>
        </div>
        <div className="border p-5">
          <h2 className="text-xl font-semibold pb-3">Cart Totals</h2>
          <table className="table text-base">
            <tbody>
              <tr>
                <td className=" border font-semibold">Subtotal</td>
                <td className=" border">$172.00 USD</td>
              </tr>
              <tr className="font-bold">
                <td className=" border">Total</td>
                <td className=" border">$172.00 USD</td>
              </tr>
            </tbody>
          </table>
          <button className="mt-7 bg-[#70be4e] px-8 py-3 rounded-full uppercase text-white font-semibold hover:bg-[#fbbc08] duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
