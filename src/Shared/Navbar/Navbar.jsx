import { Link } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/bookings">Bookings</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/dashboard/bookings">Dashboard</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar mx-auto 2xl:container text-black fixed z-10 bg-opacity-80 bg-white">
        <div className="navbar-start">
          <div className="dropdown text-black font-semibold">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="text-3xl">
            <CiDeliveryTruck className="text-[#ec9872]" />
          </div>
          <a className=" text-black text-3xl">
            Track
            <span className="text-[#fa6018]">Now</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end mr-6">
          <Link to="/tracking">
            <button
              className="p-2 bg-[#FA4318] border-none
                    text-white"
            >
              Tracking
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
