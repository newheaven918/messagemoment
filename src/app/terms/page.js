'use client';
import Link from 'next/link';
import parse from 'html-react-parser';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import DateButton from '@/components/DateButton';
import { useAppContext } from '@/context/AppContext';
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
      answer: 'Welcome to MessageMoment, a discreet chat service where correspondence between two or more parties occurs between known parties only. This Privacy Policy sets out the manner in which MessageMoment collects, stores, uses, and protects the information provided by its users.'
    },
    {
      id: 2,
      question: '2. Information Collection and Use',
      answer: `By using MessageMoment, you agree to the following conditions of use: <br/><br/><ul className="list-disc pl-5">
      <li> You will not use the platform for any illegal or unauthorized purpose. </li>
      <li>You will not violate any laws in your jurisdiction.</li>
      <li>You will not infringe upon the rights of others, including but not limited to, the right to privacy and intellectual property rights.</li>
      <li>You will not use the platform in any manner that could damage, disable, overburden, or impair the platform.</li>
      <li>You will not abuse or harm others in any manner through the use of the platform.</li>
      <li>You represent and warrant that you are at least 16 years of age. If you are under 16 years of age, you may not use this platform without the express consent and supervision of a parent or legal guardian. By using this platform, you acknowledge and agree that you are solely responsible for complying with any and all laws and regulations applicable to you, including any age restrictions or other eligibility criteria.</li>
    </ul>`
    },
    {
      id: 3,
      question: '3. Responsibility to Retain Information',
      answer: 'It is the responsibility of the user to capture or save any information they wish to retain as the platform is provided on an "as is" and "as available" basis.'
    },
    {
      id: 4,
      question: '4. Disclaimer of Warranties',
      answer: 'MessageMoment provides its platform on an “as is” and “as available” basis and makes no representations or warranties of any kind, express or implied, as to the operation of the platform or the information, content or materials included on the platform.'
    },
    {
      id: 5,
      question: '5. Indemnification',
      answer: 'You agree to indemnify, defend and hold harmless MessageMoment, its directors, officers, employees, agents, licensors, suppliers, and any third-party information providers to the service from and against all losses, expenses, damages, and costs, including reasonable attorneys’ fees, resulting from any violation of these T&Cs or any activity related to your use of the platform.'
    },
    {
      id: 6,
      question: '6. Termination of Use',
      answer: 'MessageMoment reserves the right to terminate or restrict your use of the platform at any time, with or without notice, for any or no reason, and without liability to you.'
    },
    {
      id: 7,
      question: '7. Amendments to these T&Cs',
      answer: 'MessageMoment reserves the right to update these T&Cs at any time and will notify users of any changes through the platform.'
    },
    {
      id: 8,
      question: '8. Governing Law',
      answer: 'These Terms and Conditions of Use (“T&Cs”) shall be governed by and construed in accordance with the laws of the jurisdiction in which you reside. Any dispute arising out of or in connection with these T&Cs or the use of MessageMoment shall be resolved exclusively through the courts of the jurisdiction in which you reside..'
    },
    {
      id: 9,
      question: '9. Entire Agreement',
      answer: 'These T&Cs, together with the <a href="/privacy" style="color: blue";>Privacy Policy</a>, constitute the entire agreement between you and MessageMoment relating to the use of the platform. If any provision of these T&Cs is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.'
    },
    {
      id: 10,
      question: '10. Contact Us',
      answer: 'If you have any questions regarding these Terms and Conditions of Use, please <a href="/contact" style="color: blue">Contact Us.</a>'
    }
  ];

  const replaceAnchorTagsWithLinks = (node, index) => {
    if (typeof node === 'string') {
      return node;
    } else if (node.type === 'tag' && node.name === 'a' && node.attribs.href) {
      const href = node.attribs.href;
      return (
        <Link href={href} key={index} className="text-blue">
          {parse(node.children[0].data)}
        </Link>
      );
    }
    return undefined;
  };

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] border-t border-black border-opacity-5 pb-[10px] lg:pb-[35px]">
        <div className="max-w-[1096px] mx-auto">
          <h3 className="text-2xl lg:text-[40px] font-bold pt-[50px] text-dark">Terms and Conditions of Use</h3>
          <DateButton />
          <div className="privacy-lists pb-2">
            {data.map(list => {
              return (
                <div className="" key={list.id}>
                  <h3 className="text-[17px] lg:text-[26px] font-bold text-blue mb-[15px] lg:mb-6">{list.question}</h3>
                  <div className="lg:text-[15px] text-[13px] font-medium max-h-min font-jetBrain lg:mb-9 mb-[15px]">{parse(list.answer, { replace: replaceAnchorTagsWithLinks })}</div>
                </div>
              );
            })}
            <hr />
          </div>
          <div className="pb-2">
            <h3 className="text-[17px] lg:text-[26px] font-bold text-blue mb-[15px] lg:mb-6">Credit</h3>
            <div className="mb-[18px]">
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain break-all">https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard</p>
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain text-lightGrey">Under Flaticon License</p>
            </div>
            <div className="mb-8">
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain break-all">https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais"</p>
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain text-lightGrey">Image by rawpixel.com on Freepik</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
