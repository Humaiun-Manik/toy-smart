import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const Header = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const totalQuantity = cartProducts.reduce((sum, product) => sum + product.quantity, 0);
  const total = cartProducts.reduce((sum, product) => sum + product.quantity * product.price, 0).toFixed(2);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = cartProducts.filter((product) => product._id !== id);
          setCartProducts(remaining);
          toast.success("Product successfully removed from the cart!");
        }
      });
  };

  const navItems = (
    <>
      <li className="text-xl">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-xl">
        <Link to={"/products"}>Shop</Link>
      </li>
      <li className="text-xl">
        <Link to={"/blogs"}>Blog</Link>
      </li>
      <li className="text-xl">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="text-xl">
        <Link to={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="h-10 md:h-20">
          <img className="h-full" src="https://i.ibb.co/WnFRwDg/toysmart-logo.png" alt="toy-logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          <div className="drawer z-50 drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="mr-10 cursor-pointer hover:text-[#70be4e] duration-300">
                <span className="absolute badge badge-sm indicator-item h-5 w-5 ms-3  bg-[#fbbc06]  text-white rounded-full">
                  {totalQuantity}
                </span>
                <BiShoppingBag className="relative top-4 text-3xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className="menu p-4 w-80 min-h-full bg-white text-base-content">
                {/* Sidebar content here */}
                <h2 className="text-xl text-center text-[#70be4e] font-semibold mt-5">
                  Shopping <span className="text-[#fbbc08]">Cart</span>
                </h2>
                <div className="divider"></div>
                {cartProducts.map((product) => (
                  <div key={product._id} className="flex items-center mb-5">
                    <div className="w-24 relative">
                      <Link to={`/product-details/${product.productId}`}>
                        <img className="w-20" src={product.img} alt="" />
                      </Link>
                      <AiOutlineCloseCircle
                        onClick={() => handleDeleteProduct(product._id)}
                        className="absolute top-0 text-lg hover:text-[#ff0d01] duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="text-base">
                      <Link to={`/product-details/${product.productId}`}>
                        <p className="hover:text-[#70be4e] duration-300">{product.name}</p>
                      </Link>
                      <p className="mt-2 flex items-end">
                        {product.quantity}
                        <IoIosClose className="text-xl" />${product.price}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="w-full mt-10">
                  <div>
                    <hr />
                    <div className="flex justify-between my-4 text-lg">
                      <p>Total:</p>
                      <p>${total}</p>
                    </div>
                    <hr />
                  </div>
                  <div className="my-8">
                    <Link>
                      <button className="font-semibold text-[#333] text-lg uppercase w-full py-4 border border-[#ccc] rounded-full mb-4 hover:bg-[#70be4e] hover:text-white duration-300">
                        checkout
                      </button>
                    </Link>
                    <Link to={"/cart"}>
                      <button className="font-semibold text-[#333] text-lg uppercase w-full py-4 border border-[#ccc] rounded-full hover:bg-[#70be4e] hover:text-white duration-300">
                        view cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <Link to={"/login"} className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
