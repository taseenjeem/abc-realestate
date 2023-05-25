import { ImArrowRight2 } from "react-icons/im";
import bg from "../assets/images/service-min.jpg";
import { Link } from "react-router-dom";

const AboutService = () => {
  return (
    <section
      className="w-full min-h-screen bg-no-repeat bg-cover px-4 pb-16 md:pb-0 lg:px-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid lg:grid-cols-2 mx-auto max-w-7xl">
        <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto">
          <h1
            className="md:text-7xl text-5xl font-semibold mt-32 mb-10 text-white"
            style={{ fontFamily: "Alata" }}
          >
            About Our Services
          </h1>
          <p className="text-white lg:leading-relaxed ">
            At ABC Real Estate LLC, we understand that buying or selling a
            property can be a daunting task, and that’s why we offer a range of
            services to make the process as smooth as possible. Our team of
            experienced agents will provide personalized support and guidance
            throughout the transaction, from property search to finalizing the
            deal. We also offer property management services, including
            maintenance, tenant screening, and rent collection, to ensure that
            your investment is well taken care of. Our goal is to make your real
            estate experience hassle-free and enjoyable. We believe that our
            clients’ success is our success, and we are dedicated to ensuring
            that they achieve their real estate goals with ease and convenience.
          </p>
          <div className="card-actions mt-5">
            <Link
              to="/contact-us"
              className="btn btn-neutral text-white capitalize"
            >
              Get Consultancy <ImArrowRight2 className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
