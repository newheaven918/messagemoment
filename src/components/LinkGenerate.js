'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import CloudflareTurnstile from './CloudflareTurnstile';
import LinkGenerateButtons from './LinkGenerateButtons';
import SecureTypeSelectionMobile from './SecureTypeSelectionMobile';
import SecurityCode from './SecurityCode';
import QRCodeComponent from './QRCodeComponent';

const LinkGenerate = () => {
  const [secure, setSecure] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [code, setCode] = useState('');
  const [showQr, setShowQr] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [openChatButton, setOpenChatButton] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  function handleSelect() {
    setSelectList(true);
  }

  function handleSecure() {
    setSecure(true);
    setGeneratedLink('');
    setCode('');
    setSelectList(false);
    setOpenChat(false);
    setOpenChatButton(false);
  }
  function handleStandard() {
    setSecure(false);
    setGeneratedLink('');
    setCode('');
    setSelectList(false);
    setOpenChat(false);
    setOpenChatButton(false);
  }

  const generateLink = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);
    const link = 'https://messagemoment.com/sqjgcf' + randIdx;
    setGeneratedLink(link);
  };

  const generateLinkSecure = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);
    const link = 'https://messagemoment.com/sqjgcf' + randIdx;
    setGeneratedLink(link);
    generateCodes();
  };

  function handleGenerateTip() {
    setShowGenerate(true);
    setTimeout(() => {
      setShowGenerate(false);
    }, 3000);
  }

  function handleGenerateTipLeave() {
    setShowGenerate(false);
  }

  function handleCopy() {
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 3000);
  }
  function handleCopyLeave() {
    setShowCopy(false);
  }

  const generateCodes = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);
    setCode(randIdx);
  };

  function copyTOClip() {
    navigator.clipboard.writeText(generatedLink);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 400);
  }
  function copyTOClipSecure() {
    navigator.clipboard.writeText(generatedLink + ' ' + code);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 400);
  }

  function handleQr() {
    setShowQr(prev => !prev);
  }

  function hideQr() {
    setShowQr(false);
  }

  function handleChat() {
    setOpenChatButton(true);
    setOpenChat(true);
    generateLink();
    generateLinkSecure();
  }

  function handleChatApply() {
    console.log('Please wait till the CloudflareTurnstile completes!');
  }

  useEffect(() => {
    setTimeout(() => {
      setActiveButton(true);
    }, 4000);
  }, []);

  function hideSelect() {
    setSelectList(false);
  }

  return (
    <>
      <div className="bg-blue max-w-[1096px] rounded-[20px] absolute z-50 -bottom-[400px] lg:-bottom-[110px] left-[15px] right-[15px] lg:right-auto lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full mx-auto" id="linkGenerate">
        <p className="py-7 font-medium text-sm lg:text-[17px] max-w-[261px] mx-auto lg:max-w-none text-white text-center">Click the button below to receive your random link that you can share with your friends any way you like!</p>
        <div className="link bg-black bg-opacity-20 rounded-[0_0_20px_20px] pt-[18px] px-[15px]  lg:px-[30px] lg:pt-[35px] lg:pb-[25px] pb-5">
          <div className="bg-white rounded-[5px] overflow-hidden lg:overflow-visible lg:bg-transparent lg:rounded-none">
            <div className="flex ">
              <div className="flex items-center w-[60px] lg:w-[140px] rounded-s-[5px] lg:rounded-[5px_0_0_5px] bg-white h-[50px] relative">
                {secure ? (
                  <>
                    <div className="lg:flex items-center flex-1 pr-[15px] hidden">
                      <svg className="ml-3 mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                      </svg>{' '}
                      <div className="cursor-pointer flex-1 flex items-center justify-between handle-select" onClick={handleSelect}>
                        <p className="mr-[10px] text-dark hover:text-opacity-70 hidden lg:block">Secure</p>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center flex-1 pr-[15px] lg:hidden" onClick={handleSelect}>
                      <svg className="ml-3 mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                      </svg>{' '}
                      <div className="cursor-pointer flex-1 flex items-center justify-between handle-select">
                        <p className="mr-[10px] text-dark hover:text-opacity-70 hidden lg:block">Secure</p>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="items-center flex-1 pr-[15px] hidden lg:flex">
                      <svg className="ml-3 mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z" fill="#CCCCCC" />
                      </svg>{' '}
                      <div className="cursor-pointer flex items-center justify-between handle-select" onClick={handleSelect}>
                        <p className="mr-[10px] text-dark hover:text-opacity-70 hidden lg:block ">Standard</p>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                        </svg>
                      </div>
                    </div>
                    <div onClick={handleSelect} className="flex items-center flex-1 pr-[15px] lg:hidden">
                      <svg className="ml-3 mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z" fill="#CCCCCC" />
                      </svg>{' '}
                      <div className="cursor-pointer flex items-center justify-between handle-select">
                        <p className="mr-[10px] text-dark hover:text-opacity-70 hidden lg:block ">Standard</p>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                <div className={`select absolute top-full left-0 w-full bg-black z-20 hidden ${selectList ? 'lg:block' : 'lg:hidden'}`}>
                  <div onClick={handleStandard} className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z" fill="#CCCCCC" />
                    </svg>{' '}
                    <p className="mx-5 cursor-pointer text-white">Standard</p>
                  </div>
                  <div onClick={handleSecure} className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                      <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                    </svg>{' '}
                    <p className="mx-5 cursor-pointer text-white">Secure</p>
                  </div>
                </div>
              </div>
              <div onClick={hideSelect} className={`select-overlay fixed inset-0 z-10 bg-white opacity-[0.01] ${selectList ? 'block' : 'hidden'}`}></div>
              <div className="flex-1 flex">
                <p className={`flex-1 flex items-center font-jetBrain text-dark text-[10px] sm:text-sm lg:text-[15px] border-l border-[#ddd] px-5 bg-white font-bold h-[50px] ${!secure && 'lg:rounded-[0_5px_5px_0]'}`}>{generatedLink}</p>
                {secure && <SecurityCode code={code} classes={`w-[220px] hidden lg:flex items-center px-5 rounded-[0_5px_5px_0] font-jetBrain bg-white font-bold text-sm lg:text-[15px] border-l border-[#ddd]`} />}
              </div>

              <LinkGenerateButtons classes="hidden lg:flex" showGenerate={showGenerate} openChat={openChat} showQr={showQr} generatedLink={generatedLink} showCopy={showCopy} handleGenerateTip={handleGenerateTip} handleGenerateTipLeave={handleGenerateTipLeave} secure={secure} generateLink={generateLink} handleQr={handleQr} copyTOClip={copyTOClip} copyTOClipSecure={copyTOClipSecure} generateLinkSecure={generateLinkSecure} />
            </div>

            {secure && <SecurityCode code={code} classes={`w-full h-[50px] justify-center border-t lg:hidden flex items-center px-5 font-jetBrain bg-white font-bold text-sm lg:text-[15px] border-[#ddd]`} />}

            <div className="lg:hidden border-y border-[#ddd] py-5 flex justify-center">
              <CloudflareTurnstile />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
            <div className="w-[300px] hidden lg:block">
              <CloudflareTurnstile />
            </div>
            <div className="grow w-full flex gap-[10px]">
              <LinkGenerateButtons classes="lg:hidden" showGenerate={showGenerate} openChat={openChat} showQr={showQr} generatedLink={generatedLink} showCopy={showCopy} handleGenerateTip={handleGenerateTip} handleGenerateTipLeave={handleGenerateTipLeave} secure={secure} generateLink={generateLink} handleQr={handleQr} copyTOClip={copyTOClip} copyTOClipSecure={copyTOClipSecure} generateLinkSecure={generateLinkSecure} />
              {openChatButton ? (
                <button className="bg-white h-[50px] lg:h-[65px] text-blue hover:text-opacity-80 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center w-full">Open Chat</button>
              ) : (
                <button onClick={activeButton ? handleChat : handleChatApply} className={`bg-white h-[50px] lg:h-[65px] ${activeButton ? 'text-blue' : 'text-[#ccc]'} hover:text-opacity-80 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center w-full`}>
                  Generate Link
                </button>
              )}
            </div>
          </div>
          <p className="text-[11px] lg:text-[13px] font-medium text-white text-center mt-[15px]">
            By starting this chat session, you agree to our <Link href={`/terms`}>Terms of Use</Link> and <Link href={`/privacy`}>Privacy Policy</Link>, and that you and everybody you share the chat link with is above 16 years of age.
          </p>
        </div>
      </div>
      <div onClick={hideSelect} className={`select-overlay fixed inset-0 z-10 bg-white opacity-[0.01] ${selectList ? 'block' : 'hidden'}`}></div>

      <SecureTypeSelectionMobile selectList={selectList} handleStandard={handleStandard} handleSecure={handleSecure} hideSelect={hideSelect} />
      <div className={`qr fixed bottom-0 left-0 right-0 w-full pb-3 z-[60] rounded-[10px] bg-black overflow-hidden lg:hidden ${showQr ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center px-3 pt-[13px] bg-[#000] pb-[14px]">
          <p className="text-white">Scan QR Code</p>
          <svg onClick={hideQr} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="white" />
          </svg>
        </div>
        <QRCodeComponent generatedLink={generatedLink} classes={`lg:hidden pt-5 w-full qr-code bg-black bg-cover bg-no-repeat p-[10px] w-full overflow-hidden ${!showQr ? 'hidden' : 'block'}`} />
      </div>
    </>
  );
};

export default LinkGenerate;
