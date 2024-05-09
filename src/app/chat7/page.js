'use client';

import { useRef, useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat7 from '@/components/Chat7';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState(30);
  const [darkText, setDarkText] = useState(false);
  const inputField = useRef();

  function handleChatInput() {
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
      <Chat7 showMenu={showMenu} inputField={inputField} handleChatInput={handleChatInput} />
      <ChatLandscape />
    </>
  );
};

export default page;
