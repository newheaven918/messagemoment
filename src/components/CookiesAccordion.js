'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import parse from 'html-react-parser';
import ToggleButton from './ToggleButton';
import angleRight from '/public/icons/angle-right.png';
import angleRightActive from '/public/icons/angle-right-active.png';

const CookiesAccordion = ({ items }) => {
  const [openIndices, setOpenIndices] = useState([]);

  function toggleClick(index) {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  }

  const replaceAnchorTagsWithLinks = node => {
    if (node.type === 'tag' && node.name === 'a' && node.attribs.href) {
      const href = node.attribs.href;
      return (
        <Link href={href} key={href} className="text-blue">
          {parse(node.children[0].data)}
        </Link>
      );
    }
  };

  return (
    <>
      {items.map((currentE, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div className="accordion-item border border-light-gray border-solid px-4 rounded-md my-[10px]" key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="pb-3 lg:pb-0">
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
                    </svg>
                  ) : (
                    <svg className="transform -rotate-90" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
                    </svg>
                  )}
                </div>
                <h3 className="text-[15px] max-lg:text-[13px] font-normal cursor-pointer font-jetBrain pl-2 py-4" onClick={() => toggleClick(index)}>
                  {currentE.question}
                </h3>
              </div>
              <ToggleButton />
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <p className={isOpen ? 'text-[15px] max-md:text-[11px] font-normal leading-normal max-h-min font-jetBrain pb-4' : 'max-h-0 overflow-hidden'}>{parse(currentE.answer, { replace: replaceAnchorTagsWithLinks })}</p>
            </Transition>
          </div>
        );
      })}
    </>
  );
};

export default CookiesAccordion;
