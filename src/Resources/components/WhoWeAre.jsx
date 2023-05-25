import bg from "../assets/images/team.jpg";

const WhoWeAre = () => {
  return (
    <section>
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed px-4 lg:px-0 pt-28"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-7xl font-semibold mb-10 text-gray-800"
          style={{ fontFamily: "Alata" }}
        >
          <span className="text-primary">Who</span> We Are
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-6xl mx-auto bg-transparent backdrop-blur-3xl p-5 rounded"
        >
          <p className="text-center lg:leading-relaxed">
            ABC Real Estate LLC is a reputable real estate company in Ajman,
            UAE. We specialize in buying, selling, and renting commercial and
            residential properties such as plots, villas, and apartments. Our
            team is comprised of experienced professionals who are dedicated to
            providing world-class services to our clients. With our extensive
            knowledge of the real estate market in Ajman, we are committed to
            ensuring that our clients make informed decisions when it comes to
            buying, selling, or renting properties. With years of experience in
            the real estate industry, we have become a trusted name for our
            unparalleled service, expertise, and commitment to our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
