'use client';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const CookiesFirstAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleButton() {
    setIsOpen(prev => !prev);
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
            </svg>
          ) : (
            <svg className="transform -rotate-90" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
            </svg>
          )}
          <h3 onClick={handleButton} className="text-[15px] max-lg:text-[13px] font-normal cursor-pointer font-jetBrain py-4 pl-2">
            Strictly necessary cookies
          </h3>
        </div>
        <button className={`cursor-pointer relative inline-block min-w-[56px] h-6 rounded-full p-1 first-of-type:disabled bg-blue bg-opacity-20 }`}>
          <div className="flex justify-between items-center p-[2px] text-white">
            <div>
              <FiCheck size={14} />
            </div>
          </div>
          <div className={`relative bottom-[18px] left-[17px] w-4 h-4 bg-white rounded-full transition-transform transform translate-x-full`}></div>
        </button>
      </div>
      <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <p className={isOpen ? 'text-[15px] max-md:text-[11px] font-normal leading-normal pb-4 max-h-min font-jetBrain' : 'max-h-0 overflow-hidden'}>These cookies are essential for the proper functioning of this website. Without these cookies, the website would not work properly.</p>
      </Transition>
    </>
  );
};

export default CookiesFirstAccordion;
