import { ImPriceTags } from "react-icons/im";
import property1 from "../../assets/images/01.webp";
import { MdCategory } from "react-icons/md";
import { RiPieChart2Fill } from "react-icons/ri";

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
    </section>
  );
};

export default Property1;
