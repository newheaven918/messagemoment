import Image from 'next/image';

const AboutTwoColumnSection = ({ bg, classes = '', title, des, pr, imgClass = '', main = '', downarrow = false }) => {
  return (
    <div className={`border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[30px] ${main}`}>
      {downarrow && (
        <svg className="lg:hidden mt-[450px] mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 25 14" fill="none">
          <path opacity="0.2" d="M21.588 0.541415C21.9383 0.194569 22.4113 0 22.9043 0C23.3973 0 23.8703 0.194569 24.2206 0.541415C24.3935 0.711735 24.5309 0.914754 24.6246 1.13865C24.7184 1.36256 24.7667 1.60286 24.7667 1.8456C24.7667 2.08833 24.7184 2.32864 24.6246 2.55254C24.5309 2.77645 24.3935 2.97946 24.2206 3.14978L13.701 13.4594C13.3499 13.8058 12.8765 14 12.3833 14C11.8901 14 11.4168 13.8058 11.0657 13.4594L0.546069 3.14978C0.373121 2.97946 0.235775 2.77645 0.142027 2.55254C0.0482785 2.32864 0 2.08833 0 1.8456C0 1.60286 0.0482785 1.36256 0.142027 1.13865C0.235775 0.914754 0.373121 0.711735 0.546069 0.541415C0.896367 0.194569 1.36941 0 1.86237 0C2.35533 0 2.82837 0.194569 3.17867 0.541415L12.3874 8.99641L21.588 0.541415Z" fill="#494AF8" />
        </svg>
      )}
      <div className={`flex sm:justify-center ${classes} lg:items-center gap-10 lg:gap-[60px] max-lg:flex-col`}>
        <div className="flex sm:justify-center sm:items-center">
          <Image src={bg} className={imgClass} alt="Image" />
        </div>
        <div className="flex sm:justify-center sm:items-center flex-col">
          <h3 className={`lg:text-[60px] text-[34px] font-bold lg:leading-[70px] text-dark max-w-[538px] ${pr} max-md:tracking-[-0.5px] leading-[34px]`}>{title}</h3>
          <p className="font-jetBrain text-[13px] lg:text-[17px] font-medium mt-[20px] max-w-[538px]">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwoColumnSection;
