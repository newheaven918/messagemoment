'use client';

import { useState } from 'react';
import Chat3 from '@/components/Chat3';
import ChatHeader from '@/components/ChatHeader';
import CookiesContainer from '@/components/CookiesContainer';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleLeave() {
    window.close();
    // let win = window.open('about:blank', '_self');
    // win.close();
  }
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} handleLeave={handleLeave} />
      <Chat3 showMenu={showMenu} />
      <ChatLandscape />
    </>
  );
};

export default page;
