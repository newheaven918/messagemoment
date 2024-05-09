'use client';

import { useState } from 'react';
import SidebarComponents3 from './ChatComponents3';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ChatSidebar from './ChatSidebar';
import ChatSticky from './ChatSticky';
import { useAppContext } from '@/context/AppContext';

const users = [];

const chats = [
  {
    errorMessage: [
      {
        id: 1,
        img: 'error',
        errorHEading: '[MessageMoment.com]',
        errorText: 'The token you entered is incorrect! Please try again.'
      },
      {
        id: 2,
        img: 'error',
        errorHEading: '[MessageMoment.com]',
        errorText: 'The chat session is full! There are currently 10/10 users joined.'
      }
    ]
  },
  {
    joinedMessage: [
      {
        id: 1,
        name: '[Richard]',
        text: 'Joined',
        color: 'red'
      },
      {
        id: 2,
        name: '[Aron]',
        text: 'Left',
        color: '#CCCCCC'
      },
      {
        id: 3,
        name: '[catalina]',
        text: 'Joined',
        color: 'red'
      }
    ]
  },
  {
    token: [
      {
        id: 1,
        image: 'tokenImage',
        text1: 'This chat session is protected using a secure token.',
        text2: '...',
        text3: '> Please enter the Token you received with your chat link:'
      }
    ]
  },
  {
    verify: [
      {
        id: 1,
        text: 'Verifying'
      }
    ]
  },
  {
    textMessage: [
      {
        id: 1,
        name: '[Laura]',
        message: 'hello everybody'
      },
      {
        id: 1,
        name: '[Theresa]',
        message: 'hi richard 👋🏻'
      }
    ]
  }
];

// for (let i = 0; i < chats[1].length; i++) {
//   console.log(chats[1].joinedMessage[i]);
// }

const Chat1 = ({ children, showMenu }) => {
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
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-sm font-jetBrain font-normal">{`> Please enter your Display Name to proceed:`}</p>
                    <p className="text-sm leading-5 font-normal font-jetBrain">---</p>
                    <p className="text-[10px] text-[#777] font-jetBrain font-normal">By proceeding, you agree that you are solely responsible for your actions and any content that you post or share during the chat session. MessageMoment does not assume any liability for the content posted by users or for any damages that may result from using this service.</p>
                  </div>
                </div>
              </div>
            </div>

            <AutoComplete options={options} onSelect={handleSelect} />
          </div>
        </div>
        <ChatSidebar allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat1;
