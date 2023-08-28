import logo from "../assets/icons/300.png";
import { Link, NavLink } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import "react-responsive-modal/styles.css";
import "../CSS/Navbar.css";
import MobileNavbar from "./MobileNavbar";
import ConsultencyBtn from "./ConsultencyBtn";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const [applyClassName, setApplyClassName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition >= 92) {
        setApplyClassName(true);
      } else {
        setApplyClassName(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* For large device only */}

      <nav className="bg-white w-full z-50 hidden lg:block">
        <div className="flex justify-around items-center">
          <Link to="/" className="">
            <img src={logo} className="lg:w-[100px] w-20 lg:my-2" alt="" />
          </Link>
          <div className="flex items-center">
            <a
              href="https://www.google.com/maps/dir//Al+Bahia+Ajman+United+Arab+Emirates/@25.4195821,55.5774025,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ef5f735caddbd15:0xe7172a37a00ee8a9!2m2!1d55.5774025!2d25.4195821?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <ImLocation2 className="text-5xl text-[#4B6BFB]" />
              <div>
                <p className="text-lg font-semibold">Al Bahia</p>
                <p className="text-sm">Ajman - United Arab Emirates</p>
              </div>
            </a>
            <a href="tel:+971555147420" className="flex items-center mx-6">
              <MdPhone className="text-5xl text-[#4B6BFB]" />
              <div>
                <p className="text-lg font-semibold">Contact Us</p>
                <p className="text-sm">+971 55 514 7420</p>
              </div>
            </a>
            <ConsultencyBtn />
          </div>
        </div>
      </nav>

      <nav
        className={`w-full z-50 hidden lg:block ${
          applyClassName ? "fixed top-0" : ""
        }`}
      >
        <div className="flex gradient-bg justify-center">
          <ul className="menu menu-horizontal my-5 text-white">
            <li className="mr-2">
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

      {/* for mobile devices */}
      <MobileNavbar />
    </>
  );
};

export default NavigationBar;
