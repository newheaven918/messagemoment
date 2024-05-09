'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat4 from '@/components/Chat4';
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
      <Chat4 showMenu={showMenu} />
      <ChatLandscape />
    </>
  );
};

export default page;
