import { ImArrowRight2 } from "react-icons/im";

const OurServices = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 my-20">
      <div className="w-full bg-white border rounded shadow-2xl p-10">
        <h1
          className="text-center lg:text-7xl text-5xl font-semibold mb-10 text-gray-800"
          style={{ fontFamily: "Alata" }}
        >
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="lg:leading-relaxed text-center">
          At ABC Real Estate LLC, we understand that buying or selling a
          property can be a daunting task, and that’s why we offer a range of
          services to make the process as smooth as possible. Our team of
          experienced agents will provide personalized support and guidance
          throughout the transaction, from property search to finalizing the
          deal. We also offer property management services, including
          maintenance, tenant screening, and rent collection, to ensure that
          your investment is well taken care of. Our goal is to make your real
          estate experience hassle-free and enjoyable. We believe that our
          clients’ success is our success, and we are dedicated to ensuring that
          they achieve their real estate goals with ease and convenience.
        </p>
        <div className="card-actions justify-center mt-10">
          <button className="btn btn-primary text-white capitalize">
            Get Consultancy <ImArrowRight2 className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
