'use client';

import Link from 'next/link';

const NavItems = ({ classes = 'pl-[50px]', color = 'text-black' }) => {
  return (
    <>
      <ul className={`lg:flex gap-[31px] lg:pl-[49.5px] items-center ${classes}`}>
        <li>
          <Link href="/about" className={`font-medium text-[16px] font-dm hover:text-blue transition duration-1000 ${color}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="/faqs" className={`font-medium font-dm text-[16px] hover:text-blue transition duration-1000 ${color}`}>
            Help & Support
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
