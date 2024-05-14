'use client';

import { useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CookiesContainer from '@/components/CookiesContainer';
import AboutTwoColumnSection from '@/components/AboutTwoColumnSection';
import AboutLastSection from '@/components/AboutLastSection';
import chat from '/public/home/chat.svg';
import clock from '/public/home/clock.svg';
import Hero from '@/components/Hero';
import Guide from '@/components/Guide';
import Discover from '@/components/Discover';

export default function Home() {
  const { setMobileNav } = useAppContext();

  useEffect(() => {
    setMobileNav(false);
    // if (reloadHome) {
    //   location.reload();
    // }
  }, []);

  return (
    <>
      <NavBar />
      <main className='pt-[85px]'>
        <Hero />
        <AboutTwoColumnSection downarrow={true} bg={chat} classes="flex-row-reverse pt-[104px] pb-[59px] pl-[20px] lg:pt-[141px] lg:pb-[80px]" imgClass="max-w-[529px] w-full pl-[15px]" pr="pr-1" title="Converse with ease and assurance" des="It is said that words cannot be unspoken, but they can be unwritten with MessageMoment’s in-the-moment chat service that guarantees your conversation is history. Start chatting now and experience the privacy and security of MessageMoment." />
        <Guide />
        <AboutLastSection bg={clock} classes="pt-[88px] pb-[83px] lg:pt-[79px] lg:pb-[80px]" imgClass="max-w-[529px] w-full" pr="pr-16 lg:pr-2" title="Your message only lasts a moment" des="We believe that words can be a powerful tool for connection and communication, but it's also true that words cannot be unspoken. That's why we created a live chat service that lets you unwrite those words, with a unique chat link and a secure, in-the-moment chat experience." />
        <Discover />
        <CookiesContainer />
      </main>
      <Footer classes="mt-0" />
    </>
  );
}
