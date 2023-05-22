// React swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
// import CSS
import "../CSS/HeroCarousel.css";
// Initialization for ES Users

const HeroCarousel = () => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-screen carousel-img-1 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-6xl">
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Residential villa plot in the fast-developing area of Al Bahia
                  at a reasonable price.
                </p>
                <button className="btn btn-primary capitalize text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen carousel-img-2 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-6xl">
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Best deal to buy townhouse land with a down payment and build
                  a house
                </p>
                <button className="btn btn-primary capitalize text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen carousel-img-3 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-6xl">
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Residential plots for sale in Al Bahia in 6 months installment
                </p>
                <button className="btn btn-primary capitalize text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen carousel-img-4 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-6xl">
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Hurry up 6 Months payment Plan Residential Plot in Al Bahia
                  Ajman
                </p>
                <button className="btn btn-primary capitalize text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;
