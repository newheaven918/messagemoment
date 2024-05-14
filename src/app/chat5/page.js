'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat5 from '@/components/Chat5';
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
      <Chat5 showMenu={showMenu} />
      <ChatLandscape />
    </>
  );
};

export default page;
