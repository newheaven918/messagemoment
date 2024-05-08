'use client';
import Image from 'next/image';
import one from '/public/home/1.svg';
import two from '/public/home/2.svg';
import three from '/public/home/3.svg';
import four from '/public/home/4.svg';
import { useRef, useState } from 'react';

const Steps = () => {
  const steps = [
    { id: 1, img: one, step: 'Step 1', stepName: 'Generate Link' },
    { id: 2, img: two, step: 'Step 2', stepName: 'Share It' },
    { id: 3, img: three, step: 'Step 3', stepName: 'Set Expiry' },
    { id: 4, img: four, step: 'Step 4', stepName: 'End Session' }
  ];

  const [index, setIndex] = useState(0);
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
    console.log(carousel.current.scrollLeft);
    carousel.current.scrollLeft += 185;
    setIndex(prev => {
      if (prev === steps.length - 1) {
        return steps.length - 1;
      }
      return prev + 1;
    });
  }

  function handleHoverFunction(i) {
    setIndex(i);
    carousel.current.scrollLeft = i * 185;
  }

  return (
    <div className="relative">
      <div ref={carousel} className="steps-desktop sliders flex gap-[10px] sm:gap-5 overflow-x-scroll scroll-smooth px-[90px] sm:px-0 sm:overflow-x-hidden -mx-[15px] sm:mx-auto pb-10">
        {steps.map((step, i) => {
          return (
            <div className={`step bg-white rounded-[20px] min-w-[180px] sm:min-w-0 relative p-5 sm:p-[30px] cursor-pointer ${index === i ? 'sm:w-[220px] lg:w-[260px] xl:flex-1' : 'sm:w-[220px] lg:w-[260px] bg-opacity-20 text-center'}`} key={step.id} onMouseEnter={() => handleHoverFunction(i)}>
              <h2 className={`font-bold text-[34px] lg:text-[60px] absolute left-[30px] top-4 ${index === i ? 'text-blue' : 'text-white opacity-20'}`}>{step.id}</h2>
              <Image src={step.img} alt="step" className={`w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mt-[20px] object-cover ${index === i ? 'mx-auto sm:ml-[45px] lg:ml-[60px]' : 'mx-auto'} mb-[17px] sm:mb-5`} />
              <span className={`font-jetBrain text-[13px]  ${index === i ? 'text-darkGrey' : 'text-white'}`}>{step.step}</span>
              <p className={`font-bold text-[17px] lg:text-[26px] ${index === i ? 'text-dark' : 'text-white'}`}>{step.stepName}</p>
              {i === index && <div className="absolute sm:hidden left-1/2 transform -translate-x-1/2 -bottom-10 h-1 rounded-full w-10 bg-white"></div>}
            </div>
          );
        })}
      </div>
      <div className="left absolute top-1/2 transform -translate-y-1/2 left-0 sm:hidden">
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
      <div className="left absolute top-1/2 transform -translate-y-1/2 right-0 sm:hidden">
        <svg className={`cursor-pointer mb-10 ${index != steps.length - 1 ? 'block' : 'hidden'}`} onClick={handleSlideNext} xmlns="http://www.w3.org/2000/svg" width="22" height="33" viewBox="0 0 22 33" fill="none">
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
        <svg className={`cursor-pointer mb-10 ${index === steps.length - 1 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="22" height="33" viewBox="0 0 22 33" fill="none">
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
  );
};

export default Steps;
