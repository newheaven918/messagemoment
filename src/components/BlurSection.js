import Image from 'next/image';
import ReturnToHomepage from './ReturnToHomepage';

const BlurSection = ({ img, padding = '', pt = '', largeHeader = false, returnHome = true, heading, description, sessionLink = false, top = '-top-[50px] lg:-top-[62px]', buttonText = 'Return to Homepage' }) => {
  return (
    <div className={`px-[15px] ${padding}`}>
      <div className="flex justify-center flex-col items-center">
        <div className="max-w-[470px] h-[470px] w-full rounded-full bg-opacity-20 lg:bg-opacity-50 bg-blue  blur-[50px] absolute z-10"></div>
        <div className=" relative bg-white border border-black border-opacity-10 flex justify-center flex-col items-center max-w-[720px] z-20 rounded-[10px] w-full px-7">
          <Image src={img} className={`w-[100px]  lg:w-[128px] absolute ${top}`} alt="image" />
          <div className="flex justify-center flex-col items-center relative pb-10">
            {largeHeader && <h1 className="text-blue lg:text-[150px] font-bold leading-none text-[80px] mb-5 lg:mb-0 tracking-[-1px] lg:tracking-[-2px] pt-20 ">404</h1>}
            <h3 className={`text-blue text-[17px] lg:text-[26px] text-center max-w-[324px] lg:max-w-[470px] ${pt}`}>{heading}</h3>
            {sessionLink && <p className="font-jetBrain text-[13px] font-bold lg:text-[15px] text-center px-7 -mb-[9px] mt-[21px] lg:mt-[30px]">https://messagemoment.com/5qjjc37f9sn</p>}
            <p className="text-dark mt-[21px] mb-8 lg:mt-[30px] my-[30px] font-jetBrain font-medium text-[13px] lg:text-[15px] text-center max-w-[324px] lg:max-w-[540px]">{description}</p>
            {returnHome && <ReturnToHomepage text={buttonText} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurSection;
