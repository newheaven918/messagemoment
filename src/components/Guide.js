import Image from 'next/image';
import React from 'react';
import img from '/public/home/img.svg';
import Steps from './Steps';

const Guide = () => {
  return (
    <div className="bg-blue px-[15px] pt-[40px] pb-[60px] lg:pt-[70px] lg:pb-[75px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-bold mb-5 lg:mb-0 text-[34px] text-center lg:text-[60px] tracking-[-.5px] px-[30px] lg:tracking-normal sm:max-w-[450px] lg:max-w-[934px] mx-auto text-white">Express yourself freely, anytime, with those you know.</h2>
        <div className="relative  mx-auto pt-[14px] mb-14">
          <Image src={img} alt="Image" className="mx-auto relative z-10" />
          <div className="absolute w-[300px] h-[300px] lg:w-[396px] lg:h-[396px] blur-[50px] -z-0 rounded-full bg-black bg-opacity-20 top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <Steps />
        <p className="max-w-[328px] lg:max-w-[930px] mx-auto text-white font-jetBrain font-medium text-[13px] lg:text-lg pt-10 text-center">Start a chat session by clicking the "Open Chat" button on our site and receive a link. Optionally, make the chat secure by generating a token password.</p>
      </div>
    </div>
  );
};

export default Guide;
