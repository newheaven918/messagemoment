'use client';

import Link from 'next/link';

const NavItems = ({ classes = 'pl-[50px]', color = 'text-black' }) => {
  return (
    <>
      <ul className={`lg:flex gap-[31px] lg:pl-[49.5px] items-center ${classes}`}>
        <li>
          <Link href="/about" className={`font-medium  ${color}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="/faqs" className={`font-medium text-base ${color}`}>
            Help & Support
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
