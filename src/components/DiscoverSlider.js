'use client';

import { useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import Image from 'next/image';
import discover1 from '/public/home/discover1.svg';
import discover2 from '/public/home/discover2.svg';
import discover3 from '/public/home/discover3.svg';
import discover4 from '/public/home/discover4.svg';

import 'swiper/css';

import './DiscoverSlider.css';

const DiscoverSlider = () => {
  const dis = [
    { id: 1, img: discover1, extraIcon: false, name: 'Secure' },
    { id: 2, img: discover2, extraIcon: false, name: 'Private' },
    { id: 3, img: discover3, extraIcon: false, name: 'Browser Based' },
    { id: 4, img: discover4, extraIcon: true, name: 'Project Mode' }
  ];

  const [index, setIndex] = useState(0);
  const swiperRef = useRef();
  const carousel = useRef();

  function handleSlidePrev() {
    carousel.current.scrollLeft -= 185;
    setIndex(prev => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  }

  function handleSlideNext() {
    carousel.current.scrollLeft += 185;

    setIndex(prev => {
      if (prev === dis.length - 1) {
        return dis.length - 1;
      }
      return prev + 1;
    });
  }

  function handleHoverFunction(i) {
    setIndex(i);
    carousel.current.scrollLeft = i * 185;
  }

  return (
    <div className="relative max-w-[1200px] mx-auto">
      <div className="slider-container max-w-[1200px] mx-auto relative -mr-[15px] -ml-[15px] sm:mx-auto lg:mx-0 sm:hidden">
        <div ref={carousel} className="sliders flex gap-[10px] max-w-[1100px] px-[90px] mx-auto overflow-x-scroll scroll-smooth pb-10">
          {dis.map((item, i) => {
            return (
              <div key={i} className="bg-white rounded-[20px] min-w-[180px] sm:min-w-[250px] pt-[38px] pb-[34px] relative" onMouseEnter={() => handleHoverFunction(i)}>
                <Image src={item.img} className="mx-auto w-16" alt="Image" />
                <p className="text-dark text-[17px] mt-[22px] text-center font-bold">{item.name}</p>
                {item.extraIcon && (
                  <svg className="absolute h-[34px] w-[49px] top-[10px] right-[10px]" xmlns="http://www.w3.org/2000/svg" width="68" height="50" viewBox="0 0 68 50" fill="none">
                    <circle opacity="0.1" cx="43" cy="25" r="25" fill="#4DB5FF" />
                    <path d="M41.2298 9.99227C37.9483 9.99227 35.0328 12.1053 34.0166 15.2242C32.9737 15.4392 31.9886 15.8738 31.1267 16.4991C30.2649 17.1245 29.5461 17.9262 29.0183 18.851C27.3725 21.6955 27.7483 25.2715 29.9531 27.7097C29.2724 29.7518 29.5061 31.9866 30.5932 33.8358C32.2289 36.6904 35.5202 38.1534 38.7409 37.4726C39.4461 38.2685 40.3128 38.9049 41.2834 39.3393C42.2539 39.7738 43.3059 39.9963 44.3692 39.9921C47.6507 39.9921 50.5662 37.8791 51.5824 34.7602C53.6955 34.3232 55.5141 33.0024 56.5706 31.1334C58.2265 28.2889 57.8507 24.7129 55.6462 22.2747V22.2646C55.9825 21.2552 56.0993 20.1856 55.989 19.1274C55.8786 18.0692 55.5435 17.0468 55.0062 16.1285C53.3701 13.2839 50.0784 11.8206 46.8682 12.5013C46.1597 11.7075 45.2907 11.0734 44.3187 10.6408C43.3466 10.2082 42.2937 9.98718 41.2298 9.99227ZM41.2298 11.943L41.2197 11.9531C42.5405 11.9531 43.8105 12.4102 44.8264 13.2537C44.7857 13.2738 44.7043 13.3246 44.6435 13.3552L38.67 16.7991C38.3651 16.9719 38.1822 17.2969 38.1822 17.6526V25.7392L35.612 24.256V17.5713C35.6114 16.0801 36.2028 14.6498 37.2561 13.5944C38.3095 12.539 39.7387 11.9453 41.2298 11.943ZM48.4258 14.2973C49.4157 14.2954 50.3886 14.5548 51.246 15.0494C52.1035 15.544 52.8152 16.2562 53.3092 17.1141C53.9594 18.252 54.2031 19.5828 53.9795 20.873C53.9388 20.8424 53.8579 20.8021 53.8067 20.7715L47.8333 17.3171C47.683 17.2321 47.5133 17.1875 47.3406 17.1875C47.168 17.1875 46.9983 17.2321 46.848 17.3171L39.8482 21.3604V18.3938L45.6288 15.0514C46.4787 14.5587 47.4434 14.2984 48.4258 14.2969V14.2973ZM33.6512 17.3679V24.4692C33.6512 24.8248 33.8341 25.1398 34.139 25.3227L41.1283 29.3559L38.5476 30.849L32.7772 27.5167C31.4876 26.7694 30.5473 25.5409 30.1626 24.1009C29.7779 22.6609 29.9803 21.1271 30.7253 19.8362C31.3825 18.697 32.4176 17.824 33.6512 17.3679ZM47.0409 19.1253L52.8215 22.4576C55.5138 24.012 56.4277 27.4458 54.8734 30.1381L54.8834 30.1482C54.2232 31.2861 53.1869 32.1597 51.9575 32.6068V25.5052C51.9575 25.1495 51.7747 24.8245 51.4698 24.652L44.4703 20.6084L47.0409 19.1253ZM42.7943 21.5738L45.7407 23.2805V26.6837L42.7943 28.3904L39.8482 26.6837V23.2805L42.7943 21.5738ZM47.4268 24.256L49.9971 25.7392V32.4139C49.9971 35.5226 47.4776 38.0421 44.3793 38.0421V38.032C43.0686 38.032 41.7885 37.5749 40.7827 36.7318C40.8234 36.7116 40.9148 36.6605 40.9656 36.6299L46.9391 33.186C47.244 33.0132 47.4369 32.6882 47.4265 32.3325L47.4268 24.256ZM45.7504 28.6244V31.5906L39.9699 34.9229C37.2776 36.4672 33.8438 35.5529 32.2894 32.8707H32.2995C31.6393 31.7429 31.4053 30.402 31.6288 29.1118C31.6695 29.1424 31.7509 29.1827 31.8016 29.2133L37.7751 32.6677C37.9254 32.7526 38.0951 32.7973 38.2677 32.7973C38.4404 32.7973 38.6101 32.7526 38.7604 32.6677L45.7504 28.6244Z" fill="#4DB5FF" />
                    <path d="M0 26.28V23.498H4.888V19H7.722V23.498H12.584V26.28H7.722V30.778H4.888V26.28H0Z" fill="#4DB5FF" />
                  </svg>
                )}
                {i === index && <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 h-1 rounded-full w-10 bg-white"></div>}
              </div>
            );
          })}
        </div>
        {/* <div className="progress relative mx-5 sm:hidden">
          <div className={`line h-1 bg-white rounded-full absolute w-1/4 transition-all`} style={{ left: `${index * 25}%` }}></div>
        </div> */}
        <div className="left absolute top-1/2 transform -translate-y-1/2 left-2 xl:hidden">
          <svg className={`cursor-pointer mb-10 ${index === 0 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="22" height="33" viewBox="0 0 22 33" fill="none">
            <g opacity="0.2" filter="url(#filter0_d_10_3063)">
              <path d="M17.4586 25.588C17.8054 25.9383 18 26.4113 18 26.9043C18 27.3973 17.8054 27.8703 17.4586 28.2206C17.2883 28.3935 17.0852 28.5309 16.8613 28.6246C16.6374 28.7184 16.3971 28.7667 16.1544 28.7667C15.9117 28.7667 15.6714 28.7184 15.4475 28.6246C15.2236 28.5309 15.0205 28.3935 14.8502 28.2206L4.54056 17.701C4.19419 17.3499 4 16.8765 4 16.3833C4 15.8901 4.19419 15.4168 4.54056 15.0657L14.8502 4.54607C15.0205 4.37312 15.2236 4.23578 15.4475 4.14203C15.6714 4.04828 15.9117 4 16.1544 4C16.3971 4 16.6374 4.04828 16.8613 4.14203C17.0852 4.23578 17.2883 4.37312 17.4586 4.54607C17.8054 4.89637 18 5.36941 18 5.86237C18 6.35533 17.8054 6.82837 17.4586 7.17867L9.00359 16.3874L17.4586 25.588Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_10_3063" x="0" y="0" width="22" height="32.7666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_3063" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_3063" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg className={`cursor-pointer mb-10 ${index != 0 ? 'block' : 'hidden'}`} onClick={handleSlidePrev} xmlns="http://www.w3.org/2000/svg" width="22" height="33" viewBox="0 0 22 33" fill="none">
            <g filter="url(#filter0_d_10_3940)">
              <path d="M17.4586 25.588C17.8054 25.9383 18 26.4113 18 26.9043C18 27.3973 17.8054 27.8703 17.4586 28.2206C17.2883 28.3935 17.0852 28.5309 16.8613 28.6246C16.6374 28.7184 16.3971 28.7667 16.1544 28.7667C15.9117 28.7667 15.6714 28.7184 15.4475 28.6246C15.2236 28.5309 15.0205 28.3935 14.8502 28.2206L4.54056 17.701C4.19419 17.3499 4 16.8765 4 16.3833C4 15.8901 4.19419 15.4168 4.54056 15.0657L14.8502 4.54607C15.0205 4.37312 15.2236 4.23578 15.4475 4.14203C15.6714 4.04828 15.9117 4 16.1544 4C16.3971 4 16.6374 4.04828 16.8613 4.14203C17.0852 4.23578 17.2883 4.37312 17.4586 4.54607C17.8054 4.89637 18 5.36941 18 5.86237C18 6.35533 17.8054 6.82837 17.4586 7.17867L9.00359 16.3874L17.4586 25.588Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_10_3940" x="0" y="0" width="22" height="32.7666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_3940" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_3940" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="left absolute top-1/2 transform -translate-y-1/2 right-2 xl:hidden">
          <svg className={`cursor-pointer mb-10 ${index != dis.length - 1 ? 'block' : 'hidden'}`} onClick={handleSlideNext} xmlns="http://www.w3.org/2000/svg" width="22" height="33" viewBox="0 0 22 33" fill="none">
            <g filter="url(#filter0_d_10_3064)">
              <path d="M4.54142 25.588C4.19457 25.9383 4 26.4113 4 26.9043C4 27.3973 4.19457 27.8703 4.54142 28.2206C4.71174 28.3935 4.91476 28.5309 5.13866 28.6246C5.36256 28.7184 5.60287 28.7667 5.8456 28.7667C6.08834 28.7667 6.32865 28.7184 6.55255 28.6246C6.77645 28.5309 6.97947 28.3935 7.14979 28.2206L17.4594 17.701C17.8058 17.3499 18 16.8765 18 16.3833C18 15.8901 17.8058 15.4168 17.4594 15.0657L7.14978 4.54607C6.97946 4.37312 6.77645 4.23578 6.55254 4.14203C6.32864 4.04828 6.08833 4 5.8456 4C5.60286 4 5.36256 4.04828 5.13865 4.14203C4.91475 4.23578 4.71174 4.37312 4.54141 4.54607C4.19457 4.89637 4 5.36941 4 5.86237C4 6.35533 4.19457 6.82837 4.54142 7.17867L12.9964 16.3874L4.54142 25.588Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_10_3064" x="0" y="0" width="22" height="32.7666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_3064" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_3064" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg className={`cursor-pointer mb-10 ${index === dis.length - 1 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="22" height="33" viewBox="0 0 22 33" fill="none">
            <g opacity="0.2" filter="url(#filter0_d_10_3527)">
              <path d="M4.54142 25.588C4.19457 25.9383 4 26.4113 4 26.9043C4 27.3973 4.19457 27.8703 4.54142 28.2206C4.71174 28.3935 4.91476 28.5309 5.13866 28.6246C5.36256 28.7184 5.60287 28.7667 5.8456 28.7667C6.08834 28.7667 6.32865 28.7184 6.55255 28.6246C6.77645 28.5309 6.97947 28.3935 7.14979 28.2206L17.4594 17.701C17.8058 17.3499 18 16.8765 18 16.3833C18 15.8901 17.8058 15.4168 17.4594 15.0657L7.14978 4.54607C6.97946 4.37312 6.77645 4.23578 6.55254 4.14203C6.32864 4.04828 6.08833 4 5.8456 4C5.60286 4 5.36256 4.04828 5.13865 4.14203C4.91475 4.23578 4.71174 4.37312 4.54141 4.54607C4.19457 4.89637 4 5.36941 4 5.86237C4 6.35533 4.19457 6.82837 4.54142 7.17867L12.9964 16.3874L4.54142 25.588Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_10_3527" x="0" y="0" width="22" height="32.7667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_3527" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_3527" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        // centeredSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: 3
          },
          1260: {
            slidesPerView: 4
          }
        }}
        spaceBetween={20}
        modules={[]}
        loop={true}
        // autoplay={true}
        className="mySwiper max-w-[1100px] discover"
      >
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover1} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Secure</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover2} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Private</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover3} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Browser Based</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px] relative">
          <Image src={discover4} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Project Mode</p>
          <svg className="absolute top-[10px] right-[10px]" xmlns="http://www.w3.org/2000/svg" width="68" height="50" viewBox="0 0 68 50" fill="none">
            <circle opacity="0.1" cx="43" cy="25" r="25" fill="#4DB5FF" />
            <path d="M41.2298 9.99227C37.9483 9.99227 35.0328 12.1053 34.0166 15.2242C32.9737 15.4392 31.9886 15.8738 31.1267 16.4991C30.2649 17.1245 29.5461 17.9262 29.0183 18.851C27.3725 21.6955 27.7483 25.2715 29.9531 27.7097C29.2724 29.7518 29.5061 31.9866 30.5932 33.8358C32.2289 36.6904 35.5202 38.1534 38.7409 37.4726C39.4461 38.2685 40.3128 38.9049 41.2834 39.3393C42.2539 39.7738 43.3059 39.9963 44.3692 39.9921C47.6507 39.9921 50.5662 37.8791 51.5824 34.7602C53.6955 34.3232 55.5141 33.0024 56.5706 31.1334C58.2265 28.2889 57.8507 24.7129 55.6462 22.2747V22.2646C55.9825 21.2552 56.0993 20.1856 55.989 19.1274C55.8786 18.0692 55.5435 17.0468 55.0062 16.1285C53.3701 13.2839 50.0784 11.8206 46.8682 12.5013C46.1597 11.7075 45.2907 11.0734 44.3187 10.6408C43.3466 10.2082 42.2937 9.98718 41.2298 9.99227ZM41.2298 11.943L41.2197 11.9531C42.5405 11.9531 43.8105 12.4102 44.8264 13.2537C44.7857 13.2738 44.7043 13.3246 44.6435 13.3552L38.67 16.7991C38.3651 16.9719 38.1822 17.2969 38.1822 17.6526V25.7392L35.612 24.256V17.5713C35.6114 16.0801 36.2028 14.6498 37.2561 13.5944C38.3095 12.539 39.7387 11.9453 41.2298 11.943ZM48.4258 14.2973C49.4157 14.2954 50.3886 14.5548 51.246 15.0494C52.1035 15.544 52.8152 16.2562 53.3092 17.1141C53.9594 18.252 54.2031 19.5828 53.9795 20.873C53.9388 20.8424 53.8579 20.8021 53.8067 20.7715L47.8333 17.3171C47.683 17.2321 47.5133 17.1875 47.3406 17.1875C47.168 17.1875 46.9983 17.2321 46.848 17.3171L39.8482 21.3604V18.3938L45.6288 15.0514C46.4787 14.5587 47.4434 14.2984 48.4258 14.2969V14.2973ZM33.6512 17.3679V24.4692C33.6512 24.8248 33.8341 25.1398 34.139 25.3227L41.1283 29.3559L38.5476 30.849L32.7772 27.5167C31.4876 26.7694 30.5473 25.5409 30.1626 24.1009C29.7779 22.6609 29.9803 21.1271 30.7253 19.8362C31.3825 18.697 32.4176 17.824 33.6512 17.3679ZM47.0409 19.1253L52.8215 22.4576C55.5138 24.012 56.4277 27.4458 54.8734 30.1381L54.8834 30.1482C54.2232 31.2861 53.1869 32.1597 51.9575 32.6068V25.5052C51.9575 25.1495 51.7747 24.8245 51.4698 24.652L44.4703 20.6084L47.0409 19.1253ZM42.7943 21.5738L45.7407 23.2805V26.6837L42.7943 28.3904L39.8482 26.6837V23.2805L42.7943 21.5738ZM47.4268 24.256L49.9971 25.7392V32.4139C49.9971 35.5226 47.4776 38.0421 44.3793 38.0421V38.032C43.0686 38.032 41.7885 37.5749 40.7827 36.7318C40.8234 36.7116 40.9148 36.6605 40.9656 36.6299L46.9391 33.186C47.244 33.0132 47.4369 32.6882 47.4265 32.3325L47.4268 24.256ZM45.7504 28.6244V31.5906L39.9699 34.9229C37.2776 36.4672 33.8438 35.5529 32.2894 32.8707H32.2995C31.6393 31.7429 31.4053 30.402 31.6288 29.1118C31.6695 29.1424 31.7509 29.1827 31.8016 29.2133L37.7751 32.6677C37.9254 32.7526 38.0951 32.7973 38.2677 32.7973C38.4404 32.7973 38.6101 32.7526 38.7604 32.6677L45.7504 28.6244Z" fill="#4DB5FF" />
            <path d="M0 26.28V23.498H4.888V19H7.722V23.498H12.584V26.28H7.722V30.778H4.888V26.28H0Z" fill="#4DB5FF" />
          </svg>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover1} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Secure</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover2} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Private</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover3} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Browser Based</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px] relative">
          <Image src={discover4} className="mx-auto lg:h-20 lg:w-20" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Project Mode</p>

          <svg className="absolute top-[10px] right-[10px]" xmlns="http://www.w3.org/2000/svg" width="68" height="50" viewBox="0 0 68 50" fill="none">
            <circle opacity="0.1" cx="43" cy="25" r="25" fill="#4DB5FF" />
            <path d="M41.2298 9.99227C37.9483 9.99227 35.0328 12.1053 34.0166 15.2242C32.9737 15.4392 31.9886 15.8738 31.1267 16.4991C30.2649 17.1245 29.5461 17.9262 29.0183 18.851C27.3725 21.6955 27.7483 25.2715 29.9531 27.7097C29.2724 29.7518 29.5061 31.9866 30.5932 33.8358C32.2289 36.6904 35.5202 38.1534 38.7409 37.4726C39.4461 38.2685 40.3128 38.9049 41.2834 39.3393C42.2539 39.7738 43.3059 39.9963 44.3692 39.9921C47.6507 39.9921 50.5662 37.8791 51.5824 34.7602C53.6955 34.3232 55.5141 33.0024 56.5706 31.1334C58.2265 28.2889 57.8507 24.7129 55.6462 22.2747V22.2646C55.9825 21.2552 56.0993 20.1856 55.989 19.1274C55.8786 18.0692 55.5435 17.0468 55.0062 16.1285C53.3701 13.2839 50.0784 11.8206 46.8682 12.5013C46.1597 11.7075 45.2907 11.0734 44.3187 10.6408C43.3466 10.2082 42.2937 9.98718 41.2298 9.99227ZM41.2298 11.943L41.2197 11.9531C42.5405 11.9531 43.8105 12.4102 44.8264 13.2537C44.7857 13.2738 44.7043 13.3246 44.6435 13.3552L38.67 16.7991C38.3651 16.9719 38.1822 17.2969 38.1822 17.6526V25.7392L35.612 24.256V17.5713C35.6114 16.0801 36.2028 14.6498 37.2561 13.5944C38.3095 12.539 39.7387 11.9453 41.2298 11.943ZM48.4258 14.2973C49.4157 14.2954 50.3886 14.5548 51.246 15.0494C52.1035 15.544 52.8152 16.2562 53.3092 17.1141C53.9594 18.252 54.2031 19.5828 53.9795 20.873C53.9388 20.8424 53.8579 20.8021 53.8067 20.7715L47.8333 17.3171C47.683 17.2321 47.5133 17.1875 47.3406 17.1875C47.168 17.1875 46.9983 17.2321 46.848 17.3171L39.8482 21.3604V18.3938L45.6288 15.0514C46.4787 14.5587 47.4434 14.2984 48.4258 14.2969V14.2973ZM33.6512 17.3679V24.4692C33.6512 24.8248 33.8341 25.1398 34.139 25.3227L41.1283 29.3559L38.5476 30.849L32.7772 27.5167C31.4876 26.7694 30.5473 25.5409 30.1626 24.1009C29.7779 22.6609 29.9803 21.1271 30.7253 19.8362C31.3825 18.697 32.4176 17.824 33.6512 17.3679ZM47.0409 19.1253L52.8215 22.4576C55.5138 24.012 56.4277 27.4458 54.8734 30.1381L54.8834 30.1482C54.2232 31.2861 53.1869 32.1597 51.9575 32.6068V25.5052C51.9575 25.1495 51.7747 24.8245 51.4698 24.652L44.4703 20.6084L47.0409 19.1253ZM42.7943 21.5738L45.7407 23.2805V26.6837L42.7943 28.3904L39.8482 26.6837V23.2805L42.7943 21.5738ZM47.4268 24.256L49.9971 25.7392V32.4139C49.9971 35.5226 47.4776 38.0421 44.3793 38.0421V38.032C43.0686 38.032 41.7885 37.5749 40.7827 36.7318C40.8234 36.7116 40.9148 36.6605 40.9656 36.6299L46.9391 33.186C47.244 33.0132 47.4369 32.6882 47.4265 32.3325L47.4268 24.256ZM45.7504 28.6244V31.5906L39.9699 34.9229C37.2776 36.4672 33.8438 35.5529 32.2894 32.8707H32.2995C31.6393 31.7429 31.4053 30.402 31.6288 29.1118C31.6695 29.1424 31.7509 29.1827 31.8016 29.2133L37.7751 32.6677C37.9254 32.7526 38.0951 32.7973 38.2677 32.7973C38.4404 32.7973 38.6101 32.7526 38.7604 32.6677L45.7504 28.6244Z" fill="#4DB5FF" />
            <path d="M0 26.28V23.498H4.888V19H7.722V23.498H12.584V26.28H7.722V30.778H4.888V26.28H0Z" fill="#4DB5FF" />
          </svg>
        </SwiperSlide>
      </Swiper>

      <div className="hidden z-10 sm:block left absolute top-1/2 transform -translate-y-1/2 left-0">
        <svg className="cursor-pointer" onClick={() => swiperRef.current.swiper.slidePrev()} xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
          <path d="M19.2265 30.84C19.722 31.3404 20 32.0162 20 32.7204C20 33.4246 19.722 34.1004 19.2265 34.6008C18.9832 34.8479 18.6932 35.0441 18.3733 35.178C18.0535 35.312 17.7102 35.3809 17.3634 35.3809C17.0167 35.3809 16.6734 35.312 16.3535 35.178C16.0336 35.0441 15.7436 34.8479 15.5003 34.6008L0.772227 19.5728C0.277419 19.0713 -8.04072e-07 18.395 -7.73275e-07 17.6905C-7.42478e-07 16.9859 0.277419 16.3097 0.772228 15.8081L15.5003 0.780099C15.7436 0.533029 16.0336 0.336822 16.3535 0.202895C16.6734 0.0689692 17.0167 -1.30406e-07 17.3634 -1.15248e-07C17.7102 -1.00091e-07 18.0535 0.0689692 18.3734 0.202896C18.6932 0.336822 18.9832 0.533029 19.2265 0.780099C19.722 1.28052 20 1.9563 20 2.66053C20 3.36476 19.722 4.04053 19.2265 4.54095L7.14799 17.6962L19.2265 30.84Z" fill="white" />
        </svg>
      </div>
      <div className="hidden z-10 sm:block right absolute top-1/2 transform -translate-y-1/2 right-0">
        <svg className="cursor-pointer" onClick={() => swiperRef.current.swiper.slideNext()} xmlns="http://www.w3.org/2000/svg" width="26" height="42" viewBox="0 0 26 42" fill="none">
          <g filter="url(#filter0_d_988_8811)">
            <path d="M3.77345 8.16001C3.27795 7.65958 3 6.98381 3 6.27958C3 5.57535 3.27795 4.89958 3.77345 4.39915C4.01676 4.15209 4.30679 3.95588 4.62665 3.82195C4.94651 3.68803 5.28981 3.61906 5.63657 3.61906C5.98333 3.61906 6.32663 3.68803 6.64649 3.82195C6.96635 3.95588 7.25638 4.15209 7.49969 4.39915L22.2278 19.4272C22.7226 19.9287 23 20.605 23 21.3095C23 22.0141 22.7226 22.6903 22.2278 23.1919L7.49969 38.2199C7.25638 38.467 6.96635 38.6632 6.64649 38.7971C6.32663 38.931 5.98334 39 5.63657 39C5.28981 39 4.94651 38.931 4.62665 38.7971C4.30679 38.6632 4.01676 38.467 3.77345 38.2199C3.27796 37.7195 3 37.0437 3 36.3395C3 35.6352 3.27796 34.9595 3.77345 34.459L15.852 21.3038L3.77345 8.16001Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_d_988_8811" x="0" y="0.617188" width="26" height="41.3828" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_988_8811" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_988_8811" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default DiscoverSlider;
