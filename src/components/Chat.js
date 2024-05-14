'use client';

import { useState } from 'react';
import Image from 'next/image';
import SidebarComponents from './ChatComponents';
import SidebarComponents2 from './ChatComponents2';
import ad from '/public/icons/ad.svg';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ReportModal from './ReportModal';
import ChatSidebar from './ChatSidebar';
import ChatSticky from './ChatSticky';
import { useAppContext } from '@/context/AppContext';

const users = [
  {
    id: 1,
    name: '[Laura]',
    color: '#219653',
    message: 'Quisque eros massa!',
    joinedMessage: true
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
  }
];

const Chat = ({ showMenu, handleLeave }) => {
  const options = ['/leave', '/unlock', '/timer'];
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
                <div className=" bg-midGray px-4 py-5 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1"></div>
                  <div className="col-span-4 md:col-span-4 flex  ">
                    <div className="pt-[3px]"></div>
                    <p className="text-dark text-[13px] leading-5 lg:text-sm font-jetBrain  font-normal pl-[12px]">
                      <span className="flex lg:items-center">
                        <span className="w-[14px] mr-3 max-lg:mt-[2.5px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                            <path d="M1.33333 14C0.966668 14 0.652668 13.8693 0.391334 13.608C0.130001 13.3467 -0.000443313 13.0329 1.13186e-06 12.6667V6C1.13186e-06 5.63333 0.130668 5.31933 0.392001 5.058C0.653334 4.79667 0.967112 4.66622 1.33333 4.66667H2V3.33333C2 2.41111 2.32511 1.62489 2.97533 0.974667C3.62556 0.324445 4.41156 -0.000443989 5.33333 4.55373e-07C6.25556 4.55373e-07 7.04178 0.325112 7.692 0.975334C8.34222 1.62556 8.66711 2.41156 8.66667 3.33333V4.66667H9.33333C9.7 4.66667 10.014 4.79733 10.2753 5.05867C10.5367 5.32 10.6671 5.63378 10.6667 6V12.6667C10.6667 13.0333 10.536 13.3473 10.2747 13.6087C10.0133 13.87 9.69956 14.0004 9.33333 14H1.33333ZM5.33333 10.6667C5.7 10.6667 6.014 10.536 6.27533 10.2747C6.53667 10.0133 6.66711 9.69956 6.66667 9.33333C6.66667 8.96667 6.536 8.65267 6.27467 8.39133C6.01333 8.13 5.69956 7.99956 5.33333 8C4.96667 8 4.65267 8.13067 4.39133 8.392C4.13 8.65333 3.99956 8.96711 4 9.33333C4 9.7 4.13067 10.014 4.392 10.2753C4.65333 10.5367 4.96711 10.6671 5.33333 10.6667ZM3.33333 4.66667H7.33333V3.33333C7.33333 2.77778 7.13889 2.30556 6.75 1.91667C6.36111 1.52778 5.88889 1.33333 5.33333 1.33333C4.77778 1.33333 4.30556 1.52778 3.91667 1.91667C3.52778 2.30556 3.33333 2.77778 3.33333 3.33333V4.66667Z" fill="#363C4F" />
                          </svg>
                        </span>
                        This chat session is protected using a secure token.
                      </span>
                      <span className="inline-block my-2">...</span> <span className="flex"> {`> Please enter the Token you received with your chat link:`}</span>
                    </p>
                  </div>
                </div>
                <SidebarComponents contentRight="Verifying..." textRight="font-normal" />

                <SidebarComponents2 contentLeft="[MessageMoment.com]" contentRight="The chat session is full! There are currently 10/10 users joined." />
                <SidebarComponents2 contentLeft="[MessageMoment.com]" contentRight="The token you entered is incorrect! Please try again." />

                <SidebarComponents contentLeft="[MessageMoment.com]" textLeft="text-blue" contentRight="Verifying..." text=" text-errorColor" />
                <div className="bg-midGray px-4 py-5 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1"></div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">Thank you!</p>
                    <p className="text-[13px] leading-5 lg:text-sm font-normal font-jetBrain">---</p>
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">{`> Please enter your Display Name to proceed:`}</p>
                    <p className="text-[10px] text-[#777] font-jetBrain font-normal">By proceeding, you agree that you are solely responsible for your actions and any content that you post or share during the chat session. MessageMoment does not assume any liability for the content posted by users or for any damages that may result from using this service.</p>
                  </div>
                </div>
                <SidebarComponents contentLeft="[Richard]" textLeft="text-[#56CCF2]" contentRight="joined" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Laura]" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#219653]" contentRight="hello everybody" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Theresa]" rounded="bg-white !mt-0 !py-4" textLeft="text-[#EE5353]" contentRight="hi richard 👋🏻" text=" text-errorColor" />
                <div className=" bg-midGray px-4 py-5 rounded-lg grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-blue text-[13px] leading-5 lg:text-sm font-jetBrain ">[MessageMoment.com]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">{`> Please enter the Message Expiration Time (in seconds) between 3 and 300. This can only be set once for all users, by any user, at any time. If this value is is not defined, the default will be 30 seconds.`}</p>
                    <p className="text-[13px] leading-5 lg:text-sm font-normal font-jetBrain">...</p>
                    <p className="text-dark text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">
                      * Set it with the command <span className="text-blue">/timer [seconds]</span> *
                    </p>
                  </div>
                </div>
                <SidebarComponents contentLeft="[joannah]" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#5F27CD]" contentRight="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor felis nulla, eget pellentesque nulla blandit eu. Pellentesque porta ipsum orci, sit amet." text=" text-errorColor" />
                <SidebarComponents contentLeft="[Nina]" rounded="bg-white !mt-0 !py-4" textLeft="text-[#F368E0]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis. Duis porttitor felis nulla, eget pellentesque nulla blandit eu. Pellentesque porta ipsum orci, sit amet." text=" text-errorColor" />
                <SidebarComponents contentLeft="[Marcus]" rounded="bg-[#F7F7F7] rounded-lg" textLeft="text-[#704F2C]" contentRight="Left" text=" text-errorColor" />
                <div className="bg-blue bg-opacity-5 px-4 py-5 rounded-b-xl mt-[15px] border-t-[3px] border-t-blue grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1 flex items-center max-lg:mb-[5px]">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1.55556 0H12.4444C12.857 0 13.2527 0.163888 13.5444 0.455612C13.8361 0.747335 14 1.143 14 1.55556V12.4444C14 12.857 13.8361 13.2527 13.5444 13.5444C13.2527 13.8361 12.857 14 12.4444 14H1.55556C1.143 14 0.747335 13.8361 0.455612 13.5444C0.163888 13.2527 0 12.857 0 12.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0ZM7.77778 7.77778V3.11111H6.22222V7.77778H7.77778ZM7.77778 10.8889V9.33333H6.22222V10.8889H7.77778Z" fill="#494AF8" />
                    </svg>
                    <p className="text-blue text-[13px] leading-[13px] lg:leading-[20px] lg:text-sm font-jetBrain pl-[10px]">[MessageMoment]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex justify-between items-center">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">Message Expiry Time must be a value between 3 and 300.</p>
                  </div>
                </div>

                <SidebarComponents contentLeft="[Richard]" rounded="!bg-blue rounded-lg" textLeft="text-white" textRight="text-white font-semibold" contentRight="* Message Expiration Time set for 120 secs *" text=" text-errorColor" />
                <SidebarComponents rounded="bg-white !mt-0 !py-4" contentLeft="[william]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis " textLeft="text-[#6FCF97]" />
                <SidebarComponents contentLeft="[Aron]" rounded={'!mt-0'} contentRight="Joined " textLeft="text-[#704F2C]" />
                <SidebarComponents contentLeft="[catalina]" contentRight="Joined " textLeft="text-[#EDC447]" />
                <div className="p-4 rounded-t-lg grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-[13px] leading-5 lg:text-sm font-semibold font-jetBrain max-lg:mb-[5px] text-[#5F27CD]">[joannah]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4">
                    <p className="text-dark text-[13px] leading-5 lg:text-sm font-jetBrain">Richard, please check this image. I guess you know what’s about!</p>
                    <p className="text-blue text-[13px] leading-5 lg:text-sm font-jetBrain mt-[15px] mb-[18px] break-words">
                      <a href="https://filemoment.com/sqjgcf9o2s5narz8k" target="_blank">
                        https://filemoment.com/sqjgcf9o2s5narz8k
                      </a>
                    </p>
                    <div className="flex justify-between items-center bg-midGray pl-[11px] pr-[20px] rounded-xl max-lg:hidden">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.9 10.98L8 13.51L11.1 9.52C11.3 9.26 11.7 9.26 11.9 9.53L15.41 14.21C15.4657 14.2843 15.4996 14.3726 15.508 14.4651C15.5163 14.5576 15.4987 14.6506 15.4572 14.7336C15.4157 14.8167 15.3519 14.8865 15.2729 14.9353C15.1939 14.9841 15.1029 15.01 15.01 15.01H3.02C2.6 15.01 2.37 14.53 2.63 14.2L5.12 11C5.31 10.74 5.69 10.73 5.9 10.98Z" fill="#CCCCCC" />
                        </svg>
                        <p className="text-dark font-jetBrain text-[13px] leading-5 lg:text-sm ml-[11px] break-all">img_12839_03.jpg</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-dark text-[13px] leading-5 lg:text-sm font-normal font-jetBrain px-2 lg:pr-5 border-r py-[11px]">7.5 MB</p>
                        <button className="text-blue text-[13px] leading-5 lg:text-sm font-jetBrain font-medium ml-5 ">Download</button>
                      </div>
                    </div>
                    <div className="bg-midGray lg:hidden rounded-lg">
                      <div className="flex justify-between items-center pl-[11px] pr-[20px] border-b border-[#eee] py-[10px]">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.9 10.98L8 13.51L11.1 9.52C11.3 9.26 11.7 9.26 11.9 9.53L15.41 14.21C15.4657 14.2843 15.4996 14.3726 15.508 14.4651C15.5163 14.5576 15.4987 14.6506 15.4572 14.7336C15.4157 14.8167 15.3519 14.8865 15.2729 14.9353C15.1939 14.9841 15.1029 15.01 15.01 15.01H3.02C2.6 15.01 2.37 14.53 2.63 14.2L5.12 11C5.31 10.74 5.69 10.73 5.9 10.98Z" fill="#CCCCCC" />
                          </svg>
                          <p className="text-dark font-jetBrain text-[13px] leading-5 lg:text-sm ml-[11px] break-all">img_12839_03.jpg</p>
                        </div>
                        <div className="flex items-center">
                          <button className="text-blue text-[13px] leading-5 lg:text-sm font-jetBrain font-medium ml-5 ">Download</button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pl-[11px] pr-[20px]">
                        <div className="flex items-center">
                          <p className="text-dark text-[13px] leading-5 lg:text-sm font-normal font-jetBrain px-2 lg:pr-5 py-[10px]">7.5 MB</p>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M6.84444 0H3.15556C3.01111 0 2.86667 0.0611111 2.76667 0.161111L0.161111 2.76667C0.0611111 2.86667 0 3.01111 0 3.15556V6.83889C0 6.98889 0.0611111 7.12778 0.161111 7.23333L2.76111 9.83333C2.86667 9.93889 3.01111 10 3.15556 10H6.83889C6.98889 10 7.12778 9.93889 7.23333 9.83889L9.83333 7.23889C9.88507 7.18716 9.92597 7.12563 9.95364 7.0579C9.9813 6.99017 9.99517 6.9176 9.99444 6.84444V3.15556C9.99444 3.00556 9.93333 2.86667 9.83333 2.76111L7.23333 0.161111C7.13333 0.0611111 6.98889 0 6.84444 0ZM5 7.94444C4.6 7.94444 4.27778 7.62222 4.27778 7.22222C4.27778 6.82222 4.6 6.5 5 6.5C5.4 6.5 5.72222 6.82222 5.72222 7.22222C5.72222 7.62222 5.4 7.94444 5 7.94444ZM5 5.55556C4.69444 5.55556 4.44444 5.30556 4.44444 5V2.77778C4.44444 2.47222 4.69444 2.22222 5 2.22222C5.30556 2.22222 5.55556 2.47222 5.55556 2.77778V5C5.55556 5.30556 5.30556 5.55556 5 5.55556Z" fill="#CCCCCC" />
                            </svg>
                            <button onClick={handleOpen} className="text-[10px] text-[#777] font-jetBrain underline ml-[6px] cursor-pointer">
                              Report File
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-[11px] lg:hidden">
                      <div className="w-[14px]">
                        <svg className="w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6.88173 10.7453L4.18164 8.04457L5.08146 7.14476L6.88173 8.94439L10.481 5.34448L11.3815 6.24494L6.88173 10.744V10.7453Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="0.2" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M1 8C1 4.13409 4.13409 1 8 1C11.8659 1 15 4.13409 15 8C15 11.8659 11.8659 15 8 15C4.13409 15 1 11.8659 1 8ZM8 13.7273C7.24788 13.7273 6.50313 13.5791 5.80827 13.2913C5.1134 13.0035 4.48203 12.5816 3.95021 12.0498C3.41838 11.518 2.99651 10.8866 2.70869 10.1917C2.42087 9.49687 2.27273 8.75212 2.27273 8C2.27273 7.24788 2.42087 6.50313 2.70869 5.80827C2.99651 5.1134 3.41838 4.48203 3.95021 3.95021C4.48203 3.41838 5.1134 2.99651 5.80827 2.70869C6.50313 2.42087 7.24788 2.27273 8 2.27273C9.51897 2.27273 10.9757 2.87613 12.0498 3.95021C13.1239 5.02428 13.7273 6.48103 13.7273 8C13.7273 9.51897 13.1239 10.9757 12.0498 12.0498C10.9757 13.1239 9.51897 13.7273 8 13.7273Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="0.2" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-[#777] font-jetBrain ml-[6px]">
                        Securely checked and hosted by FileMomment. Visit{' '}
                        <a href="http://www.filemoment.com/" target="_blank" className="underline">
                          www.filemoment.com
                        </a>
                        !
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-[11px] max-lg:hidden">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6.88173 10.7453L4.18164 8.04457L5.08146 7.14476L6.88173 8.94439L10.481 5.34448L11.3815 6.24494L6.88173 10.744V10.7453Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="0.2" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M1 8C1 4.13409 4.13409 1 8 1C11.8659 1 15 4.13409 15 8C15 11.8659 11.8659 15 8 15C4.13409 15 1 11.8659 1 8ZM8 13.7273C7.24788 13.7273 6.50313 13.5791 5.80827 13.2913C5.1134 13.0035 4.48203 12.5816 3.95021 12.0498C3.41838 11.518 2.99651 10.8866 2.70869 10.1917C2.42087 9.49687 2.27273 8.75212 2.27273 8C2.27273 7.24788 2.42087 6.50313 2.70869 5.80827C2.99651 5.1134 3.41838 4.48203 3.95021 3.95021C4.48203 3.41838 5.1134 2.99651 5.80827 2.70869C6.50313 2.42087 7.24788 2.27273 8 2.27273C9.51897 2.27273 10.9757 2.87613 12.0498 3.95021C13.1239 5.02428 13.7273 6.48103 13.7273 8C13.7273 9.51897 13.1239 10.9757 12.0498 12.0498C10.9757 13.1239 9.51897 13.7273 8 13.7273Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="0.2" strokeLinejoin="round" />
                        </svg>
                        <p className="text-[10px] text-[#777] font-jetBrain ml-[6px]">
                          Securely checked and hosted by FileMomment. Visit{' '}
                          <a href="http://www.filemoment.com/" target="_blank" className="underline">
                            www.filemoment.com
                          </a>
                          !
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M6.84444 0H3.15556C3.01111 0 2.86667 0.0611111 2.76667 0.161111L0.161111 2.76667C0.0611111 2.86667 0 3.01111 0 3.15556V6.83889C0 6.98889 0.0611111 7.12778 0.161111 7.23333L2.76111 9.83333C2.86667 9.93889 3.01111 10 3.15556 10H6.83889C6.98889 10 7.12778 9.93889 7.23333 9.83889L9.83333 7.23889C9.88507 7.18716 9.92597 7.12563 9.95364 7.0579C9.9813 6.99017 9.99517 6.9176 9.99444 6.84444V3.15556C9.99444 3.00556 9.93333 2.86667 9.83333 2.76111L7.23333 0.161111C7.13333 0.0611111 6.98889 0 6.84444 0ZM5 7.94444C4.6 7.94444 4.27778 7.62222 4.27778 7.22222C4.27778 6.82222 4.6 6.5 5 6.5C5.4 6.5 5.72222 6.82222 5.72222 7.22222C5.72222 7.62222 5.4 7.94444 5 7.94444ZM5 5.55556C4.69444 5.55556 4.44444 5.30556 4.44444 5V2.77778C4.44444 2.47222 4.69444 2.22222 5 2.22222C5.30556 2.22222 5.55556 2.47222 5.55556 2.77778V5C5.55556 5.30556 5.30556 5.55556 5 5.55556Z" fill="#CCCCCC" />
                        </svg>
                        <button onClick={handleOpen} className="text-[10px] text-[#777] font-jetBrain underline ml-[6px] cursor-pointer">
                          Report File
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {show ? <ReportModal handleClose={handleClose} /> : null}
                {/* <FileUploadPopup /> */}
              </div>
            </div>

            <AutoComplete options={options} onSelect={handleSelect} />
          </div>
        </div>
        <ChatSidebar ad={ad} video={true} allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat;
