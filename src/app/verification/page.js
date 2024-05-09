import Image from 'next/image';
import verification from '/public/icons/verification.svg';
import CloudflareTurnstile from '@/components/CloudflareTurnstile';
import LogoHeader from '@/components/LogoHeader';
import NavLessPageFooter from '@/components/NavLessPageFooter';

const page = () => {
  return (
    <div>
      <LogoHeader />
      <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] border-t border-black border-opacity-10">
        <div className="max-w-[720px] mx-auto">
          <div className="pt-[239px] pb-[218px] lg:pt-[258px] lg:pb-[224px] ">
            <div className="flex justify-center flex-col items-center">
              <div className="max-w-[470px] h-[470px] w-full rounded-full bg-opacity-20 lg:bg-opacity-50 bg-blue bg-gradient-to-b from-blue-10  blur-[50px] absolute z-10"></div>
              <div className=" relative bg-white border border-black border-opacity-10 flex justify-center flex-col items-center max-w-[720px] z-20 rounded-[10px] min-w-full">
                <Image alt="verification" src={verification} className="w-[128px] relative bottom-16 max-lg:bottom-14 max-sm:bottom-12 max-lg:tracking-tighter max-lg:w-[100px]  " />
                <div className="flex justify-center pb-[100px] max-lg:pb-[82px] flex-col items-center relative bottom-10">
                  <h1 className="text-blue text-[26px] font-bold leading-normal text-center max-lg:text-[17px] mt-[20px] max-lg:mt-[20px] max-lg:mx-[51px] mx-[104px] mb-[42px]">Checking if the site connection is secure</h1>
                  <CloudflareTurnstile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLessPageFooter />
    </div>
  );
};

export default page;
