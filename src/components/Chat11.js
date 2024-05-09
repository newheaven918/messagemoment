'use client';

import { useState } from 'react';
import ad from '/public/icons/ad.svg';
import clip from '/public/icons/clip.svg';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ChatSidebar from './ChatSidebar';
import SidebarComponents2 from './ChatComponents2';
import ChatSticky from './ChatSticky';
import SidebarComponents from './ChatComponents';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';

const users = [
  {
    id: 1,
    name: '[Laura]'
  },
  {
    id: 2,
    name: '[Richard]',
    active: true
  },
  {
    id: 3,
    name: '[michael]'
  },
  {
    id: 4,
    name: '[joannah]'
  },
  {
    id: 5,
    name: '[Nina]'
  },
  {
    id: 6,
    name: '[michael]'
  },
  {
    id: 7,
    name: '[theresa]'
  },
  {
    id: 8,
    name: '[Aron]'
  },
  {
    id: 9,
    name: '[catalina]'
  },
  {
    id: 10,
    name: '[Robert]'
  }
];

const Chat11 = ({ showMenu, handleChatInput, inputField }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accordions, setAccordions] = useState(accordionCookiesList);
  const [disable, setDisable] = useState(true);
  const [allUsers, setAllUsers] = useState(users);
  const { chatScroll } = useAppContext();
  const options = ['/leave', '/unlock', '/timer'];

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSelect = options => {
    setSelectedOption(options);
  };
  const handleReportFile = () => {
    setDisable(false);
  };
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_220px] gap-3 lg:mt-6 max-w-[1440px] mx-auto bg-white lg:pb-5">
        <div className="bg-white max-lg:h-[calc(100vh-220px)] max-lg:overflow-hidden h-[calc(100vh-136px)]">
          <div className={`h-full ${chatScroll ? 'overflow-y-auto' : 'overflow-hidden'} custom-scrollbar flex flex-col justify-between`}>
            <div className={`h-[calc(100%-120px)] ${chatScroll ? 'overflow-y-auto' : 'overflow-hidden lg:pr-1.5'} custom-scrollbar`}>
              <ChatSticky />
              <div className="pb-8 px-3 lg:px-4">
                <div className={`border-[#eee] px-4 rounded-[10px] !bg-white border-b !mt-0 !py-4 !rounded-b-none grid grid-cols-1 lg:grid-cols-5`}>
                  <div className="col-span-1 md:col-span-1">
                    <p className={`text-[#56ccf2] lg:text-sm text-[13px] leading-5 font-jetBrain font-semibold max-lg:mb-[5px]`}>[Richard]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex justify-between items-center">
                    <p className={`text-dark text-[13px] leading-5 lg:text-sm font-jetBrain`}>
                      <span className="text-blue">{'[MM]'}</span> How many days until march 29?
                    </p>
                  </div>
                </div>
                <div className=" bg-midGray px-4 py-5 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-blue lg:text-sm text-[13px] leading-5 font-jetBrain font-semibold max-lg:mb-[5px]">[MessageMoment.com]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2">
                    <p className={`text-dark text-[13px] leading-5 lg:text-sm font-jetBrain flex items-center gap-2`}>
                      <Image className="inline-block mr-1 mb-[1px]" src={clip} alt="Clip" /> Today is March 10, 2023. So there are 19 days until March 29, 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <AutoComplete handleChatInput={handleChatInput} inputField={inputField} options={options} onSelect={handleSelect} />
          </div>
        </div>
        <ChatSidebar ad={ad} allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat11;
