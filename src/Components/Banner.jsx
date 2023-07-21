import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SearchBar from "./SearchBar";
import image1 from "../../public/image/1.jpg";
import image2 from "../../public/image/2.jpg";
import image3 from "../../public/image/3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div>
        <SearchBar></SearchBar>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
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
              <div className="relative">
                <img src={image1} alt="" />
                <div className="absolute top-52 left-80">
                  <h1 className="text-white font-bold text-4xl">
                    WELCOME TO EDUCATION{" "}
                    <span className="text-orange-500">MASTER</span>
                  </h1>
                  <p className="text-white font-medium pt-3 text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority <br /> have suffered alteration
                    in some form
                  </p>
                  <div className="flex justify-center items-center gap-24 pt-5">
                    <Link to="/colleges">
                      <button className="text-white border  hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-in-out  bg-[#f36b3b] border-[#f36b3b] px-10 py-3 rounded">
                        All College
                      </button>
                    </Link>
                    <button className="text-white border px-10 py-3 rounded hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={image2} alt="" />
                <div className="absolute top-52 left-80">
                  <h1 className="text-white font-bold text-4xl text-center">
                  ADMISSION OPEN {" "}
                    <span className="text-orange-500">2023</span>
                  </h1>
                  <p className="text-white font-medium pt-3 text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority <br /> have suffered alteration
                    in some form
                  </p>
                  <div className="flex justify-center items-center gap-24 pt-5">
                    <Link to="/admission">
                      <button className="text-white border hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-in-out  bg-[#f36b3b] border-[#f36b3b] px-10 py-3 rounded">
                        Admission
                      </button>
                    </Link>
                    <button className="text-white border px-10 py-3 rounded hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={image3} alt="" />
                <div className="absolute top-52 left-80">
                  <h1 className="text-white font-bold text-4xl text-center">
                  WELCOME TO  {" "}
                    <span className="text-orange-500">UNIVERSITY</span>
                  </h1>
                  <p className="text-white font-medium pt-3 text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority <br /> have suffered alteration
                    in some form
                  </p>
                  <div className="flex justify-center items-center gap-24 pt-5">
                    <Link to="/colleges">
                      <button className="text-white border hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-in-out  bg-[#f36b3b] border-[#f36b3b] px-10 py-3 rounded">
                        All College
                      </button>
                    </Link>
                    <button className="text-white border px-10 py-3 rounded hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
