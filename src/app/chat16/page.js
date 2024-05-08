'use client';

import { useRef, useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat16 from '@/components/Chat16';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState(120);
  const [darkText, setDarkText] = useState(true);
  const inputField = useRef();

  function handleChatInput() {
    return console.log('Clicked!');
    setTimer(inputField.current.value.replace('/timer', ''));
    setDarkText(true);
  }
  function handleLeave() {
    window.close();
    // let win = window.open('about:blank', '_self');
    // win.close();
  }

  return (
    <>
      <ChatHeader timer={timer} darkText={darkText} setShowMenu={setShowMenu} showMenu={showMenu} handleLeave={handleLeave} />
      <Chat16 showMenu={showMenu} inputField={inputField} handleChatInput={handleChatInput} />
      <ChatLandscape />
    </>
  );
};

export default page;
