'use client';
import Image from 'next/image';
import Logo from 'public/images/logo.svg';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const SiteLogo = ({ width }) => {
  const { mobileNav } = useAppContext();
  return (
    <div onClick={() => {location.href = "/"; location.reload(true);  window.scrollTo (0,0); }} className={`lg:block ${width} lg:w-[197px] ${mobileNav ? 'hidden' : 'block'}`}>
      <Image className={`${width} lg:w-[199px]`} src={Logo} alt="Logo" />
    </div>
  );
};

export default SiteLogo;
