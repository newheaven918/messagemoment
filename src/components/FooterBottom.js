'use client';
import Image from 'next/image';
import SocialIcons from './SocialIcons';
import devIcon from 'public/images/icon.png';
import devIconWhite from 'public/images/white-icon.png';
import { useAppContext } from '@/context/AppContext';

const FooterBottom = ({ classes = '', textColor = 'text-darkGrey' }) => {
  const { mobileNav } = useAppContext();
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] mx-auto px-4 pt-[3px] ${classes}`}>
      <p className={`${textColor} font-medium text-[10px] lg:text-[13px] order-1 lg:order-none mt-[31px] lg:mt-0 mb-[7px] ml-[43px] lg:mb-0`}>Copyright © 2024 MessageMoment. All rights reserved.</p>
      <SocialIcons textColor={textColor} pR={`pr-1`} />
      <p className={`${textColor} font-medium text-[10px] lg:text-[13px] lg:w-[337.9px] text-right flex justify-center order-1 lg:order-none lg:justify-end items-center gap-[5px] lg:gap-[10px] mr-[43px]`}>
        Designed By <Image className={`w-[12px] lg:w-[16px] lg:block ${mobileNav ? 'hidden' : ''}`} src={devIcon} alt="Dev Icon" />
        <Image className={`lg:hidden ${mobileNav ? '' : 'hidden'}`} src={devIconWhite} alt="Dev Icon" />
      </p>
    </div>
  );
};

export default FooterBottom;
