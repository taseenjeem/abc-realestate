import banner from "../assets/images/contact-bg.jpg";

const ContactBanner = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-3xl">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-5 lg:text-7xl text-5xl font-bold capitalize"
            style={{ fontFamily: "Alata" }}
          >
            How can we help you?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-5 text-lg"
          >
            If you have any queries for us, please do not hesitate to ask.
            Please feel free to contact us using the following procedures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
