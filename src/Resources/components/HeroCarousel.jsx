// React swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
// import CSS
import "../CSS/HeroCarousel.css";
// Initialization for ES Users
import { Ripple, initTE } from "tw-elements";
import { useEffect } from "react";

const HeroCarousel = () => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);
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
        <SwiperSlide className="h-screen">
          <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-screen w-full carousel-img-1">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-4xl md:text-6xl xl:text-5xl font-bold line-height-custom mb-12">
                    Residential villa plot in the fast-developing area of Al
                    Bahia at a reasonable price
                  </h1>
                  <a
                    className="group bg-white relative inline-flex items-center overflow-hidden rounded border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black"
                    href="/download"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium transition-all group-hover:me-4">
                      Click Here
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen">
          <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-screen w-full carousel-img-2">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-4xl md:text-6xl xl:text-5xl font-bold line-height-custom mb-12">
                    Best deal to buy townhouse land with a down payment and
                    build a house
                  </h1>
                  <a
                    className="group bg-white relative inline-flex items-center overflow-hidden rounded border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black"
                    href="/download"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium transition-all group-hover:me-4">
                      Click Here
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen">
          <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-screen w-full carousel-img-3">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-4xl md:text-6xl xl:text-5xl font-bold line-height-custom mb-12">
                    Residential plots for sale in Al Bahia in 6 months
                    installment
                  </h1>
                  <a
                    className="group bg-white relative inline-flex items-center overflow-hidden rounded border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black"
                    href="/download"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium transition-all group-hover:me-4">
                      Click Here
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen">
          <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-screen w-full carousel-img-4">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-4xl md:text-6xl xl:text-5xl font-bold line-height-custom mb-12">
                    Hurry up 6 Months payment Plan Residential Plot in Al Bahia
                    Ajman
                  </h1>
                  <a
                    className="group bg-white relative inline-flex items-center overflow-hidden rounded border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black"
                    href="/download"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium transition-all group-hover:me-4">
                      Click Here
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;
