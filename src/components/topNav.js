import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./navbar/navLinks";

const TopNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-gray-100">
      <div className="flex p-5 items-center font-medium justify-between">
        {/* flex container */}
        <div className="z-50 md:w-auto w-full flex justify-between space-x-4">
          {/* logo */}
          <div className="md:cursor-pointer h-9">
            {/* <img src="../logo.svg" className="w-12" alt="" /> */}
            <Link to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                    fill="#DA552F"
                  ></path>
                  <path
                    d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                    fill="#FFF"
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
          {/* hamburger icon */}
          <button
            id="menu-btn"
            className="block md:hidden order-first focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <img src="svgs/close-24.svg" alt="" />
            ) : (
              <img src="svgs/menu-24.svg" alt="" />
            )}
          </button>
          {/* search */}
          <div class="relative hidden md:block w-full md:w-56 mr-4">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search topics"
              required
            />
          </div>
          <Link to="#" className="hover:text-emerald-500 my-auto hidden md:block">
            Products
          </Link>
          <Link to="#" className="hover:text-emerald-500 my-auto hidden md:block">
            Community
          </Link>
          <Link to="#" className="hover:text-emerald-500 my-auto hidden md:block">
            Tools
          </Link>
          <Link to="#" className="hover:text-emerald-500 my-auto hidden md:block">
            Jobs
          </Link>
          <Link to="#" className="hover:text-emerald-500 my-auto hidden md:block">
            About
          </Link>

          <Link to="login" className="hover:text-emerald-500 my-auto md:hidden">
            Sign in
          </Link>
        </div>
        {/* menu item */}
        <div className="hidden md:flex space-x-4">
          <Link to="/addpost" className="my-auto hover:text-emerald-500">
            How to post a product?
          </Link>
          <Link to="login" className="my-auto hover:text-emerald-500">
            Sign In
          </Link>
          {/* button */}
          <Link
            to="register"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-red-600 rounded-lg hover:bg-slate-400"
          >
            Sign Up
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <div
            className={`z-0
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
