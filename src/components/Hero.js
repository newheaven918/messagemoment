'use client';
import LinkGenerate from './LinkGenerate';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-90% lg:to-white to-90% border-t border-black border-opacity-5 pt-[30px] px-[15px] lg:mb-[50px] relative">
      <div className={`bg-[url('/home/hero-mobile.svg')] lg:bg-[url('/home/hero.svg')] hero-container relative max-w-[1320px] mx-auto overflow-hidden pt-[56px] lg:pt-[240px] bg-cover rounded-[20px_20px_0_0] lg:rounded-[20px] bg-center pb-[90px] sm:pb-[188px]`}>
        <div className="overlay bg-black bg-opacity-10 absolute inset-0"></div>
        <div className="hero-des text-center relative">
          <h1 className="text-[50px] lg:text-[80px] text-white -tracking-[1px] leading-none font-bold mb-[10px] lg:mb-5 px-6 max-w-[647px] mx-auto max-lg:text-[50px]">The real meaning to personal.</h1>
          <p className="font-medium px-2 font-jetBrain max-w-[562px] mx-auto text-[15px] lg:text-xl mb-14 text-white">A reliable and trustworthy platform for discreet conversations between known parties.</p>
        </div>
      </div>
      <LinkGenerate />
    </div>
  );
};

export default Hero;
