import { ImPriceTags } from "react-icons/im";
import property1 from "../../assets/images/02.webp";
import { MdCategory } from "react-icons/md";
import { RiPieChart2Fill, RiCheckboxCircleFill } from "react-icons/ri";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import img1 from "../../assets/images/Property2/02.webp";
import img2 from "../../assets/images/Property2/12.webp";
import img3 from "../../assets/images/Property2/13.webp";
import img4 from "../../assets/images/Property2/14.webp";
import img5 from "../../assets/images/Property2/15.webp";
import img6 from "../../assets/images/Property2/16.webp";
import { FaRegPlayCircle } from "react-icons/fa";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const images = [
  {
    original: `${img1}`,
    thumbnail: `${img1}`,
  },
  {
    original: `${img2}`,
    thumbnail: `${img2}`,
  },
  {
    original: `${img3}`,
    thumbnail: `${img3}`,
  },
  {
    original: `${img4}`,
    thumbnail: `${img4}`,
  },
  {
    original: `${img5}`,
    thumbnail: `${img5}`,
  },
  {
    original: `${img6}`,
    thumbnail: `${img6}`,
  },
];

const Property2 = () => {
  const [isOpen, setOpen] = useState(false);

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
              Residential villa plot in the fast-developing area of Al Bahia at
              a reasonable price
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
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-0 my-10">
        <h1
          className="text-center lg:text-7xl text-5xl font-semibold mt-20 mb-14 text-gray-800"
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

      <div className="mx-auto max-w-7xl px-4 lg:px-0 mb-40 mt-28">
        <h1
          className="text-center lg:text-7xl text-5xl font-semibold mb-6 text-gray-800"
          style={{ fontFamily: "Alata" }}
        >
          In 6 mos. <span className="text-primary">Payment Plan</span>
        </h1>
        <h2
          className="text-center text-2xl font-semibold mb-11"
          style={{ fontFamily: "Alata" }}
        >
          No transfer fee
        </h2>
        <div className="grid lg:grid-cols-3 lg:gap-10 gap-7">
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              Downpayment: AED 1,00,000
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              60 days from DP: AED 75,000
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              90 days . . . AED 75,000
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              120 days . . . AED 75,000
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              150 days . . . AED 75,000
            </p>
          </div>
          <div className="bg-primary border rounded shadow-lg mx-auto w-full p-4">
            <p className="text-lg text-white w-full">
              <RiCheckboxCircleFill className="inline text-white text-2xl relative bottom-[2px] mr-2" />{" "}
              180 days . . . AED 1,00,000
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-center lg:text-7xl text-5xl font-semibold mt-20 mb-16 text-gray-800"
          style={{ fontFamily: "Alata" }}
        >
          Image <span className="text-primary">Gallery</span>
        </h2>

        <div className="px-4 lg:px-0">
          <ImageGallery items={images} />
        </div>
      </div>

      <div className="hero my-24">
        <div className="hero-content gap-10 flex-col lg:flex-row">
          <img src={property1} className="lg:max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold" style={{ fontFamily: "Alata" }}>
              Watch Video!
            </h1>
            <p className="py-6">
              Residential villa plot in the fast-developing area of Al Bahia at
              a reasonable price
            </p>
            <button
              onClick={() => setOpen(true)}
              className="btn btn-primary text-white capitalize"
            >
              Play Video <FaRegPlayCircle className="text-xl ml-2" />
            </button>
          </div>
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="FnZ2oDkLbLE"
              onClose={() => setOpen(false)}
            />
          </React.Fragment>
        </div>
      </div>
    </section>
  );
};

export default Property2;
