import { useState } from "react";
import logo from "../assets/icons/300.png";
import { Link, NavLink } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdPhone, MdMessage } from "react-icons/md";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../CSS/Navbar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    document.getElementById("dropdown-button").focus();
  };

  // State managements of consultancy modal
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      {/* For large device only */}
      <section className="bg-white w-full z-50 hidden lg:block">
        <nav className="">
          <div className="flex justify-around items-center">
            <Link to="/" className="">
              <img src={logo} className="lg:w-[100px] w-20 lg:my-2" alt="" />
            </Link>
            <div className="flex items-center">
              <div className="flex items-center">
                <ImLocation2 className="text-5xl text-[#4B6BFB]" />
                <div>
                  <p className="text-lg font-semibold">Al Bahia</p>
                  <p className="text-sm">Ajman - United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center mx-6">
                <MdPhone className="text-5xl text-[#4B6BFB]" />
                <div>
                  <p className="text-lg font-semibold">Contact Us</p>
                  <p className="text-sm">+971 55 514 7420</p>
                </div>
              </div>
              <button
                onClick={onOpenModal}
                className="btn btn-primary ml-4 text-white capitalize"
              >
                <MdMessage className="text-xl mr-2" />
                Get Consultancy
              </button>
              <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </Modal>
            </div>
          </div>
        </nav>
        <nav className="sticky-navbar">
          <div className="flex bg-gradient-to-l from-[#314796] to-[#0CACEA] justify-center">
            <ul className="menu menu-horizontal my-5 text-white">
              <li className="mx-2">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/about-us">About</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li className="ml-2">
                <NavLink to="/contact-us">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      {/* for mobile devices */}
      <nav className="bg-white fixed w-full top-0 z-50 shadow-lg block lg:hidden">
        <div className="navbar mx-auto max-w-7xl">
          <div className="navbar-start">
            <Link to="/" className="">
              <img src={logo} className="lg:w-[100px] w-20 lg:my-2" alt="" />
            </Link>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal ">
              <li className="mx-2">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/about-us">About</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li className="ml-2">
                <NavLink to="/contact-us">Contact</NavLink>
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
              className={`menu menu-compact dropdown-content mt-5 p-2 shadow-2xl border bg-base-100 rounded-box w-52 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li className="mx-2" onClick={handleMenuItemClick}>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="mx-2" onClick={handleMenuItemClick}>
                <NavLink to="/about-us">About</NavLink>
              </li>
              <li className="mx-2" onClick={handleMenuItemClick}>
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li className="mx-2" onClick={handleMenuItemClick}>
                <NavLink to="/contact-us">Contact</NavLink>
              </li>
              <button
                onClick={onOpenModal}
                className="btn btn-primary ml-4 text-white capitalize"
              >
                <MdMessage className="text-xl mr-2 inline-block" />
                Get Consultancy
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
