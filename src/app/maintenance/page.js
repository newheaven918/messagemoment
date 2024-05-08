import Image from 'next/image';
import maintenance from '/public/icons/maintenance.svg';
import LogoHeader from '@/components/LogoHeader';
import NavLessPageFooter from '@/components/NavLessPageFooter';

const page = () => {
  return (
    <>
      <LogoHeader />
      <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% border-t border-black border-opacity-10">
        <div className="max-w-[720px] mx-auto">
          <div className={`px-[15px] pt-[239px] pb-[218px] lg:pt-[258px] lg:pb-[224px]`}>
            <div className="flex justify-center flex-col items-center">
              <div className="max-w-[470px] h-[470px] w-full rounded-full bg-opacity-20 lg:bg-opacity-50 bg-blue  blur-[50px] absolute z-10"></div>
              <div className=" relative bg-white border border-black border-opacity-10 flex justify-center flex-col items-center max-w-[720px] z-20 rounded-[10px] w-full px-7">
                <Image src={maintenance} className="w-[100px] -top-[50px] lg:w-[128px] absolute lg:-top-[62px]" alt="image" />
                <div className="flex justify-center flex-col items-center relative pb-10">
                  <h3 className={`text-blue text-[17px] lg:text-[26px] text-center max-w-[324px] lg:max-w-[470px] pt-[105px] lg:pt-[134px]`}>
                    We’ll be back soon! <br /> We’re under maintenance
                  </h3>
                  <p className="text-dark mt-[21px] mb-9 lg:mb-6 lg:mt-[30px] my-[30px] font-jetBrain font-medium text-[13px] lg:text-[15px] text-center max-w-[324px] lg:max-w-[540px]">
                    Sorry for the inconvenience. We’re performing some maintenance at the moment. We'll be back up shortly! <br /> <br />- The MessageMoment Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLessPageFooter />
    </>
  );
};

export default page;
