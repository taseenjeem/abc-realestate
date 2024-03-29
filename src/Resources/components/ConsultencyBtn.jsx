import { useRef, useState } from "react";
import { MdMessage } from "react-icons/md";
import Modal from "react-responsive-modal";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ConsultencyBtn = () => {
  // State managements of consultancy modal
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // loading button of sent massage
  const [showLoading, setShowLoading] = useState(false);

  // EmailJS Configs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowLoading(true);
    emailjs
      .sendForm(
        "service_9y5jufz",
        "template_pyx5pji",
        form.current,
        "IgolSrE-eHirGqmtH"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              icon: "success",
              title: "Massage Sent Successfully",
              text: "We have received your message. Your feedback is extremely valuable to us. We will reach out to you as quickly as possible.",
              confirmButtonColor: "#01a6ea",
            });
            setShowLoading(false);
            onCloseModal();
            e.target.reset();
          } else {
            Swal.fire({
              icon: "error",
              title: "Massage sent unsuccessfully",
              text: "We are very sorry for your trouble, something went wrong. Please try again letter",
              confirmButtonColor: "#01a6ea",
            });
            onCloseModal();
          }
        },
        (error) => {
          if (error) {
            Swal.fire({
              icon: "error",
              title: "Massage sent unsuccessfully",
              text: "We are very sorry for your trouble, something went wrong. Please try again letter",
              confirmButtonColor: "#01a6ea",
            });
            onCloseModal();
          }
        }
      );
  };

  return (
    <>
      <button
        onClick={onOpenModal}
        className="btn btn-primary ml-4 text-white capitalize"
      >
        <MdMessage className="text-xl mr-2" />
        Get Consultancy
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="text-3xl font-semibold">How can we help you?</h2>
        <p className="my-3">
          If you have any queries for us, please do not hesitate to ask. Please
          feel free to contact us using the following form.
        </p>
        <div className="divider"></div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="md:flex md:gap-5">
            <div className="form-control w-full max-w-lg mx-auto">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="user_name"
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
                name="user_email"
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
              name="message"
              className="textarea textarea-primary textarea-bordered h-24"
              placeholder="Type your massage"
            ></textarea>
          </div>

          {!showLoading ? (
            <input
              type="submit"
              className="btn btn-primary capitalize mt-5 w-full text-white"
              value="Send Massage"
            />
          ) : (
            <input
              type="submit"
              className="btn btn-primary capitalize btn-disabled mt-5 w-full text-white"
              value="Sending Massage..."
            />
          )}
        </form>
      </Modal>
    </>
  );
};

export default ConsultencyBtn;
