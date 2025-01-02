
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mobileBg from "./../assets/mobile_bg.png";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full relative">
            <img
              src="https://i.ibb.co.com/fFLHCds/Slide-3.png"
              className="h-full max-sm:hidden lg:w-full lg:h-[400px] object-cover"
              alt="Slider Image"
            />
            <img
              src={mobileBg}
              className="h-[500px] w-full md:hidden object-cover"
              alt="Slider Image"
            />

            <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 md:top-1/2  md:-translate-y-1/2 text-center md:bg-gray-950 md:bg-opacity-40 md:p-6 md:rounded-xl">
              <h1 className="text-4xl text-blue-950 md:text-white max-sm:text-center md:text-6xl font-bold mb-1">
                Book Hub
              </h1>
              <p className="text-lg max-sm:hidden text-blue-50 md:text-xl mb-4">
                Discover a world of knowledge with just a click!
              </p>
              <Link
                to="/category/Science"
                className="btn max-sm:mt-12  max-sm:bg-[#334155] md:bg-blue-100 text-[#5896d3] hover:bg-blue-200 px-6 py-3 rounded-lg"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative">
            <img
              src="https://i.ibb.co.com/Q65V4W5/Slide-2.jpg"
              className="h-full max-sm:hidden lg:w-full lg:h-[400px] object-cover"
            />

            <img
              src={mobileBg}
              className="h-[500px] w-full md:hidden object-cover"
              alt="Slider Image"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-950 bg-opacity-50 md:bg-gray-950 md:bg-opacity-40 py-6 px-8 max-sm:w-max md:p-6 rounded-3xl text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Book Hub</h1>
              <p className="text-lg text-blue-50 md:text-xl mb-4">
                Where Books Meet Efficiency!
              </p>
              <Link
                to="/category/Parenting"
                className="btn border bg-blue-100 text-[#5896d3] hover:bg-blue-200 hover:text-[#334155] px-6 py-3 rounded-lg"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="w-full  relative">
            <img
              src="https://i.ibb.co.com/T8Ng0j0/Slide-1.jpg"
              className="h-full max-sm:hidden lg:w-full lg:h-[400px] object-cover"
            />
            <img
              src={mobileBg}
              className="h-[500px] w-full md:hidden object-cover"
              alt="Slider Image"
            />
            <div className="absolute w-max top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:left-1/2 text-white text-center bg-gray-950 bg-opacity-40 px-8 py-6 md:p-6 rounded-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-1">Book Hub</h1>
              <p className="text-lg max-sm:hidden text-blue-50 md:text-xl mb-4">
                Effortless Library Management, One Click Away...
              </p>
              <Link
                to="/category/Fiction"
                className="btn max-sm:mt-8 bg-[#5896d3] text-blue-100 hover:bg-blue-300 px-6 py-3 rounded-lg "
              >
                Explore Now
              </Link>
            </div>
          </div>
        </SwiperSlide> 
      </Swiper>
    </>
  );
};
