'use client';

import { useState } from 'react';
import CookiesComponent from './CookiesComponent';
import CookiesPopup from './CookiesPopup';

const CookiesContainer = () => {
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const [showPop, setShowPop] = useState(true);
  function handleCookiesPopup() {
    setShowCookiesPopup(true);
  }

  return (
    <>
      <CookiesPopup handleCookiesPopup={handleCookiesPopup} showCookiesPopup={showCookiesPopup} setShowCookiesPopup={setShowCookiesPopup} showPop={showPop} setShowPop={setShowPop} />
      <CookiesComponent showCookiesPopup={showCookiesPopup} setShowCookiesPopup={setShowCookiesPopup} showPop={showPop} setShowPop={setShowPop} />
    </>
  );
};

export default CookiesContainer;
