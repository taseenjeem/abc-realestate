import { Link } from "react-router-dom";
import img1 from "../assets/images/01.webp";
import img2 from "../assets/images/02.webp";
import img3 from "../assets/images/03.webp";
import img4 from "../assets/images/04.webp";
import { ImPriceTags, ImArrowRight2 } from "react-icons/im";
import { MdCategory } from "react-icons/md";
import { RiPieChart2Fill } from "react-icons/ri";

const AvailableProperties = () => {
  return (
    <section className="min-h-screen px-4 md:px-0">
      <h1
        className="text-center text-7xl font-semibold mt-32 mb-10 text-gray-800"
        style={{ fontFamily: "Alata" }}
      >
        Available <span className="text-primary">Properties</span>
      </h1>

      <div className="grid lg:grid-cols-2">
        <div className="card card-compact mt-16 max-w-lg mx-auto bg-base-100 border shadow-2xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Best deal to buy townhouse land with a down payment and build a
              house
            </h2>
            <div className="divider"></div>
            <div className="">
              <div>
                <div className="flex justify-around">
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <ImPriceTags className="inline mr-2 relative bottom-[2px]" />
                      price
                    </span>
                    <br />
                    AED 5,30,000
                  </div>
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <MdCategory className="inline mr-2 relative bottom-[2px]" />
                      type
                    </span>
                    <br />
                    Residential Villa plot (G+2)
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <RiPieChart2Fill className="inline mr-2 relative bottom-[2px]" />
                      Area
                    </span>
                    <br />
                    284 sm / 3045.60 sqft / 4.23 Katha
                  </p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-10">
              <button className="btn btn-primary text-white w-full capitalize">
                Learn More <ImArrowRight2 className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact mt-16 max-w-lg mx-auto bg-base-100 border shadow-2xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Residential villa plot in the fast-developing area of Al Bahia at
              a reasonable price
            </h2>
            <div className="divider"></div>
            <div className="">
              <div>
                <div className="flex justify-around">
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <ImPriceTags className="inline mr-2 relative bottom-[2px]" />
                      price
                    </span>
                    <br />
                    AED 5,00,000
                  </div>
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <MdCategory className="inline mr-2 relative bottom-[2px]" />
                      type
                    </span>
                    <br />
                    Residential Villa plot (G+2)
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <RiPieChart2Fill className="inline mr-2 relative bottom-[2px]" />
                      Area
                    </span>
                    <br />
                    264 sm / 2836.80 sqft / 4.04 Katha
                  </p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-10">
              <button className="btn btn-primary text-white w-full capitalize">
                Learn More <ImArrowRight2 className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact mt-16 max-w-lg mx-auto bg-base-100 border shadow-2xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Hurry up 6 Months payment plan residential plot in Al Bahia Ajman
            </h2>
            <div className="divider"></div>
            <div className="">
              <div>
                <div className="flex justify-around">
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <ImPriceTags className="inline mr-2 relative bottom-[2px]" />
                      price
                    </span>
                    <br />
                    AED 5,20,000
                  </div>
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <MdCategory className="inline mr-2 relative bottom-[2px]" />
                      type
                    </span>
                    <br />
                    Residential Villa plot (G+2)
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <RiPieChart2Fill className="inline mr-2 relative bottom-[2px]" />
                      Area
                    </span>
                    <br />
                    274 sm / 2937.60.80 sqft / 4.08 Katha
                  </p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-10">
              <button className="btn btn-primary text-white w-full capitalize">
                Learn More <ImArrowRight2 className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact mt-16 max-w-lg mx-auto bg-base-100 border shadow-2xl">
          <figure>
            <img src={img4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Residential plots for sale in Al Bahia in 6 months installment
            </h2>
            <div className="divider"></div>
            <div className="">
              <div>
                <div className="flex justify-around">
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <ImPriceTags className="inline mr-2 relative bottom-[2px]" />
                      price
                    </span>
                    <br />
                    AED 3,00,000
                  </div>
                  <div className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <MdCategory className="inline mr-2 relative bottom-[2px]" />
                      type
                    </span>
                    <br />
                    Residential Villa plot (G+2)
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-center">
                    <span
                      className="text-xl uppercase font-semibold"
                      style={{ fontFamily: "Alata" }}
                    >
                      <RiPieChart2Fill className="inline mr-2 relative bottom-[2px]" />
                      Area
                    </span>
                    <br />
                    160 sm / 1713.16 sqft / 2.38 Katha
                  </p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-10">
              <button className="btn btn-primary text-white w-full capitalize">
                Learn More <ImArrowRight2 className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-actions justify-center mt-20">
        <Link
          to="/properties"
          className="btn btn-primary text-white capitalize"
        >
          View all properties <ImArrowRight2 className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default AvailableProperties;
