import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Slider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 20,
    },
  });

  const slides = [
    { src: "/Landing/image-4.png", title: "Secure" },
    { src: "/Landing/image-5.png", title: "Private" },
    { src: "/Landing/image-6.png", title: "Browser Based" },
  ];

  return (
    <div className="flex gap-[54px]">
      <Image
        src="/Landing/left.png"
        onClick={() => slider.current?.prev()}
        className="w-[20px] h-[35.38px] my-auto cursor-pointer"
        width={35}
        height={20}
        alt="image"
      />
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide w-[260px] h-[242px] pt-[71px] space-y-[27px] pb-[30px] bg-white rounded-[20px] cursor-pointer"
          >
            <Image
              src={slide.src}
              className="w-[80px] h-[80px] mx-auto"
              alt={slide.title}
              width={80}
              height={80}
            />
            <div className="text-[26px] text-[#363C4F] font-bold text-center font-dm">
              {slide.title}
            </div>
          </div>
        ))}
        <div className="relative keen-slider__slide w-[260px] h-[242px] pt-[71px] pb-[30px] bg-white rounded-[20px] cursor-pointer">
          <div className="absolute right-[10px] top-[10px] flex gap-[5.42px]">
            <Image
              src="/Landing/icon+.png"
              alt="image"
              className="w-[12.58px] h-[11.78px] my-auto"
              width={12}
              height={11}
            />
            <Image
              src="/Landing/icon-rec.png"
              alt="image"
              className="w-[50px] h-[50px]"
              width={50}
              height={50}
            />
          </div>
          <div className="space-y-[27px]">
            <Image
              src="/Landing/image-7.png"
              className="w-[80px] h-[80px] mx-auto"
              alt="image"
              width={80}
              height={80}
            />
            <div className="text-[26px] text-[#363C4F] font-bold text-center font-dm">
              Project Mode
            </div>
          </div>
        </div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide w-[260px] h-[242px] pt-[71px] space-y-[27px] pb-[30px] bg-white rounded-[20px] cursor-pointer"
          >
            <Image
              src={slide.src}
              className="w-[80px] h-[80px] mx-auto"
              alt={slide.title}
              width={80}
              height={80}
            />
            <div className="text-[26px] text-[#363C4F] font-bold text-center font-dm">
              {slide.title}
            </div>
          </div>
        ))}
        <div className="relative keen-slider__slide w-[260px] h-[242px] pt-[71px] pb-[30px] bg-white rounded-[20px] cursor-pointer">
          <div className="absolute right-[10px] top-[10px] flex gap-[5.42px]">
            <Image
              src="/Landing/icon+.png"
              alt="image"
              className="w-[12.58px] h-[11.78px] my-auto"
              width={12}
              height={11}
            />
            <Image
              src="/Landing/icon-rec.png"
              alt="image"
              className="w-[50px] h-[50px]"
              width={50}
              height={50}
            />
          </div>
          <div className="space-y-[27px]">
            <Image
              src="/Landing/image-7.png"
              className="w-[80px] h-[80px] mx-auto"
              alt="image"
              width={80}
              height={80}
            />
            <div className="text-[26px] text-[#363C4F] font-bold text-center font-dm">
              Project Mode
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Landing/right.png"
        onClick={() => slider.current?.next()}
        className="w-[20px] h-[35.38px] my-auto cursor-pointer"
        width={35}
        height={20}
        alt="image"
      />
    </div>
  );
}
