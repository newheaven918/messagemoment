'use client';
import Image from 'next/image';
import Logo from 'public/images/logo.svg';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const SiteLogo = ({ width }) => {
  const { mobileNav } = useAppContext();
  return (
    <Link href={`/`} className={`lg:block ${width} lg:w-[196px] ${mobileNav ? 'hidden' : 'block'}`}>
      <Image className={`${width} lg:w-[196px]`} src={Logo} alt="Logo" />
    </Link>
  );
};

export default SiteLogo;
