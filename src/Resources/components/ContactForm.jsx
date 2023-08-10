const ContactForm = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="hero min-h-screen"
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
        <form className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 border">
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
                className="textarea textarea-primary h-32"
                placeholder="Share your thoughts"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Sens Massage"
              className="btn btn-primary capitalize text-white mt-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
