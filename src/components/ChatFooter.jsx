import Image from 'next/image';
import grayLogo from '/public/images/gray-logo.svg';
import Link from 'next/link';

const ChatFooter = () => {
  return (
    <div className="mt-3 border-t border-white border-opacity-10">
      <Image src={grayLogo} alt="Logo" className="mx-auto my-[15px] opacity-20" />
      <ul className="text-center font-medium text-[11px] text-white mb-[15px]">
        <li className="leading-6">
          <a target="_blank" href="/about">
            About MessageMoment
          </a>
        </li>
        <li className="leading-6">
          <a href="/faqs" target="_blank">
            FAQs
          </a>
        </li>
        <li className="leading-6">
          <a target="_blank" href="/privacy">
            Privacy
          </a>
        </li>
        <li className="leading-6">
          <a target="_blank" href="/terms">
            Terms of Use
          </a>
        </li>
      </ul>
      <p className="text-center text-white opacity-50 text-[9px] font-medium mb-5 px-7">Copyright © 2023 MessageMoment. All rights reserved.</p>
    </div>
  );
};

export default ChatFooter;
