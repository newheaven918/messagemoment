'use client';

import SiteLogo from './SiteLogo';
import FooterBottom from './FooterBottom';
import FooterNavItems from './FooterNavItems';

const Footer = ({ classes = 'mt-[25px] lg:mt-10' }) => {
  function ToTOp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className={`${classes} bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-70% to-white`}>
      <div className="container max-w-[1440px] mx-auto px-4 text-center flex flex-col gap-[30px] md:gap-[50px] items-center justify-center pt-10 pb-9 lg:pb-[50px] relative">
        <SiteLogo width="w-[196px]" />
        <FooterNavItems />
        <div className="block lg:hidden pt-[30px] border-t border-black border-opacity-10 w-full">
          <FooterBottom textColor="text-darkGrey" />
        </div>
        <button className="top border-[3px] border-white rounded-full bg-blue absolute -top-[25px] lg:-top-10 right-2 lg:right-0 h-[50px] w-[50px] lg:h-20 lg:w-20 flex items-center justify-center p-4" onClick={ToTOp}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 25 14" fill="none">
            <path d="M3.412 13.4586C3.0617 13.8054 2.58867 14 2.09571 14C1.60275 14 1.12971 13.8054 0.779407 13.4586C0.606459 13.2883 0.469112 13.0852 0.375364 12.8613C0.281616 12.6374 0.233339 12.3971 0.233339 12.1544C0.233339 11.9117 0.281616 11.6714 0.375364 11.4475C0.469112 11.2236 0.606458 11.0205 0.779407 10.8502L11.299 0.540561C11.6501 0.194196 12.1235 1.1257e-06 12.6167 1.08259e-06C13.1099 1.03947e-06 13.5832 0.194196 13.9343 0.540561L24.4539 10.8502C24.6269 11.0205 24.7642 11.2236 24.858 11.4475C24.9517 11.6714 25 11.9117 25 12.1544C25 12.3971 24.9517 12.6374 24.858 12.8613C24.7642 13.0852 24.6269 13.2883 24.4539 13.4586C24.1036 13.8054 23.6306 14 23.1376 14C22.6447 14 22.1716 13.8054 21.8213 13.4586L12.6126 5.00359L3.412 13.4586Z" fill="white" />
          </svg>
        </button>
      </div>
      <div className="footer-bottom border-t border-black border-opacity-10 pt-[30px] pb-[35px] bg-gradient-to-b from-blue-10 from-0% to-blue-0 via-20% hidden lg:block">
        <FooterBottom textColor="text-darkGrey" />
      </div>
    </footer>
  );
};

export default Footer;
