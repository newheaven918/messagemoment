'use client';

import Link from 'next/link';

const NavItems = ({ classes = 'pl-[50px]', color = 'text-black' }) => {
  return (
    <>
      <ul className={`lg:flex gap-[30px] lg:pl-[50px] items-center ${classes}`}>
        <li>
          <Link href="/about" className={`font-medium text-base ${color}`}>
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
