import logo from "../assets/icons/300.png";
import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* component */}
      <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img src={logo} className="w-40" alt="logo" />
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                ABC Real Estate LLC – © Copyright 2023. All Rights Reserved.
              </p>
              <div className="mt-8">
                <h3 className="font-semibold mb-3 text-gray-600">
                  Follow Us On Social Media :
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/abcrealestateuae"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImFacebook2 className="text-2xl text-gray-500 hover:text-gray-700" />
                  </a>
                  <a
                    href="https://www.facebook.com/abcrealestateuae"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsYoutube className="text-3xl relative bottom-[3px] text-gray-500 hover:text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium">Quick Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link to="/home" className="hover:opacity-75">
                    {" "}
                    Home{" "}
                  </Link>
                  <Link to="/about-us" className="hover:opacity-75">
                    {" "}
                    About Us{" "}
                  </Link>
                  <Link to="/properties" className="hover:opacity-75">
                    {" "}
                    Properties{" "}
                  </Link>
                  <Link to="/contact-us" className="hover:opacity-75">
                    {" "}
                    Contact Us{" "}
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href="">
                    {" "}
                    Terms &amp; Conditions{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link to="/contact-us" className="hover:opacity-75">
                    {" "}
                    Contact{" "}
                  </Link>
                  <Link to="/contact-us" className="hover:opacity-75">
                    {" "}
                    FAQs{" "}
                  </Link>
                  <a
                    className="hover:opacity-75"
                    href="https://wa.me/+971555147420"
                  >
                    {" "}
                    Live Chat{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Direct Contact</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a href="tel:+971555147420"> +971555147420</a>
                  <a href="mailto:info@abcrealestateuae.com">
                    info@abcrealestateuae.com
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
