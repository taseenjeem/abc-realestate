import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
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
            e.target.reset();
          } else {
            Swal.fire({
              icon: "error",
              title: "Massage sent unsuccessfully",
              text: "We are very sorry for your trouble, something went wrong. Please try again letter",
              confirmButtonColor: "#01a6ea",
            });
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
          }
        }
      );
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="hero min-h-screen mb-24 md:mb-0"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold md:ml-10">
            What are your thoughts?
          </h1>
          <p className="py-6 leading-relaxed md:ml-10">
            At ABC Real Estate LLC, we value your thoughts, questions, and
            feedback. We believe in building strong relationships with our
            customers and community. Whether you have a query about our
            products, need assistance with an order, or simply want to share
            your insights, we&apos;re here to listen and help. your satisfaction
            is our priority. We&apos;re committed to providing excellent service
            and making your experience with us exceptional. Thank you for
            choosing ABC Real Estate LLC. We look forward to hearing from you!
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 border"
        >
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold mb-4">
              What&apos;s on your mind?
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                required
                name="user_name"
                placeholder="Your Full Name"
                className="input input-primary input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                required
                name="user_email"
                placeholder="Enter your email"
                className="input input-primary input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Massage</span>
              </label>
              <textarea
                required
                name="message"
                className="textarea textarea-primary h-32"
                placeholder="Share your thoughts"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
