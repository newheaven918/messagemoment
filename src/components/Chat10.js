'use client';

import { useState } from 'react';
import ad from '/public/icons/ad.svg';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ChatSidebar from './ChatSidebar';
import SidebarComponents2 from './ChatComponents2';
import ChatSticky from './ChatSticky';
import SidebarComponents from './ChatComponents';
import { useAppContext } from '@/context/AppContext';
const options = ['/leave', '/unlock', '/timer'];

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

const Chat10 = ({ showMenu, handleChatInput, inputField }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accordions, setAccordions] = useState(accordionCookiesList);
  const [disable, setDisable] = useState(true);
  const [allUsers, setAllUsers] = useState(users);
  const { chatScroll } = useAppContext();

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
                <SidebarComponents contentLeft="[Richard]" rounded="!bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#56ccf2]" contentRight="enean tempor nisl ut nulla sollicitudin, bibendum ultricies mi tempus. Nulla id euismod augue, fringilla mollis metus. Nulla facilisi." text=" text-errorColor" />
              </div>
            </div>
            <AutoComplete handleChatInput={handleChatInput} inputField={inputField} options={options} onSelect={handleSelect} />
          </div>
        </div>
        <ChatSidebar allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat10;
