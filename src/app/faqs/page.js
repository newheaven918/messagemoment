'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import faqs from '/public/icons/faqs.svg';
import searchIcon from '/public/icons/icon_search.svg';
import Accordion from '@/components/Accordion';
import { accordionList } from '../../components/AccordionList';
import email2 from '/public/icons/email.svg';
import ReturnToHomepage from '@/components/ReturnToHomepage';
import { useAppContext } from '@/context/AppContext';

const page = () => {
  const [accordions, setAccordions] = useState(accordionList);

  function handleForm(e) {
    e.preventDefault();
  }

  const { setMobileNav } = useAppContext();
  useEffect(() => {
    setMobileNav(false);
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-b from-blue-10 from-0%  to-blue-0 to-[130%] px-[19px] ">
        <div className="flex flex-col justify-center items-center gap-[30px] pt-[51px]">
          <Image src={faqs} className="lg:w-[128px] lg:h-[128px] w-[80px] h-[80px]" alt="logo" />
          <h3 className="lg:text-[40px] font-bold leading-normal text-[24px] px-6 text-center">How can we help you?</h3>
        </div>
        <div className="text-center lg:mt-[49px] mt-[35px] mb-[29px]">
          <form onSubmit={handleForm}>
            <label className="relative">
              <input className="appearance-none w-full max-w-[1096px] font-jetBrain text-dark placeholder:text-dark placeholder:text-opacity-30 border  border-opacity-10 text-[15px] h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white " type="text" placeholder="Type keywords to find answers" />
              <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Image src={searchIcon} alt="Search Icon" />
              </button>
            </label>
          </form>
        </div>
        <p className="text-[17px] font-medium leading-6 text-blue text-center px-5 pb-[50px] lg:pb-[40px]">You can also browse the topics below to find what you are looking for:</p>
      </div>
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <div className="max-w-[1096px] mx-auto">
          <h3 className="text-[40px] max-md:text-[24px] font-bold leading-normal pt-[40px] pb-[30px] text-dark">Frequently Asked Questions</h3>
          <div className="accordion-lists">
            {accordions.map(list => {
              return (
                <div className={list.title} key={list.id}>
                  <h2 className="text-[26px] max-lg:text-[17px] font-bold mb-4 text-blue">{list.title}</h2>
                  <Accordion accordions={accordions} items={list.listItem} setAccordions={setAccordions} />
                </div>
              );
            })}
          </div>
          <div className="mt-[35px] lg:mt-[25px] border-t border-black border-opacity-10 pt-[126px] pb-[84px] lg:pt-[121px] lg:pb-[100px] ">
            <div className="flex justify-center flex-col items-center">
              <div className="max-w-[410px] h-[410px] w-full rounded-full bg-opacity-50 bg-blue bg-gradient-to-b from-blue-10  blur-[50px] absolute z-10"></div>
              <div className="relative bg-white border border-black border-opacity-10 flex justify-center flex-col items-center max-w-[720px] z-20 rounded-[10px] min-w-full">
                <Image src={email2} className="w-[100px] h-[100px] lg:w-[128px] lg:h-[128px] absolute lg:-top-[61px] -top-[50px] max-sm:bottom-24  max-md:w-[100px] max-md:h-[100px] " alt="logo" />
                <div className="flex justify-center flex-col items-center pt-[101px] px-10 pb-[52px] lg:pb-[67px] lg:pt-[117px] ">
                  <h1 className="text-blue lg:text-[26px] font-bold leading-normal text-center text-[17px] lg:px-8 ">Still need help about a topic not listed?</h1>
                  <p className="text-[13px] text-dark font-jetBrain lg:text-[15px] text-center px-5 mt-[21px] lg:mt-[30px] mb-[33px]">A member of our team will respond to your enquiry shortly.</p>
                  <ReturnToHomepage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
