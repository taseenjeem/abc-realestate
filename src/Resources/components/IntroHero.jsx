import { Link } from "react-router-dom";
import image from "../assets/images/10.webp";
import { ImArrowRight2 } from "react-icons/im";

const IntroHero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="md:max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1
            className="md:text-4xl text-2xl mt-6 md:mt-0 font-bold md:leading-normal"
            style={{ fontFamily: "Alata" }}
          >
            Residential and Commercial Lands for sale in Al Bahia project,
            Ajman, UAE
          </h1>
          <p className="py-6 lg:leading-loose">
            ABC Real Estate Company is pleased to present this property to the
            Ajman real estate market. The lands are located on Sheikh Mohammed
            bin Rashid Al Maktoum Street directly leading to the Ajman China
            Mall – and leading to Sheikh Mohammed bin Zayed Street. Residential
            plot areas start from 160m² up to 540 m². The project consists of 46
            commercial land – 844 residential land in addition to services.
          </p>
          <Link
            to="/properties"
            className="btn btn-primary text-white capitalize"
          >
            View All Properties <ImArrowRight2 className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;
