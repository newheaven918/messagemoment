'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';

import lock from '/public/home/lock.png';
import standard from '/public/home/standard.svg';
import down from '/public/home/down.png';
import downBlack from '/public/home/down-black.png';
import reload from '/public/home/reload.png';
import qr from '/public/home/qr.png';
import copy from '/public/home/copy.png';
import CloudflareTurnstile from './CloudflareTurnstile';

const links = ['https://messagemoment.com/sqjgcf', 'https://messagemoment.com/sqjgcf', 'https://messagemoment.com/sqjgcf', 'https://messagemoment.com/sqjgcf'];
const LinkGenerateMobile = () => {
  const [secure, setSecure] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [code, setCode] = useState('');
  const [showQr, setShowQr] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  function handleSelect() {
    setSelectList(prev => !prev);
  }
  function handleSecure() {
    setSecure(true);
    setGeneratedLink('');
    setCode('');
    setSelectList(false);
  }
  function handleStandard() {
    setSecure(false);
    setGeneratedLink('');
    setCode('');
    setSelectList(false);
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
    setShowGenerate(prev => !prev);
  }
  const generateCodes = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);

    setCode(randIdx);
  };
  function copyTOClip() {
    navigator.clipboard.writeText(generatedLink);
  }
  function copyTOClipSecure() {
    navigator.clipboard.writeText(generatedLink + ' ' + code);
  }

  function handleCopy() {
    setShowCopy(prev => !prev);
  }

  function handleQr() {
    setShowQr(prev => !prev);
  }

  function handleChat() {
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
  return (
    <>
      <div className="bg-blue hidden max-lg:block max-w-[1096px] rounded-[20px] absolute max-lg:relative max-lg:bottom-10 -bottom-[110px] left-1/2 transform -translate-x-1/2 w-full mx-auto">
        <p className="pt-[19px] pb-[17px] font-medium text-sm lg:text-[17px] mx-[68px] lg:max-w-none text-white text-center">Click the button below to receive your random link that you can share with your friends any way you like!</p>
        <div className="link bg-black bg-opacity-20 rounded-[0_0_20px_20px] pt-[18px] px-[15px]  lg:px-[30px] lg:pt-[35px] lg:pb-[25px] pb-5">
          <div className="flex">
            <div className="flex items-center bg-white h-[50px] relative">
              {secure ? (
                <>
                  <div className="flex items-center flex-1 pr-[15px]">
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                      <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                    </svg>{' '}
                    <div className="cursor-pointer flex-1 flex items-center justify-between" onClick={handleSelect}>
                      <p className="mx-[10px] text-dark hover:text-opacity-70">Secure</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <Image src={standard} alt="Lock" className="ml-3" />{' '}
                    <div className="cursor-pointer flex items-center justify-between" onClick={handleSelect}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" className="mx-3">
                        <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex-1 flex">
              <p className={`flex-1 flex items-center font-jetBrain text-dark text-sm lg:text-[15px] border-l border-[#ddd] px-5 bg-white font-bold h-[50px] ${!secure && ''}`}>{generatedLink}</p>
              {secure && (
                <div className="w-[220px] flex items-center px-5 rounded-[0_5px_5px_0] font-jetBrain bg-white font-bold text-sm lg:text-[15px] border-l border-[#ddd]">
                  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                  </svg>{' '}
                  <p className="mx-5 text-dark">{code}</p>
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="flex justify-center items-center py-5 px-8 bg-white">
            <CloudflareTurnstile />
          </div>
          <div className="flex gap-5 mt-5 items-center">
            <div className="buttons pl-[6px] flex gap-[5px]">
              <div className="relative">
                <div className={`qr-code bg-black p-[10px] rounded-[10px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[66px] ${!showGenerate && 'animate-fade opacity-0'}`}>
                  <p className="text-white font-medium text-sm font-jetBrain">Regenerate</p>
                </div>
                {openChat ? (
                  <button onMouseEnter={handleGenerateTip} onMouseLeave={handleGenerateTip} onClick={secure ? generateLinkSecure : generateLink} className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] hover:bg-dark hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                      <path d="M21.0374 9.74766C20.7312 7.54382 19.7088 5.50181 18.1278 3.93618C16.5468 2.37055 14.4949 1.36816 12.2882 1.08342C10.0814 0.79868 7.84231 1.24739 5.91568 2.36042C3.98906 3.47345 2.48183 5.18907 1.62617 7.24298M1 2.23363V7.24298H6.00936M1 12.2523C1.30627 14.4562 2.32865 16.4982 3.90964 18.0638C5.49063 19.6295 7.54252 20.6318 9.74925 20.9166C11.956 21.2013 14.1951 20.7526 16.1217 19.6396C18.0484 18.5265 19.5556 16.8109 20.4113 14.757M21.0374 19.7664V14.757H16.0281" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <rect width="50" height="50" rx="5" fill="white" fillOpacity="0.1" />
                    <rect x="0.75" y="0.75" width="48.5" height="48.5" rx="4.25" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
                    <path d="M35.0374 23.7477C34.7312 21.5438 33.7088 19.5018 32.1278 17.9362C30.5468 16.3705 28.4949 15.3682 26.2882 15.0834C24.0814 14.7987 21.8423 15.2474 19.9157 16.3604C17.9891 17.4735 16.4818 19.1891 15.6262 21.243M15 16.2336V21.243H20.0094M15 26.2523C15.3063 28.4562 16.3286 30.4982 17.9096 32.0638C19.4906 33.6295 21.5425 34.6318 23.7493 34.9166C25.956 35.2013 28.1951 34.7526 30.1217 33.6396C32.0484 32.5265 33.5556 30.8109 34.4113 28.757M35.0374 33.7664V28.757H30.0281" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className="relative">
                <div className={`qr-code bg-black w-[428px] pb-[31px] rounded-[10px] overflow-hidden absolute left-[180px] transform -translate-x-1/2 bottom-[66px] ${!showQr && 'hidden'}`}>
                  <div className="flex justify-between items-center px-3 pt-[13px] pb-[14px] bg-[#000] rounded-t-lg">
                    <p className="text-white">Select Chat Type</p>
                    <svg onClick={handleQr} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="white" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center mt-[20px]">
                    <QRCode className="bg-white rounded-[10px] p-5 w-[260px] h-[260px]" value={generatedLink} />
                  </div>
                </div>
                {openChat ? (
                  <button onClick={handleQr} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white hover:bg-opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path d="M3.83333 3.83333H9.58333V9.58333H3.83333V3.83333ZM19.1667 3.83333V9.58333H13.4167V3.83333H19.1667ZM13.4167 14.375H15.3333V12.4583H13.4167V10.5417H15.3333V12.4583H17.25V10.5417H19.1667V12.4583H17.25V14.375H19.1667V17.25H17.25V19.1667H15.3333V17.25H12.4583V19.1667H10.5417V15.3333H13.4167V14.375ZM15.3333 14.375V17.25H17.25V14.375H15.3333ZM3.83333 19.1667V13.4167H9.58333V19.1667H3.83333ZM5.75 5.75V7.66667H7.66667V5.75H5.75ZM15.3333 5.75V7.66667H17.25V5.75H15.3333ZM5.75 15.3333V17.25H7.66667V15.3333H5.75ZM3.83333 10.5417H5.75V12.4583H3.83333V10.5417ZM8.625 10.5417H12.4583V14.375H10.5417V12.4583H8.625V10.5417ZM10.5417 5.75H12.4583V9.58333H10.5417V5.75ZM1.91667 1.91667V5.75H0V1.91667C0 1.40833 0.201934 0.920823 0.561379 0.561379C0.920823 0.201934 1.40833 0 1.91667 0L5.75 0V1.91667H1.91667ZM21.0833 0C21.5917 0 22.0792 0.201934 22.4386 0.561379C22.7981 0.920823 23 1.40833 23 1.91667V5.75H21.0833V1.91667H17.25V0H21.0833ZM1.91667 17.25V21.0833H5.75V23H1.91667C1.40833 23 0.920823 22.7981 0.561379 22.4386C0.201934 22.0792 0 21.5917 0 21.0833V17.25H1.91667ZM21.0833 21.0833V17.25H23V21.0833C23 21.5917 22.7981 22.0792 22.4386 22.4386C22.0792 22.7981 21.5917 23 21.0833 23H17.25V21.0833H21.0833Z" fill="#494AF8" />
                    </svg>
                  </button>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="105" height="50" viewBox="0 0 105 50" fill="none">
                    <rect x="55" width="50" height="50" rx="5" fill="white" />
                    <path d="M86.4545 33.1818H76.4545V20.4545H86.4545M86.4545 18.6364H76.4545C75.9723 18.6364 75.5099 18.8279 75.1689 19.1689C74.8279 19.5099 74.6364 19.9723 74.6364 20.4545V33.1818C74.6364 33.664 74.8279 34.1265 75.1689 34.4675C75.5099 34.8084 75.9723 35 76.4545 35H86.4545C86.9368 35 87.3992 34.8084 87.7402 34.4675C88.0812 34.1265 88.2727 33.664 88.2727 33.1818V20.4545C88.2727 19.9723 88.0812 19.5099 87.7402 19.1689C87.3992 18.8279 86.9368 18.6364 86.4545 18.6364ZM83.7273 15H72.8182C72.336 15 71.8735 15.1916 71.5325 15.5325C71.1916 15.8735 71 16.336 71 16.8182V29.5455H72.8182V16.8182H83.7273V15Z" fill="#CCCCCC" />
                    <rect width="50" height="50" rx="5" fill="white" />
                    <path d="M17.8333 17.8333H23.5833V23.5833H17.8333V17.8333ZM33.1667 17.8333V23.5833H27.4167V17.8333H33.1667ZM27.4167 28.375H29.3333V26.4583H27.4167V24.5417H29.3333V26.4583H31.25V24.5417H33.1667V26.4583H31.25V28.375H33.1667V31.25H31.25V33.1667H29.3333V31.25H26.4583V33.1667H24.5417V29.3333H27.4167V28.375ZM29.3333 28.375V31.25H31.25V28.375H29.3333ZM17.8333 33.1667V27.4167H23.5833V33.1667H17.8333ZM19.75 19.75V21.6667H21.6667V19.75H19.75ZM29.3333 19.75V21.6667H31.25V19.75H29.3333ZM19.75 29.3333V31.25H21.6667V29.3333H19.75ZM17.8333 24.5417H19.75V26.4583H17.8333V24.5417ZM22.625 24.5417H26.4583V28.375H24.5417V26.4583H22.625V24.5417ZM24.5417 19.75H26.4583V23.5833H24.5417V19.75ZM15.9167 15.9167V19.75H14V15.9167C14 15.4083 14.2019 14.9208 14.5614 14.5614C14.9208 14.2019 15.4083 14 15.9167 14H19.75V15.9167H15.9167ZM35.0833 14C35.5917 14 36.0792 14.2019 36.4386 14.5614C36.7981 14.9208 37 15.4083 37 15.9167V19.75H35.0833V15.9167H31.25V14H35.0833ZM15.9167 31.25V35.0833H19.75V37H15.9167C15.4083 37 14.9208 36.7981 14.5614 36.4386C14.2019 36.0792 14 35.5917 14 35.0833V31.25H15.9167ZM35.0833 35.0833V31.25H37V35.0833C37 35.5917 36.7981 36.0792 36.4386 36.4386C36.0792 36.7981 35.5917 37 35.0833 37H31.25V35.0833H35.0833Z" fill="#CCCCCC" />
                  </svg>
                )}
              </div>
              <div className="relative">
                <div className={`qr-code bg-black p-[10px] w-max rounded-[10px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[66px] ${!showCopy && 'animate-fade opacity-0'}`}>
                  <p className="text-white font-medium text-sm font-jetBrain">Copy URL</p>
                </div>

                {openChat && (
                  <button onMouseEnter={handleCopy} onMouseLeave={handleCopy} onClick={secure ? copyTOClipSecure : copyTOClip} className="cursor-pointer h-[50px] w-[50px] mr-[5px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white hover:bg-opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M15.4545 18.1818H5.45455V5.45455H15.4545M15.4545 3.63636H5.45455C4.97233 3.63636 4.50987 3.82792 4.1689 4.1689C3.82792 4.50987 3.63636 4.97233 3.63636 5.45455V18.1818C3.63636 18.664 3.82792 19.1265 4.1689 19.4675C4.50987 19.8084 4.97233 20 5.45455 20H15.4545C15.9368 20 16.3992 19.8084 16.7402 19.4675C17.0812 19.1265 17.2727 18.664 17.2727 18.1818V5.45455C17.2727 4.97233 17.0812 4.50987 16.7402 4.1689C16.3992 3.82792 15.9368 3.63636 15.4545 3.63636ZM12.7273 0H1.81818C1.33597 0 0.873508 0.191558 0.532533 0.532533C0.191558 0.873508 0 1.33597 0 1.81818V14.5455H1.81818V1.81818H12.7273V0Z" fill="#494AF8" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            {openChat ? (
              <button className="bg-white h-[50px] text-blue hover:text-opacity-80 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center">Open Chat</button>
            ) : (
              <button onClick={activeButton ? handleChat : handleChatApply} className={`bg-white h-[50px] ${activeButton ? 'text-lightGrey' : 'text-[#ccc]'} hover:text-opacity-80 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center`}>
                Generate Link
              </button>
            )}
          </div>
          <p className="text-[11px] lg:text-[13px] font-medium text-white text-center mt-[15px]">
            By starting this chat session, you agree to our <Link href={`/terms`}>Terms of Use</Link> and <Link href={`/privacy`}>Privacy Policy</Link>, and that you and everybody you share the chat link with is above 16 years of age.
          </p>
        </div>
      </div>
    </>
  );
};

export default LinkGenerateMobile;
