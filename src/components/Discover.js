import DiscoverSlider from './DiscoverSlider';
import DiscoverSlide2 from './DiscoverSlide2';

const Discover = () => {
  return (
    <div className="bg-dark px-[15px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-bold text-[34px] text-center lg:text-[60px] tracking-[-.5px] lg:tracking-normal sm:max-w-[450px] lg:max-w-[934px] mx-auto text-white pt-14 pb-8 lg:pt-[70px] lg:pb-10">Discover more from MessageMoment</h2>
        <DiscoverSlider />
        <p className="text-white text-[26px] text-center mt-10 lg:mt-[60px] mb-10">
          Use MessageMoment on any device via Browser<sup className="text-[60%]">1</sup>
        </p>
        <div className="flex justify-center gap-5 lg:gap-12 pb-10 lg:pb-[58px]">
          <div className="device text-center">
            <svg className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[28px] mx-auto" xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44" fill="none">
              <path d="M24 36H4V8H24M24 0H4C1.78 0 0 1.78 0 4V40C0 41.0609 0.421427 42.0783 1.17157 42.8284C1.92172 43.5786 2.93913 44 4 44H24C25.0609 44 26.0783 43.5786 26.8284 42.8284C27.5786 42.0783 28 41.0609 28 40V4C28 1.78 26.2 0 24 0Z" fill="white" />
            </svg>
            <p className="text-white">Phone</p>
          </div>
          <div className="device text-center">
            <svg className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M8 12H40V32H8M40 36C41.0609 36 42.0783 35.5786 42.8284 34.8284C43.5786 34.0783 44 33.0609 44 32V12C44 9.78 42.2 8 40 8H8C5.78 8 4 9.78 4 12V32C4 33.0609 4.42143 34.0783 5.17157 34.8284C5.92172 35.5786 6.93913 36 8 36H0V40H48V36H40Z" fill="white" />
            </svg>
            <p className="text-white">Desktop</p>
          </div>
          <div className="device text-center">
            <svg className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M38 36H10V12H38M42 8H6C3.78 8 2 9.78 2 12V36C2 37.0609 2.42143 38.0783 3.17157 38.8284C3.92172 39.5786 4.93913 40 6 40H42C43.0609 40 44.0783 39.5786 44.8284 38.8284C45.5786 38.0783 46 37.0609 46 36V12C46 9.78 44.2 8 42 8Z" fill="white" />
            </svg>
            <p className="text-white">Tablet</p>
          </div>
          <div className="device text-center">
            <svg className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M42 34H6V10H42M42 6H6C4.93913 6 3.92172 6.42143 3.17157 7.17157C2.42143 7.92172 2 8.93913 2 10V34C2 35.0609 2.42143 36.0783 3.17157 36.8284C3.92172 37.5786 4.93913 38 6 38H16V42H32V38H42C43.0609 38 44.0783 37.5786 44.8284 36.8284C45.5786 36.0783 46 35.0609 46 34V10C46 8.93913 45.5786 7.92172 44.8284 7.17157C44.0783 6.42143 43.0609 6 42 6Z" fill="white" />
            </svg>
            <p className="text-white">Smart Tv</p>
          </div>
          <div className="device text-center">
            <svg className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M15.94 32L10 38C9.34 38.6 8.46 39 7.5 39C6.57174 39 5.6815 38.6313 5.02513 37.9749C4.36875 37.3185 4 36.4283 4 35.5V35L6 20.24C6.42 15.62 10.28 12 15 12H33C37.72 12 41.58 15.62 42 20.24L44 35V35.5C44 36.4283 43.6312 37.3185 42.9749 37.9749C42.3185 38.6313 41.4283 39 40.5 39C39.54 39 38.66 38.6 38 38L32.06 32H15.94ZM14 16V20H10V22H14V26H16V22H20V20H16V16H14ZM33 16C32.6022 16 32.2206 16.158 31.9393 16.4393C31.658 16.7206 31.5 17.1022 31.5 17.5C31.5 17.8978 31.658 18.2794 31.9393 18.5607C32.2206 18.842 32.6022 19 33 19C33.3978 19 33.7794 18.842 34.0607 18.5607C34.342 18.2794 34.5 17.8978 34.5 17.5C34.5 17.1022 34.342 16.7206 34.0607 16.4393C33.7794 16.158 33.3978 16 33 16ZM29.5 19.5C29.1022 19.5 28.7206 19.658 28.4393 19.9393C28.158 20.2206 28 20.6022 28 21C28 21.3978 28.158 21.7794 28.4393 22.0607C28.7206 22.342 29.1022 22.5 29.5 22.5C29.8978 22.5 30.2794 22.342 30.5607 22.0607C30.842 21.7794 31 21.3978 31 21C31 20.6022 30.842 20.2206 30.5607 19.9393C30.2794 19.658 29.8978 19.5 29.5 19.5ZM36.5 19.5C36.1022 19.5 35.7206 19.658 35.4393 19.9393C35.158 20.2206 35 20.6022 35 21C35 21.3978 35.158 21.7794 35.4393 22.0607C35.7206 22.342 36.1022 22.5 36.5 22.5C36.8978 22.5 37.2794 22.342 37.5607 22.0607C37.842 21.7794 38 21.3978 38 21C38 20.6022 37.842 20.2206 37.5607 19.9393C37.2794 19.658 36.8978 19.5 36.5 19.5ZM33 23C32.6022 23 32.2206 23.158 31.9393 23.4393C31.658 23.7206 31.5 24.1022 31.5 24.5C31.5 24.8978 31.658 25.2794 31.9393 25.5607C32.2206 25.842 32.6022 26 33 26C33.3978 26 33.7794 25.842 34.0607 25.5607C34.342 25.2794 34.5 24.8978 34.5 24.5C34.5 24.1022 34.342 23.7206 34.0607 23.4393C33.7794 23.158 33.3978 23 33 23Z" fill="white" />
            </svg>

            <p className="text-white">Consoles</p>
          </div>
        </div>
        <div className="disclaimer max-w-[1096px] mx-auto pt-5 border-t border-t-white border-opacity-20 pb-9 text-center">
          <p className="text-[11px] text-white lg:text-[13px] font-medium">
            <sup className="text-[60%]">1</sup>Disclaimer: Compatibility may vary across different devices and operating systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
