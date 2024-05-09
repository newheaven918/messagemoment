'use client';

import SiteLogo from './SiteLogo';
import NavItems from './NavItems';
import { useAppContext } from '@/context/AppContext';
import SiteLogoWhite from './SiteLogoWhite';
import FooterBottom from './FooterBottom';
import SocialIcons from './SocialIcons';
import HeaderButton from './HeaderButton';
import FooterNavItems from './FooterNavItems';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const { mobileNav, setMobileNav, setReloadHome } = useAppContext();
  const router = useRouter();

  const handleScroll = () => {
    router.push(`/#linkGenerate`);
    setMobileNav(false);
    setReloadHome(true);
  };

  return (
    <header className={`lg:static lg:h-auto lg:bg-white border-t-[5px] border-t-blue ${mobileNav ? 'bg-blue border-b border-b-white h-screen fixed z-[100] w-full' : 'bg-white'}`}>
      <nav className={`flex items-center w-full max-w-[1440px] mx-auto px-[17px] py-[20px] md:px-[60px] md:py-[17px] ${mobileNav ? 'pb-[19px] border-b border-b-white border-opacity-10' : ''}`}>
        <SiteLogo width="w-[150px]" />
        <SiteLogoWhite />
        <div className="hidden lg:flex items-center justify-between grow">
          <NavItems classes={` text-black`} />
          <div className="right lg:flex items-center">
            <SocialIcons />
            <HeaderButton event={() => router.push(`/#linkGenerate`)} classes={`bg-blue text-white`} name="Start" />
          </div>
        </div>
        <button className="mobile-menu lg:hidden ml-auto mr-[7px] bg-blue rounded-md h-[46px] w-[46px] text-center" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <svg className="mx-auto w-[15px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="white" />
            </svg>
          ) : (
            <svg className="mx-auto w-[15px]" xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
              <path d="M0.833333 10H14.1667C14.625 10 15 9.625 15 9.16667C15 8.70833 14.625 8.33333 14.1667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0.833333 5.83333H14.1667C14.625 5.83333 15 5.45833 15 5C15 4.54167 14.625 4.16667 14.1667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333Z" fill="white" />
            </svg>
          )}
        </button>
      </nav>
      <div className={`lg:hidden ${mobileNav ? 'flex flex-col items-center justify-between p-5 pt-0' : 'hidden'}`} style={{ height: 'calc(100vh - 190px)' }}>
        <FooterNavItems color="text-white" classes={`text-center py-[50px] pl-[0px] w-full border-b border-b-white border-opacity-10`} />
        <div className="grow w-full">
          <HeaderButton event={handleScroll} classes="text-blue bg-white w-full mt-10" name="Start" />
        </div>
        <FooterBottom classes="pt-[30px] border-t border-t-white border-opacity-10 text-white" textColor="text-white" />
      </div>
    </header>
  );
};

export default NavBar;
