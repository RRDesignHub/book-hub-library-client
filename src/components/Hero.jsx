import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide_1 from "./../assets/slide_1.png";
import slide_2 from "./../assets/slide_2.png";
import slide_3 from "./../assets/slide_3.png";
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
              src={slide_1}
              className="h-full max-sm:hidden lg:w-full lg:h-[400px] object-cover"
              alt="Slider Image"
            />
            <img
              src={mobileBg}
              className="h-[500px] w-full md:hidden object-cover"
              alt="Slider Image"
            />

            
            <div className="absolute top-[280px] left-1/2 -translate-x-1/2 md:top-1/2 md:left-[220px] lg:top-1/2 lg:left-[270px] transform md:-translate-y-1/2 lg:-translate-y-1/2  max-sm:text-[#334155]">
              <h1 className="text-4xl max-sm:text-center md:text-6xl font-bold mb-4">
                Book Hub
              </h1>
              <p className="text-lg max-sm:hidden text-[#077161] md:text-xl mb-6">
                Discover a world of knowledge with just a click!
              </p>
              <Link
                to="/category/Science"
                className="btn max-sm:mt-10  max-sm:bg-[#334155] md:bg-[#035045d3] text-[#f5fafa] hover:bg-[#035045d3] px-6 py-3 rounded-lg"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide >
          <div className="w-full  relative">
            <img
              src={slide_2}
              className="h-full max-sm:hidden lg:w-full lg:h-[400px] object-cover"
            />
            
            <img
              src={mobileBg}
              className="h-[500px] w-full md:hidden object-cover"
              alt="Slider Image"
            />
             <div className="absolute top-[280px] left-1/2 -translate-x-1/2 md:top-10 md:left-[200px] lg:left-[270px] transform max-sm:text-[#334155]  text-[#035045]">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Book Hub
              </h1>
              <p className="text-lg max-sm:hidden text-[#077161] md:text-xl mb-6">
              Where Books Meet Efficiency!
              </p>
              <Link
                to="/explore"
                className="btn mt-10 bg-white max-sm:bg-[#334155] max-sm:text-white border border-[#035045] text-[#035045] hover:bg-[#035045] hover:text-white px-6 py-3 rounded-lg"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide >
          <div className="w-full  relative">
            <img
              src={slide_3}
              className="h-full max-sm:hidden lg:w-full lg:h-[400px] object-cover"
            />
            <img
              src={mobileBg}
              className="h-[500px] w-full md:hidden object-cover"
              alt="Slider Image"
            />
            <div className="absolute top-[280px] left-1/2 -translate-x-1/2 md:top-16 md:left-[250px] lg:top-1/2 lg:left-[270px] transform lg:-translate-y-1/2 max-sm:text-[#334155] text-[#035045]">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Book Hub
              </h1>
              <p className="text-lg max-sm:hidden text-[#077161] md:text-xl mb-6">
              Effortless Library Management, One Click Away...
              </p>
              <Link
                to="/explore"
                className="btn bg-white mt-10 max-sm:bg-[#334155] max-sm:text-white border border-[#035045] text-[#035045] hover:bg-[#035045] hover:text-white px-6 py-3 rounded-lg"
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
