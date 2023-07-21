import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo/logo.png"
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
      logOut();
    };
  const navItems = (
    <>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="colleges">Colleges</Link>
      </li>
      <li>
      <Link to="admission">Admission</Link>
      </li>
      <li>
      <Link to="mycollege">My College</Link>
      </li>
    </>
  );
  return (
    <>
     <div className="navbar px-10">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-40"
            >
            {navItems}
            </ul>
          </div>
          <Link >
                <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <Link to="/login" className="border bg-orange-500 border-orange-500 rounded-lg px-8 py-2 text-white">Login</Link> */}
          {user ? (
        <>
          <div>
            <img src={user.photoURL} className="w-10 rounded-full mr-4" />
          </div>
          <button
            onClick={handleLogOut}
            className={
              location.pathname === "/"
                ? "border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white"
                : "border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white"
            }
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <button
                className={
                  location.pathname === "/"
                    ? "border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white"
                    : "border bg-image border-[#f36b3b] rounded-lg px-8 py-2 text-white"
                }
              >
                Login
              </button>
            </Link>
          </li>
        </>
      )}
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
