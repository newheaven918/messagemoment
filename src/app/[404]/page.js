import error from '/public/icons/error-404.svg';
import LogoHeader from '@/components/LogoHeader';
import BlurSection from '@/components/BlurSection';
import NavLessPageFooter from '@/components/NavLessPageFooter';

const NotFound = () => {
  return (
    <>
      <LogoHeader />
      <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% border-t border-black border-opacity-10">
        <div className="max-w-[900px] mx-auto">
          <BlurSection img={error} largeHeader={true} heading={`The page you’re looking for doesn't exist`} description={`Don’t panic, just click the big button below and return home.`} padding={'pt-[194px] pb-[223px] lg:pt-[243px] lg:pb-[209px]'} />
        </div>
      </div>
      <NavLessPageFooter />
    </>
  );
};

export default NotFound;
