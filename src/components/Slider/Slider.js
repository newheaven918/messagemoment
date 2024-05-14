'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import bg1 from '/public/about/dedicated1.svg';
import bg2 from '/public/about/dedicated2.svg';
import bg3 from '/public/about/dedicated3.svg';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import './style.css';

const Slider = () => {
  return (
    <>
      {/* <Swiper initialSlide={1} loop={true} className="mySwiper flex items-center">
        <SwiperSlide className="flex justify-start items-start text-center">
          <Image src={bg1} className="h-[200px] object-cover w-full rounded-[20px] " alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <Image src={bg2} className="object-cover w-[300px] max-w-none h-[200px]  rounded-[20px] " alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-end items-end text-center">
          <Image src={bg3} className="object-cover w-full h-[200px]  rounded-[20px] " alt="" />
        </SwiperSlide>
      </Swiper> */}
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        breakpoints={{
          375: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 2
          }
        }}
        spaceBetween={10}
        initialSlide={1}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper w-full flex justify-between items-center lg:hidden about-slider"
      >
        <SwiperSlide className="flex justify-end items-end text-center -ml-[26px] sm:-ml-11 fst">
          <Image src={bg1} className="object-cover w-[240px] h-[170px] sm:h-[270px] rounded-[20px] " alt="Image" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center min-w-[80%] snd">
          <Image src={bg2} className="object-cover w-[540px] h-[170px] sm:h-[270px] rounded-[20px] " alt="Image" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center trd">
          <Image src={bg3} className="object-cover w-[240px] h-[170px] sm:h-[270px] rounded-[20px] transform -scale-x-100" alt="Image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
