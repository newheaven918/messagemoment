import session from '/public/icons/session.svg';
import LogoHeader from '@/components/LogoHeader';
import BlurSection from '@/components/BlurSection';
import NavLessPageFooter from '@/components/NavLessPageFooter';
import CookiesContainer from '@/components/CookiesContainer';

const page = () => {
  return (
    <>
      <LogoHeader />
      <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% border-t border-black border-opacity-10">
        <div className="max-w-[720px] mx-auto flex items-center justify-center h-[calc(100vh-175px)]">
          <BlurSection img={session} pt="pt-[105px] lg:pt-[134px]" heading={`The chat session is full! There are currently 10/10 users joined`} description={`Unfortunately you are unable to enter the chat at this time.`} padding={'w-full'} />
        </div>
      </div>
      <NavLessPageFooter />
      <CookiesContainer />
    </>
  );
};

export default page;
