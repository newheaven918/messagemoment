'use client';
import Link from 'next/link';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import about1 from '/public/about/about1.svg';
import about2 from '/public/about/about2.svg';
import about3 from '/public/about/about3.svg';
import about4 from '/public/about/about4.svg';
import chat from '/public/icons/chat-hash.svg';
import light from '/public/icons/light.svg';
import bg1 from '/public/about/Background2.svg';
import bg2 from '/public/about/Background.svg';
import bg3 from '/public/about/bg3.svg';
import bg4 from '/public/about/bg4.svg';
import dedicated1 from '/public/about/dedicated1.svg';
import dedicated2 from '/public/about/dedicated2.svg';
import dedicated3 from '/public/about/dedicated3.svg';
import AboutTwoColumnSection from '@/components/AboutTwoColumnSection';
import { useAppContext } from '@/context/AppContext';
import { useEffect } from 'react';
import Slider from '@/components/Slider/Slider';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  const { setMobileNav, setReloadHome } = useAppContext();
  useEffect(() => {
    setMobileNav(false);
  }, []);

  const handleScroll = () => {
    router.push(`/#linkGenerate`);
    setReloadHome(true);
  };

  return (
    <>
      <NavBar />
      <div className="border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px]">
        {/* <div> */}
        <div className="flex items-center justify-center flex-col">
          <h1 className="lg:text-[60px] text-[34px] max-md:px-5 font-bold leading-[70px] max-md:leading-[34px] text-center  text-dark mt-[50px] mb-7 lg:mb-[30px] tracking-[-0.5px]">Welcome to MessageMoment</h1>
          <p className="text-blue text-center text-sm mb-[30px] lg:mb-[50px] lg:text-[17px] leading-6 font-medium px-6 max-w-[586px]">The untraceable live chat service that allows you to have a private, discreet and secure conversation with anyone, anywhere.</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mb-[30px] lg:mb-[50px] grid grid-cols-4 gap-5 max-lg:grid-cols-2 ">
            <Image src={about1} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="About" />
            <Image src={about2} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="About" />
            <Image src={about3} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="About" />
            <Image src={about4} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="About" />
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <p className="text-dark text-[13px] lg:text-[17px] font-medium leading-normal font-jetBrain mb-[100px] lg:mb-[130px] text-center px-4 max-w-[908px]">It is said that words cannot be unspoken, but they can be unwritten with MessageMoment’s in-the-moment chat service that guarantees your conversation is history. Start chatting now and experience the privacy and security of MessageMoment.</p>
        </div>
        {/* </div> */}
        <div className="relative max-w-[1320px] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[1320px] w-full max-lg:w-full max-md:w-full bg-blue rounded-xl flex items-center flex-col pb-[90px] lg:pb-28 relative">
              <Image src={chat} alt="Chat" className="w-[100px] h-[100px] lg:w-[128px] lg:h-[128px] absolute -top-[50px] lg:-top-[61px] " />
              <h3 className="text-[40px] font-bold pt-[79px] lg:pt-[117px] text-white text-center max-w-[1096px] px-4 max-lg:text-[24px]">We believe that words can be a powerful tool for connection and communication, but it's also true that words cannot be unspoken.</h3>
              <p className="text-white text-center text-[13px] lg:text-[17px] leading-6 font-medium mt-5 mb-[30px] lg:mb-[50px] max-w-[950px] px-36 max-md:px-4">That's why we created a live chat service that lets you unwrite those words, with a unique chat link and a secure, in-the-moment chat experience.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pb-[50px] lg:pb-[70px] relative z-10 -mt-[90px] lg:-mt-[113px] ">
            <Image src={bg1} className="rounded-[20px] max-w-[90%] h-[242px] object-cover max-lg:hidden" alt="Bg" />
            <Image src={bg2} className="lg:hidden rounded-[20px] h-[180px] object-cover max-w-[90%] max-lg:visible" alt="Bg" />
            <p className="text-center font-jetBrain text-[13px] lg:text-[17px] font-medium my-10 lg:mt-[70px] lg:mb-[30px] px-4 max-w-[950px]">Our team has developed a platform that is not only simple and easy to use, but also guarantees your conversation will be history. With no account registration necessary and a mobile- responsive design, you can chat on the go, without leaving a trace. It never happened! Our unique security features include the option to "Make Secure," by sharing a token password, ensuring that only those you invite can enter the chat.</p>
            <button onClick={handleScroll} className={`flex justify-center text-sm lg:text-[15px] items-center rounded-md h-[46px] w-[300px] px-5 bg-blue hover:bg-opacity-80 text-white font-jetBrain font-bold`}>
              Try MessageMoment
            </button>
          </div>
        </div>
      </div>

      <AboutTwoColumnSection bg={bg3} classes="lg:py-[120px] py-24" pr="pr-16" imgclassName="h-[200px] sm:h-[500px] min-w-full object-cover lg:w-[500px] lg:h-[300px] rounded-[20px] max-md:w-full" title="We take the privacy of our users seriously." des="We have implemented the appropriate security measures to protect your data. We understand the importance of having a safe and secure space to communicate, and MessageMoment provides just that." />
      <AboutTwoColumnSection bg={bg4} classes="flex-row-reverse lg:py-[120px] py-24" imgclassName="h-[200px] min-w-full sm:h-[500px] object-cover lg:w-[500px] lg:h-[300px] rounded-[20px] max-md:w-full" pr="pr-16" title={`The solution you've been searching for.`} des={`Our mission is to provide a reliable and trustworthy platform for discreet conversations between known parties. Whether you're looking to keep a conversation private or just need a secure space to communicate, MessageMoment is the solution you've been searching for.`} />

      <div className="relative mt-10 lg:mt-[60px]">
        <div className="px-[15px] flex flex-col items-center justify-center ">
          <div className="max-w-[1320px] w-full max-lg:w-full max-md:w-full bg-dark rounded-xl flex items-center flex-col pb-[89px] lg:pb-[110px]">
            <Image src={light} alt="Light" className="w-20 h-20 -top-10  lg:w-[128px] lg:h-[128px] absolute  lg:-top-[60px]" />
            <h3 className="text-[40px] font-bold  text-white text-center max-w-[1096px] px-4 mt-[70px] lg:mt-[140px] max-lg:text-[24px]">We are dedicated to delivering an unparalleled user experience and are always looking for ways to improve our services.</h3>
            <p className="text-white text-center text-[13px] lg:text-[17px] leading-6 font-medium mt-5 mb-10 lg:mb-20 max-w-[950px] px-36 max-md:px-4">
              If you have any questions, concerns, feedback or would like to advertise with MessageMoment, please do not hesitate to{' '}
              <Link href="/contact" className="font-medium underline">
                {' '}
                Contact Us
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center -mt-[89px] lg:-mt-[110px]">
          <div className="w-full flex justify-center gap-3 lg:gap-5 items-center overflow-x-auto">
            <Image src={dedicated1} className="h-[200px]  lg:w-[240px] lg:h-[242px]  rounded-[20px] object-cover hidden lg:block " alt="Dedicated" />
            <Image src={dedicated2} className="h-[200px] w-4/5 lg:w-[540px] lg:h-[242px]  rounded-[20px] object-cover hidden lg:block" alt="Dedicated2" />
            <Image src={dedicated3} className="h-[200px]  lg:w-[240px] lg:h-[242px]  rounded-[20px] object-cover hidden lg:block" alt="Dedicated3" />
            <Slider />
          </div>
          <p className="text-center font-jetBrain text-[13px] lg:text-[17px] font-medium mt-10 lg:mt-[50px] mb-[50px] px-4 max-w-[950px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nibh id nunc commodo scelerisque. Donec neque justo, hendrerit quis laoreet sed, consectetur vitae enim. Vestibulum elementum urna eu lectus feugiat laoreet. Donec tincidunt libero et urna laoreet accumsan. Curabitur at porta lectus, eget maximus neque. Nulla pellentesque nunc turpis, id interdum lacus consequat non. Donec nec placerat augue, nec vehicula metus.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
