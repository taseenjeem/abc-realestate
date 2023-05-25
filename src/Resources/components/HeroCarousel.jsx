// React swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
// import CSS
import "../CSS/HeroCarousel.css";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
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
            <div className="hero-content text-center text-white">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="max-w-6xl"
              >
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Residential villa plot in the fast-developing area of Al Bahia
                  at a reasonable price.
                </p>
                <Link
                  to="/properties-residential-villa-plot-in-the-fast-developing-area-of-al-bahia-at-a-reasonable-price"
                  className="btn btn-primary capitalize text-white"
                >
                  Learn More <ImArrowRight2 className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen carousel-img-2 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="max-w-6xl"
              >
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Residential plots for sale in Al Bahia in 6 months installment
                </p>
                <Link
                  to="/properties-residential-plots-for-sale-in-al-bahia-in-6-months-installment"
                  className="btn btn-primary capitalize text-white"
                >
                  Learn More <ImArrowRight2 className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen carousel-img-3 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="max-w-6xl"
              >
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Best deal to buy townhouse land with a down payment and build
                  a house
                </p>
                <Link
                  to="/properties-buy-townhouse-land-with-a-down-payment-and-build-a-house"
                  className="btn btn-primary capitalize text-white"
                >
                  Learn More <ImArrowRight2 className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen carousel-img-4 bg-no-repeat bg-cover bg-center">
          <div className="hero min-h-screen">
            <div className="hero-overlay-custom bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="max-w-6xl"
              >
                <p className="mb-5 lg:text-5xl text-3xl font-semibold lg:leading-normal">
                  Hurry up 6 Months payment Plan Residential Plot in Al Bahia
                  Ajman
                </p>
                <Link
                  to="/properties-hurry-up-6-months-payment-plan-residential-plot-in-al-bahia-ajman"
                  className="btn btn-primary capitalize text-white"
                >
                  Learn More <ImArrowRight2 className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;
