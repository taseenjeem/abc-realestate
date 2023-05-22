// React swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// Carousel images
import img1 from "../assets/images/UAE (1).jpg";
import img2 from "../assets/images/UAE (2).jpg";
import img3 from "../assets/images/UAE (3).jpg";
import img4 from "../assets/images/UAE (4).jpg";

const HeroCarousel = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="h-screen">
          <div>
            <img
              src={img1}
              className="h-full bg-cover bg-center absolute object-cover w-full"
              alt="carousel"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen">
          <div>
            <img
              src={img2}
              className="h-full bg-cover bg-center absolute object-cover w-full"
              alt="carousel"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen">
          <div>
            <img
              src={img3}
              className="h-full bg-cover bg-center absolute object-cover w-full"
              alt="carousel"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen">
          <div>
            <img
              src={img4}
              className="h-full bg-cover bg-center absolute object-cover w-full"
              alt="carousel"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;
