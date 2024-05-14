import locked from '/public/icons/locked.svg';
import LogoHeader from '@/components/LogoHeader';
import BlurSection from '@/components/BlurSection';
import NavLessPageFooter from '@/components/NavLessPageFooter';

const page = () => {
  return (
    <>
      <LogoHeader />
      <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% border-t border-black border-opacity-10">
        <div className="max-w-[720px] mx-auto">
          <BlurSection img={locked} pt="pt-[105px] lg:pt-[134px]" heading={`The chat session is locked`} description={`Unfortunately you are unable to enter the chat at this time.`} padding={'pt-[239px] pb-[218px] lg:pt-[258px] lg:pb-[224px]'} />
        </div>
      </div>
      <NavLessPageFooter />
    </>
  );
};

export default page;
