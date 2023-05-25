import { useState } from "react";
import logo from "../assets/icons/300.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    document.getElementById("dropdown-button").focus();
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-lg">
      <div className="navbar mx-auto max-w-7xl">
        <div className="navbar-start">
          <Link to="/" className="">
            <img src={logo} className="w-20" alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li className="mx-2">
              <Link to="/home">Home</Link>
            </li>
            <li className="mx-2">
              <Link to="/about-us">About</Link>
            </li>
            <li className="mx-2">
              <Link to="/properties">Properties</Link>
            </li>
            <li className="ml-2">
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ml-auto">
          <label
            tabIndex={0}
            onClick={handleClick}
            className="btn btn-ghost lg:hidden"
          >
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
            className={`menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-52 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="mx-2" onClick={handleMenuItemClick}>
              <Link to="/home">Home</Link>
            </li>
            <li className="mx-2" onClick={handleMenuItemClick}>
              <Link to="/about-us">About</Link>
            </li>
            <li className="mx-2" onClick={handleMenuItemClick}>
              <Link to="/properties">Properties</Link>
            </li>
            <li className="mx-2" onClick={handleMenuItemClick}>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
