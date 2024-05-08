'use client';
import { useAppContext } from '@/context/AppContext';
import React, { Fragment, useRef, useState } from 'react';
import HeaderButton from './HeaderButton';
import Image from 'next/image';
import LogoMini from '/public/images/chat-mini-logo.svg';
import fileShare from '/public/icons/file-share.svg';
import filePause from '/public/icons/file-pause.svg';
import LogoMiniWhite from '/public/images/chat-mini-logo-white.svg';
import { Dialog, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import ShareButtonChat from './ShareButtonChat';
import LeaveChatModal from './LeaveChatModal';

const ChatHeader = ({ setShowMenu, showMenu, timer = '30', darkText = false, handleLeave, showTimer = true }) => {
  const { isOpen, setIsOpen } = useAppContext();
  const [copyTooltip, setCopyTooltip] = useState(false);
  const [showTimerTooltip, setShowTimerTooltip] = useState(false);
  const [showPauseTimerTooltip, setShowPauseTimerTooltip] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copiedTooltip, setCopiedTooltip] = useState(false);
  const [showFileShare, setShowFileShare] = useState(false);
  const [fileModal, setFileModal] = useState(false);
  const topLink = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onCopyTopLink = () => {
    navigator.clipboard.writeText(topLink.current.innerText);
    setCopyTooltip(false);
    setCopiedTooltip(true);
    setTimeout(() => {
      setCopiedTooltip(false);
    }, 3000);
  };

  function handleCopyHover() {
    setCopiedTooltip(false);
    setCopyTooltip(true);
    setTimeout(() => {
      setCopyTooltip(false);
    }, 3000);
  }
  function timerHover() {
    setShowTimerTooltip(true);
    setTimeout(() => {
      setShowTimerTooltip(false);
    }, 3000);
  }

  function pauseTimerHover() {
    setShowPauseTimerTooltip(true);
    setTimeout(() => {
      setShowPauseTimerTooltip(false);
    }, 3000);
  }

  function handleChatMenu() {
    setShowMenu(prev => !prev);
    setShowShare(false);
  }

  function handleDisconnect() {
    setShowMenu(false);
    setShowShare(false);
  }

  function closeFileShare() {
    setShowFileShare(false);
  }

  function closeFileModal() {
    setFileModal(false);
  }

  function openFileModal() {
    setFileModal(true);
    setShowMenu(false);
  }

  function handleTimerButton() {
    setShowMenu(false);
  }

  return (
    <>
      <header className={`${showMenu ? 'bg-black border-t-black fixed left-0 right-0 top-0 z-10' : 'bg-white border-t-blue'}  border-t-[5px]`}>
        <nav className={`flex items-center w-full max-w-[1440px] mx-auto px-4 lg:px-6 py-5`}>
          <a href={`/`} target="_blank">
            {showMenu ? <Image src={LogoMiniWhite} alt="Mini Logo" className="h-10 min-w-[48px]" /> : <Image src={LogoMini} alt="Mini Logo" className="h-10 min-w-[48px]" />}
          </a>
          <div className={`border-l h-[86px] -my-6 border-lightGray mx-4 lg:mx-6 ${showMenu && 'opacity-0'}`} />
          <div className="flex items-center justify-end lg:justify-between grow relative">
            <div className="flex items-center justify-center max-lg:hidden">
              <svg className="mr-[15px] " xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                <path d="M2.05115 16C1.63211 16 1.27325 15.8507 0.974583 15.552C0.675916 15.2533 0.526837 14.8947 0.527345 14.4762V6.85714C0.527345 6.4381 0.676678 6.07924 0.975345 5.78057C1.27401 5.4819 1.63261 5.33283 2.05115 5.33333H2.81306V3.80952C2.81306 2.75556 3.18462 1.85702 3.92773 1.11391C4.67084 0.370794 5.56912 -0.000507416 6.62258 5.20427e-07C7.67655 5.20427e-07 8.57509 0.371556 9.3182 1.11467C10.0613 1.85778 10.4326 2.75606 10.4321 3.80952V5.33333H11.194C11.6131 5.33333 11.9719 5.48267 12.2706 5.78133C12.5692 6.08 12.7183 6.4386 12.7178 6.85714V14.4762C12.7178 14.8952 12.5685 15.2541 12.2698 15.5528C11.9712 15.8514 11.6126 16.0005 11.194 16H2.05115ZM6.62258 12.1905C7.04163 12.1905 7.40049 12.0411 7.69915 11.7425C7.99782 11.4438 8.1469 11.0852 8.14639 10.6667C8.14639 10.2476 7.99706 9.88876 7.69839 9.5901C7.39973 9.29143 7.04112 9.14235 6.62258 9.14286C6.20354 9.14286 5.84468 9.29219 5.54601 9.59086C5.24734 9.88952 5.09827 10.2481 5.09877 10.6667C5.09877 11.0857 5.24811 11.4446 5.54677 11.7432C5.84544 12.0419 6.20404 12.191 6.62258 12.1905ZM4.33687 5.33333H8.9083V3.80952C8.9083 3.1746 8.68608 2.63492 8.24163 2.19048C7.79719 1.74603 7.2575 1.52381 6.62258 1.52381C5.98766 1.52381 5.44798 1.74603 5.00354 2.19048C4.55909 2.63492 4.33687 3.1746 4.33687 3.80952V5.33333Z" fill="#92959D" />
              </svg>
              <p ref={topLink} className="cursor-pointer font-semibold" onClick={onCopyTopLink} onMouseEnter={handleCopyHover}>
                https://messagemoment.com/*********
              </p>
              <div className={` ${copyTooltip ? `animate-fade opacity-100` : 'opacity-0'} absolute top-full bg-black py-2 px-8 rounded-md z-10`}>
                <p className="text-white text-[12px] font-medium">Click to copy link</p>
                <svg className="absolute left-1/2 -top-[3px] transform -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                  <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
                </svg>
              </div>
              <div className={` ${copiedTooltip ? `animate-fade opacity-100` : 'opacity-0'} absolute top-full bg-black py-2 px-8 rounded-md z-10`}>
                <p className="text-white text-[12px] font-medium">Link copied to the clipboard</p>
                <svg className="absolute left-1/2 -top-[3px] transform -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                  <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="right flex items-center gap-[10px]">
              <div className={`relative ${!showTimer ? 'hidden' : ''}`} onMouseEnter={timerHover}>
                <HeaderButton event={handleTimerButton} classes={`${showMenu ? 'bg-white bg-opacity-10' : 'bg-midGray'} font-bold ${darkText ? 'text-dark' : 'text-lightGrey'}`} WidthFont="w-[66px] text-sm " name={timer} />
                <div className={` ${showTimerTooltip ? `animate-fade opacity-100 block` : 'opacity-0 hidden'} w-[150px] absolute left-1/2 transform -bottom-16 text-center -translate-x-1/2 bg-black py-2 px-2 rounded-md z-20`}>
                  <p className="text-white text-[12px] font-medium">
                    Message Expiry <br /> Time (seconds)
                  </p>
                  <svg className="absolute left-1/2 -top-[3px] transform -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                    <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
                  </svg>
                </div>
              </div>
              <div className={`relative ${showTimer ? 'hidden' : ''}`}>
                <div className="flex gap-1">
                  <div className="relative">
                    <button onClick={openFileModal} className={`flex items-center justify-evenly rounded-md h-[46px] w-[46px] ${showMenu ? '' : 'bg-[#ededed]'} border border-[rgb(237,237,237)] hover:bg-opacity-80`}>
                      <Image src={fileShare} alt="Share" />
                    </button>
                    <div className={`bg-[#000] rounded-[10px] lg:w-[428px] fixed z-20 max-lg:bottom-0 mt-3 max-xl:left-0 lg:absolute right-0 lg:-right-[22px] ${fileModal ? '' : 'hidden'} `}>
                      <div className="flex items-center justify-between p-[14px_20px_14px_30px]">
                        <h4 className="text-white text-sm font-medium">Project Mode Active</h4>
                        <a target="_blank" href="/faqs" className="font-jetBrain text-[10px] leading-none text-white max-lg:hidden">
                          Read More
                        </a>
                        <div className="lg:hidden">
                          <svg className="cursor-pointer" onClick={closeFileModal} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-4 pl-[30px] pr-10 bg-[#151515] lg:rounded-b-[10px]">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="60" viewBox="0 0 72 60" fill="none">
                            <g opacity="0.2">
                              <path d="M38.8285 1.68571C37.7428 0.6 36.2856 0 34.7714 0H19.9999C16.8571 0 14.3142 2.57143 14.3142 5.71429L14.2856 40C14.2856 43.1429 16.8571 45.7143 19.9999 45.7143H65.7142C68.8571 45.7143 71.4285 43.1429 71.4285 40V11.4286C71.4285 8.28571 68.8571 5.71429 65.7142 5.71429H42.8571L38.8285 1.68571Z" fill="white" />
                              <circle cx="20" cy="40" r="20" fill="#151515" />
                              <ellipse cx="20.0001" cy="40.0001" rx="14.2857" ry="14.2857" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M26.0265 37.4069C26.1954 37.5758 26.2903 37.8049 26.2903 38.0438C26.2903 38.2826 26.1954 38.5117 26.0265 38.6807L19.2744 45.4327C19.1852 45.522 19.0793 45.5928 18.9627 45.6411C18.8461 45.6894 18.7211 45.7143 18.5949 45.7143C18.4687 45.7143 18.3437 45.6894 18.2271 45.6411C18.1105 45.5928 18.0046 45.522 17.9154 45.4327L14.5607 42.0786C14.4746 41.9955 14.406 41.8961 14.3588 41.7862C14.3116 41.6763 14.2867 41.5581 14.2857 41.4385C14.2846 41.3189 14.3074 41.2002 14.3527 41.0895C14.398 40.9788 14.4649 40.8782 14.5495 40.7937C14.6341 40.7091 14.7347 40.6422 14.8454 40.5969C14.9561 40.5516 15.0747 40.5288 15.1943 40.5299C15.3139 40.5309 15.4321 40.5557 15.542 40.603C15.6519 40.6502 15.7513 40.7188 15.8344 40.8048L18.5946 43.565L24.7521 37.4069C24.8358 37.3232 24.9351 37.2568 25.0445 37.2114C25.1538 37.1661 25.271 37.1428 25.3893 37.1428C25.5077 37.1428 25.6249 37.1661 25.7342 37.2114C25.8435 37.2568 25.9429 37.3232 26.0265 37.4069Z" fill="#151515" stroke="#151515" strokeWidth="0.7" />
                            </g>
                          </svg>
                        </div>
                        <div className="border-l border-white border-opacity-20 h-20"></div>
                        <div>
                          <p className="text-white text-[13px] leading-[19px] font-medium font-jetBrain">
                            <svg className="inline-block mr-2.5" xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                              <circle cx="5.42871" cy="5" r="5" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.49461 3.43618C7.56028 3.50188 7.59718 3.59097 7.59718 3.68386C7.59718 3.77676 7.56028 3.86585 7.49461 3.93154L4.8688 6.55735C4.8341 6.59206 4.7929 6.61959 4.74756 6.63838C4.70221 6.65716 4.65362 6.66683 4.60454 6.66683C4.55546 6.66683 4.50686 6.65716 4.46151 6.63838C4.41617 6.61959 4.37497 6.59206 4.34027 6.55735L3.03566 5.25297C3.0022 5.22066 2.97551 5.182 2.95715 5.13926C2.93879 5.09652 2.92913 5.05055 2.92872 5.00403C2.92832 4.95751 2.93718 4.91138 2.9548 4.86833C2.97241 4.82528 2.99843 4.78616 3.03132 4.75327C3.06421 4.72038 3.10333 4.69436 3.14638 4.67675C3.18943 4.65913 3.23556 4.65027 3.28208 4.65067C3.3286 4.65108 3.37457 4.66074 3.41731 4.6791C3.46005 4.69746 3.49871 4.72415 3.53102 4.75761L4.60442 5.83101L6.99901 3.43618C7.03154 3.40363 7.07017 3.3778 7.11269 3.36018C7.15521 3.34256 7.20078 3.3335 7.24681 3.3335C7.29283 3.3335 7.33841 3.34256 7.38092 3.36018C7.42344 3.3778 7.46207 3.40363 7.49461 3.43618Z" fill="#151515" stroke="#151515" strokeWidth="0.7" />
                            </svg>
                            ChatGPT Integration
                          </p>
                          <p className="text-white text-[13px] leading-[19px] font-medium font-jetBrain">
                            <svg className="inline-block mr-2.5" xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                              <circle cx="5.42871" cy="5" r="5" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.49461 3.43618C7.56028 3.50188 7.59718 3.59097 7.59718 3.68386C7.59718 3.77676 7.56028 3.86585 7.49461 3.93154L4.8688 6.55735C4.8341 6.59206 4.7929 6.61959 4.74756 6.63838C4.70221 6.65716 4.65362 6.66683 4.60454 6.66683C4.55546 6.66683 4.50686 6.65716 4.46151 6.63838C4.41617 6.61959 4.37497 6.59206 4.34027 6.55735L3.03566 5.25297C3.0022 5.22066 2.97551 5.182 2.95715 5.13926C2.93879 5.09652 2.92913 5.05055 2.92872 5.00403C2.92832 4.95751 2.93718 4.91138 2.9548 4.86833C2.97241 4.82528 2.99843 4.78616 3.03132 4.75327C3.06421 4.72038 3.10333 4.69436 3.14638 4.67675C3.18943 4.65913 3.23556 4.65027 3.28208 4.65067C3.3286 4.65108 3.37457 4.66074 3.41731 4.6791C3.46005 4.69746 3.49871 4.72415 3.53102 4.75761L4.60442 5.83101L6.99901 3.43618C7.03154 3.40363 7.07017 3.3778 7.11269 3.36018C7.15521 3.34256 7.20078 3.3335 7.24681 3.3335C7.29283 3.3335 7.33841 3.34256 7.38092 3.36018C7.42344 3.3778 7.46207 3.40363 7.49461 3.43618Z" fill="#151515" stroke="#151515" strokeWidth="0.7" />
                            </svg>
                            Download Transcript
                          </p>
                          <p className="text-white text-[13px] leading-[19px] font-medium font-jetBrain">
                            <svg className="inline-block mr-2.5" xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                              <circle cx="5.42871" cy="5" r="5" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.49461 3.43618C7.56028 3.50188 7.59718 3.59097 7.59718 3.68386C7.59718 3.77676 7.56028 3.86585 7.49461 3.93154L4.8688 6.55735C4.8341 6.59206 4.7929 6.61959 4.74756 6.63838C4.70221 6.65716 4.65362 6.66683 4.60454 6.66683C4.55546 6.66683 4.50686 6.65716 4.46151 6.63838C4.41617 6.61959 4.37497 6.59206 4.34027 6.55735L3.03566 5.25297C3.0022 5.22066 2.97551 5.182 2.95715 5.13926C2.93879 5.09652 2.92913 5.05055 2.92872 5.00403C2.92832 4.95751 2.93718 4.91138 2.9548 4.86833C2.97241 4.82528 2.99843 4.78616 3.03132 4.75327C3.06421 4.72038 3.10333 4.69436 3.14638 4.67675C3.18943 4.65913 3.23556 4.65027 3.28208 4.65067C3.3286 4.65108 3.37457 4.66074 3.41731 4.6791C3.46005 4.69746 3.49871 4.72415 3.53102 4.75761L4.60442 5.83101L6.99901 3.43618C7.03154 3.40363 7.07017 3.3778 7.11269 3.36018C7.15521 3.34256 7.20078 3.3335 7.24681 3.3335C7.29283 3.3335 7.33841 3.34256 7.38092 3.36018C7.42344 3.3778 7.46207 3.40363 7.49461 3.43618Z" fill="#151515" stroke="#151515" strokeWidth="0.7" />
                            </svg>
                            No Message Expiry Time
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end px-[15px] border-t border-white border-opacity-10 pt-3 pb-4 bg-[#151515] lg:hidden">
                        <a href="/faqs" target="_blank" className="font-jetBrain text-[10px] leading-none text-white">
                          Read More
                        </a>
                      </div>
                      <svg className="absolute -top-[3px] right-10 max-lg:hidden" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                        <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <button onMouseEnter={pauseTimerHover} className={`flex items-center justify-evenly rounded-md h-[46px] w-[46px] ${showMenu ? '' : 'bg-[#f7f7f7]'} border border-[#f7f7f7] hover:bg-opacity-80 `}>
                      <Image src={filePause} alt="Pause" />
                    </button>

                    <div className={` ${showPauseTimerTooltip ? `animate-fade opacity-100 block` : 'opacity-0 hidden'} w-[150px] absolute left-1/2 transform -bottom-16 text-center -translate-x-1/2 bg-black py-2 px-2 rounded-md z-20`}>
                      <p className="text-white text-[12px] font-medium">
                        Message Expiry <br /> Time Disabled
                      </p>
                      <svg className="absolute left-1/2 -top-[3px] transform -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                        <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={`fixed inset-0 bg-white opacity-5 z-10 ${fileModal ? '' : 'hidden'}`} onClick={closeFileModal}></div>
              </div>

              <div className={`border-l lg:mx-[5px] h-[46px] ${showMenu ? 'border-white border-opacity-10' : 'border-lightGray'}`} />

              <ShareButtonChat showShare={showShare} setShowShare={setShowShare} setShowMenu={setShowMenu} bg="border" display={'block lg:hidden'} />
              <Menu as="div" className="relative inline-block">
                <Menu.Button onClick={handleDisconnect} className="rounded-md h-[46px] w-[46px] lg:w-[150px] lg:px-5 border font-bold text-sm hover:bg-errorColor hover:text-white">
                  <svg className="block lg:hidden mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                    <path d="M20 7.27273L16.3636 3.63636L16.3636 6.36364L8.18182 6.36364L8.18182 8.18182L16.3636 8.18182L16.3636 10.9091M-5.56327e-07 12.7273L-7.94752e-08 1.81818C-3.53665e-08 0.80909 0.818182 -8.38464e-07 1.81818 -7.94753e-07L12.7273 -3.17901e-07C13.2095 -2.96823e-07 13.6719 0.191558 14.0129 0.532533C14.3539 0.873508 14.5455 1.33597 14.5455 1.81818L14.5455 4.54545L12.7273 4.54545L12.7273 1.81818L1.81818 1.81818L1.81818 12.7273L12.7273 12.7273L12.7273 10L14.5455 10L14.5455 12.7273C14.5455 13.2095 14.3539 13.6719 14.0129 14.0129C13.6719 14.3539 13.2095 14.5455 12.7273 14.5455L1.81818 14.5455C1.33597 14.5455 0.873508 14.3539 0.532533 14.0129C0.191556 13.6719 -5.77405e-07 13.2095 -5.56327e-07 12.7273Z" fill="#CCCCCC" />
                  </svg>
                  <span className="hidden lg:block">Disconnect</span>
                </Menu.Button>

                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 w-[150px] shadow-lg focus:outline-none text-white">
                    <svg className="absolute left-1/2 transform -translate-x-1/2 -top-[3px]" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                      <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
                    </svg>
                    <button onClick={openModal} className=" w-full pt-[13px] pb-[14px] bg-[#000] border-b text-[14px] font-medium border-dark rounded-xl text-center">
                      Leave Chat
                    </button>
                  </Menu.Items>
                </Transition>
              </Menu>

              <ShareButtonChat showShare={showShare} setShowShare={setShowShare} setShowMenu={setShowMenu} bg="bg-blue text-white" display={'hidden lg:block'} />

              <button onClick={handleChatMenu} className={`${showMenu ? 'bg-white bg-opacity-10 opacity-90' : 'bg-blue hover:bg-opacity-80'} lg:hidden mx-auto flex items-center rounded-md w-[46px] h-[46px]`}>
                {!showMenu ? (
                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                    <path d="M0.833333 10H14.1667C14.625 10 15 9.625 15 9.16667C15 8.70833 14.625 8.33333 14.1667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0.833333 5.83333H14.1667C14.625 5.83333 15 5.45833 15 5C15 4.54167 14.625 4.16667 14.1667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333Z" fill="white" />
                  </svg>
                ) : (
                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="white" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        <hr />
      </header>

      {/* MODAL */}

      <LeaveChatModal isOpen={isOpen} closeModal={closeModal} handleLeave={handleLeave} />

      {/* <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                I accept
              </button>
              <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ChatHeader;
