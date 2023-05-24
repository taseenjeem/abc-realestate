import { ImPriceTags } from "react-icons/im";
import property1 from "../../assets/images/01.webp";
import { MdCategory } from "react-icons/md";
import { RiPieChart2Fill, RiCheckboxCircleFill } from "react-icons/ri";

const Property1 = () => {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${property1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-white">
          <div className="max-w-3xl p-7 bg-transparent backdrop-blur-3xl rounded shadow-lg">
            <h1
              className="text-2xl mb-2 font-bold"
              style={{ fontFamily: "Alata" }}
            >
              Property Information
            </h1>
            <p className="">
              Best deal to buy townhouse land with a down payment and build a
              house
            </p>
            <div className="divider"></div>
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
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-0 my-10">
        <h1
          className="text-center lg:text-7xl text-5xl font-semibold mt-20 mb-20 text-gray-800"
          style={{ fontFamily: "Alata" }}
        >
          Best <span className="text-primary">Deal</span>
        </h1>

        <div className="grid lg:grid-cols-3 lg:gap-10 gap-7">
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Buy with a down payment
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Build your dream house
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              6 Months installments
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Zero transfer fee
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Commission zero
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Asphalt road
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Electricity and water are available
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Ready for construction
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              This land is located near emirates road and al alia ajman
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              5-minute drive only to china mall
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              2-minute drive to Shaikh Mohammed Bin Zayed road
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property1;
