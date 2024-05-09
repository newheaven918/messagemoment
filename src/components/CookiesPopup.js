'use client';

import { useState } from 'react';
import cookies from '../../public/icons/cookies.png';
import Image from 'next/image';

const CookiesPopup = ({ handleCookiesPopup, showCookiesPopup, showPop, setShowPop }) => {
  const [showModal, setShowModal] = useState(true);

  function cookiesAccepted() {
    console.log('Cookies Accepted!');
    setShowModal(false);
  }
  function cookiesRejected() {
    console.log('Cookies Rejected!');
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        <>
          {showPop ? <div className={`opacity-90 fixed inset-0 z-40 bg-white ${!showCookiesPopup ? 'hidden' : 'block'}`}></div> : null}
          <div className={`overflow-x-hidden pt-28 lg:pt-0 left-[10px] right-[10px] bottom-0 fixed lg:inset-0 z-50 outline-none focus:outline-none ${showCookiesPopup ? 'hidden' : 'block'}`}>
            <div className="w-full lg:w-[440px] lg:absolute lg:right-2 lg:bottom-0 mb-[10px] lg:my-6 mx-auto max-w-3xl bg-white border border-black border-opacity-10 rounded-[10px]">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="max-w-[326px] h-[326px] w-full rounded-full bg-opacity-20 lg:bg-opacity-50 bg-blue  blur-[50px] absolute -z-10 left-1/2 transform -translate-x-1/2 -top-10 lg:-top-7 "></div>
                {/*header*/}
                <div className="px-5 border-black border-opacity-10 rounded-t relative">
                  <Image src={cookies} alt="Cookies" className="w-[80px] absolute left-1/2 transform -translate-x-1/2 -top-[51px] z-50 lg:-top-8 lg:-left-5 lg:transform-none" />
                  <h3 className="text-[17px] lg:text-[26px] mt-[52px] text-blue lg:mt-[25px] mb-[15px] lg:mb-[17px] font-bold text-center">We use cookies!</h3>
                  <button className="bg-transparent border-0 text-black absolute top-[27px] right-[30px] focus:outline-none hidden lg:block" onClick={() => setShowModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#ccc">
                      <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="#363C4F" />
                    </svg>
                  </button>
                </div>
                {/*body*/}

                <p className="text-[13px] lg:text-[15px] font-jetBrain leading-[23px] font-normal text-center px-5 lg:px-8 mb-5 lg:mb[30px]">
                  Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.{' '}
                  <u className="cursor-pointer font-bold" onClick={handleCookiesPopup}>
                    Let me choose
                  </u>
                  .
                </p>
                {/*footer*/}
                <div className="flex items-center justify-between px-5 pb-5 lg:p-6 gap-2 border-black border-opacity-10 rounded-b">
                  <button className="bg-blue font-jetBrain text-[15px] w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={cookiesAccepted}>
                    Accept All
                  </button>
                  <button className="bg-lightGrey font-jetBrain text-[15px] w-[180px] h-[46px] rounded-md text-dark ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={cookiesRejected}>
                    Reject All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CookiesPopup;
