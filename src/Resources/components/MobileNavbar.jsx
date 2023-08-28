import { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import "../CSS/MobileNavbar.css";
import menuIcon from "../assets/icons/menu-alt-01-svgrepo-com.svg";
import { Link, NavLink } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import Modal from "react-responsive-modal";
import logo from "../assets/icons/300.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open"); // Remove the class
  };

  const handleMenuOpen = () => {
    setIsOpen(true);
    document.body.classList.add("menu-open"); // Add the class
  };

  const onOpenModal = () => {
    setOpen(true);
    closeMenu(); // Close the menu when opening the modal
  };

  const onCloseModal = () => setOpen(false);

  return (
    <nav className="w-full lg:hidden block h-20 bg-white fixed top-0 z-40">
      <div>
        <Link to="/">
          <img src={logo} className="w-16 fixed top-3 left-5" alt="" />
        </Link>

        <Menu
          customBurgerIcon={<img src={menuIcon} />}
          right
          isOpen={isOpen}
          onStateChange={({ isOpen }) => setIsOpen(isOpen)}
          disableAutoFocus={true}
          onOpen={handleMenuOpen}
          onClose={closeMenu}
        >
          <NavLink to="/home" className="my-10" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about-us" className="my-10" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/properties" className="my-10" onClick={closeMenu}>
            Properties
          </NavLink>
          <NavLink to="/contact-us" className="my-10" onClick={closeMenu}>
            Contacts
          </NavLink>
          <span className="mt-8">
            <div className="divider"></div>
            <p className="text-sm text-center mb-4">
              Have any queries? Please let us know by getting a free consultancy
              with us.
            </p>
            <button
              onClick={onOpenModal}
              className="btn btn-primary ml-4 text-white capitalize"
            >
              <MdMessage className="text-xl mr-2 inline-block" />
              Get Consultancy
            </button>
            <Modal open={open} onClose={onCloseModal} center>
              <h2 className="text-3xl font-semibold">How can we help you?</h2>
              <p className="my-3">
                If you have any queries for us, please do not hesitate to ask.
                Please feel free to contact us using the following form.
              </p>
              <div className="divider"></div>
              <form action="">
                <div className="md:flex md:gap-5">
                  <div className="form-control w-full max-w-lg mx-auto">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Type your name"
                      className="input input-primary input-bordered w-full max-w-lg"
                    />
                  </div>
                  <div className="form-control w-full max-w-lg mx-auto">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Type your email address"
                      className="input input-primary input-bordered w-full max-w-lg"
                    />
                  </div>
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text">Your Massage</span>
                  </label>
                  <textarea
                    required
                    className="textarea textarea-primary textarea-bordered h-24"
                    placeholder="Type your massage"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary capitalize mt-5 w-full text-white"
                  value="Send Massage"
                />
              </form>
            </Modal>
          </span>
        </Menu>
      </div>
    </nav>
  );
};

export default MobileNavbar;
