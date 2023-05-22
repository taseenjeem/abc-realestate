import img1 from "../assets/images/01.webp";
import img2 from "../assets/images/02.webp";
import img3 from "../assets/images/03.webp";
import img4 from "../assets/images/04.webp";
import { FaRegPlayCircle } from "react-icons/fa";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const GuideTour = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);

  return (
    <section className="min-h-screen px-4 md:px-0">
      <h1
        className="text-center text-7xl font-semibold mt-32 mb-10 text-gray-800"
        style={{ fontFamily: "Alata" }}
      >
        Guided <span className="text-primary">Tour</span>
      </h1>

      <div className="grid lg:grid-cols-2">
        <div className="card max-w-lg mx-auto mt-16 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Buy townhouse land with a down payment and build a house
            </h2>
            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setOpen1(true)}
                className="btn btn-primary capitalize w-full text-white"
              >
                Watch Video <FaRegPlayCircle className="text-xl ml-2" />
              </button>
            </div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen1}
                videoId="FnZ2oDkLbLE"
                onClose={() => setOpen1(false)}
              />
            </React.Fragment>
          </div>
        </div>

        <div className="card max-w-lg mx-auto mt-16 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Residential villa plot in the fat-developing area of Al Bahia at a
              reasonable price
            </h2>
            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setOpen2(true)}
                className="btn btn-primary capitalize w-full text-white"
              >
                Watch Video <FaRegPlayCircle className="text-xl ml-2" />
              </button>
            </div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen2}
                videoId="FnZ2oDkLbLE"
                onClose={() => setOpen2(false)}
              />
            </React.Fragment>
          </div>
        </div>

        <div className="card max-w-lg mx-auto mt-16 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Hurry up 6 Months payment plan residential plot in Al Bahia Ajman
            </h2>
            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setOpen3(true)}
                className="btn btn-primary capitalize w-full text-white"
              >
                Watch Video <FaRegPlayCircle className="text-xl ml-2" />
              </button>
            </div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen3}
                videoId="FnZ2oDkLbLE"
                onClose={() => setOpen3(false)}
              />
            </React.Fragment>
          </div>
        </div>

        <div className="card max-w-lg mx-auto mt-16 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={img4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2
              className="text-2xl font-semibold text-gray-800 text-center"
              style={{ fontFamily: "Alata" }}
            >
              Residential plots for sale in Al Bahia in 6 months installment
            </h2>
            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setOpen4(true)}
                className="btn btn-primary capitalize w-full text-white"
              >
                Watch Video <FaRegPlayCircle className="text-xl ml-2" />
              </button>
            </div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen4}
                videoId="FnZ2oDkLbLE"
                onClose={() => setOpen4(false)}
              />
            </React.Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideTour;
