'use client';
import DateButton from '@/components/DateButton';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { useAppContext } from '@/context/AppContext';
import parse from 'html-react-parser';
import Link from 'next/link';
import { useEffect } from 'react';

const page = () => {
  const { setMobileNav } = useAppContext();
  useEffect(() => {
    setMobileNav(false);
  }, []);
  const data = [
    {
      id: 1,
      question: '1. Introduction',
      answere: 'Welcome to MessageMoment, a discreet chat service where correspondence between two or more parties occurs between known parties only. By using MessageMoment, you agree to be bound by these Terms and Conditions of Use (“T&Cs”). If you do not agree with these T&Cs, you should not use MessageMoment.'
    },
    {
      id: 2,
      question: '2. Information Collection and Use',
      answere: 'MessageMoment collects certain meta data when you use our platform however, we do not collect any personally identifiable information.'
    },
    {
      id: 3,
      question: '3. Data Storage and Protection',
      answere: 'MessageMoment takes the security of user data very seriously and has implemented appropriate technical and organizational measures to protect user data against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      id: 4,
      question: '4. Disclosure of Information',
      answere: 'MessageMoment will not sell, trade, or otherwise transfer your personal information to any third party except as required by law.'
    },
    {
      id: 5,
      question: '5. Amendments to this Privacy Policy',
      answere: 'MessageMoment reserves the right to update this Privacy Policy at any time and will notify users of any changes through the platform.'
    },
    {
      id: 6,
      question: '6. Contact Us',
      answere: 'If you have any questions regarding this Privacy Policy, please <a href="/contact" style="color: blue;">Contact Us.</a>'
    }
  ];

  const replaceAnchorTagsWithLinks = node => {
    if (node.type === 'tag' && node.name === 'a' && node.attribs.href) {
      const href = node.attribs.href;
      return (
        <Link href={href} key={href} className="text-blue">
          {parse(node.children[0].data)}
        </Link>
      );
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] border-t border-black border-opacity-5 pb-[10px] lg:pb-[35px]">
        <div className="max-w-[1096px] mx-auto">
          <h3 className="text-2xl lg:text-[40px] font-bold pt-[50px] text-dark">Privacy Policy</h3>
          <DateButton />
          <div className="privacy-lists pb-2">
            {data.map(list => {
              return (
                <div className="" key={list.id}>
                  <h4 className="text-[17px] lg:text-[26px] font-bold text-blue mb-[15px] lg:mb-6">{list.question}</h4>
                  <p className="lg:text-[15px] text-[13px] font-medium max-h-min font-jetBrain lg:mb-9 mb-[15px]">{parse(list.answere, { replace: replaceAnchorTagsWithLinks })}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
