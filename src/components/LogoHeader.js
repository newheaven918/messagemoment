import SiteLogo from './SiteLogo';

const LogoHeader = () => {
  return (
    <header className="bg-white py-5 md:px-[60px] md:py-[17px] border-t-[5px] border-blue">
      <nav className="flex items-center justify-center w-full max-w-[1440px] mx-auto">
        <SiteLogo width={`w-[169px]`} />
      </nav>
    </header>
  );
};

export default LogoHeader;
