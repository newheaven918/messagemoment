'use client';

import { useState, createContext, useContext } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileChatNav, setMobileChatNav] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  const [reloadHome, setReloadHome] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatScroll, setChatScroll] = useState(true);
  const [shareButtonTooltip, setShareButtonTooltip] = useState(false);

  return <AppContext.Provider value={{ shareButtonTooltip, setShareButtonTooltip, chatScroll, setChatScroll, isOpen, setIsOpen, mobileNav, setMobileNav, mobileChatNav, setMobileChatNav, showCookies, setShowCookies, showCookiesModal, setShowCookiesModal, reloadHome, setReloadHome }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
