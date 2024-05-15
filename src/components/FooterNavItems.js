import Link from 'next/link';

const FooterNavItems = ({ classes = '', color = 'text-dark' }) => {
  return (
    <ul className={`flex flex-col lg:flex-row gap-[11px] lg:gap-[31px] pl-[1px] justify-center ${classes}`}>
      <li>
        <Link href="/about" className={`font-medium text-sm lg:text-[17px] font-dm hover:text-blue transition duration-1000 ${color}`}>
          About
        </Link>
      </li>
      <li>
        <Link href="/faqs" className={`font-medium text-sm lg:text-[17px] font-dm hover:text-blue transition duration-1000 ${color}`}>
          Help & Support
        </Link>
      </li> 
      <li>
        <Link href="/terms" className={`font-medium text-sm lg:text-[17px] font-dm hover:text-blue transition duration-1000 ${color}`}>
          Terms of Use    
        </Link>
      </li>
      <li>
        <Link href="/privacy" className={`font-medium text-sm lg:text-[17px] font-dm hover:text-blue transition duration-1000 ${color}`}>
          Privacy Policy
        </Link>
      </li>
    </ul>
  );
};

export default FooterNavItems;
