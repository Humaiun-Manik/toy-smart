import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const navItems = (
    <>
      <li className="text-xl">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-xl">
        <Link to={"/shop"}>Shop</Link>
      </li>
      <li className="text-xl">
        <Link to={"/blog"}>Blog</Link>
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
          <div className="dropdown dropdown-end me-5">
            <label tabIndex={0} className="">
              <div className="indicator">
                <BiShoppingBag className="text-2xl cursor-pointer hover:text-[#fbbc06] duration-300" />
                <span className="badge badge-sm indicator-item -mt-1  h-5 w-5 p-1 bg-[#fbbc06]  text-white rounded-full">
                  7
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
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
