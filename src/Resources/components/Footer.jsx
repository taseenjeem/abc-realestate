import logo from "../assets/icons/300.png";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="footer p-10 max-w-7xl mx-auto">
        <div>
          <img src={logo} className="w-40" alt="" />
          <p className="font-semibold text-xs mt-6">
            ABC REAL ESTATE LLC – © COPYRIGHT 2023. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div>
          <span
            className="uppercase text-lg font-bold mb-3 underline underline-offset-4"
            style={{ fontFamily: "Alata" }}
          >
            Contact Us
          </span>
          <a className="text-lg link-hover" href="tel:+971555147420">
            <FiPhoneCall className="inline text-lg relative bottom-[2px] mr-2" />{" "}
            +971555147420
          </a>
          <a
            className="text-lg link-hover"
            href="mailto:info@abcrealestateuae.com"
          >
            <FiMail className="inline text-lg relative bottom-[2px] mr-2" />{" "}
            info@abcrealestateuae.com
          </a>
          <span
            className="uppercase text-lg font-bold mt-7 mb-3 underline underline-offset-4"
            style={{ fontFamily: "Alata" }}
          >
            Social Links
          </span>
          <a
            className="text-lg link-hover"
            href="https://www.facebook.com/abcrealestateuae"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook2 className="inline text-xl relative bottom-[3px] mr-2" />{" "}
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
