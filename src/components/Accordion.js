import { Transition } from '@headlessui/react';
import { useState } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

import angleRight from '/public/icons/angle-right.png';
import angleRightActive from '/public/icons/angle-right-active.png';
import angleDownActive from '/public/icons/angle-down-active.png';

function Accordion({ items, setAccordions, accordions }) {
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

  function handleMouseEnter(id, index) {
    const newAccordion = accordions[0].listItem.find(item => item.id === id);
    newAccordion.hover = true;
    const newAccordions = [...accordions];
    newAccordions[0].listItem[index] = newAccordion;
    setAccordions(newAccordions);
  }

  function handleMouseLeave(id, index) {
    const newAccordion = accordions[0].listItem.find(item => item.id === id);
    newAccordion.hover = false;
    const newAccordions = [...accordions];
    newAccordions[0].listItem[index] = newAccordion;
    setAccordions(newAccordions);
  }

  return (
    <>
      {items.map((currentE, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div className="accordion-item border-b border-b-black border-opacity-10 py-[15px] last-of-type:border-none" key={index}>
            <div className="flex items-start lg:items-center">
              {isOpen ? (
                <svg className="mt-2 lg:mt-1 w-[9.5px] h-[5.5px] " xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#494AF8" />
                </svg>
              ) : (
                <>
                  {currentE.hover ? (
                    <svg className="mt-2 lg:mt-1 w-[6px] hidden md:block" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.201133 1.18326C0.0722813 1.05313 -3.63929e-07 0.877396 -3.71934e-07 0.694263C-3.79939e-07 0.511129 0.0722812 0.335397 0.201133 0.205262C0.264407 0.141012 0.339827 0.0899887 0.423006 0.0551615C0.506184 0.0203342 0.595458 0.00239942 0.685633 0.00239941C0.775808 0.00239941 0.865083 0.0203342 0.948261 0.0551614C1.03144 0.0899887 1.10686 0.141012 1.17013 0.205262L5.00013 4.11326C5.12881 4.24369 5.20095 4.41954 5.20095 4.60276C5.20095 4.78598 5.12881 4.96183 5.00013 5.09226L1.17013 9.00026C1.10686 9.06451 1.03144 9.11554 0.948261 9.15036C0.865083 9.18519 0.775809 9.20312 0.685634 9.20312C0.595459 9.20312 0.506184 9.18519 0.423006 9.15036C0.339828 9.11554 0.264407 9.06451 0.201134 9.00026C0.0722816 8.87013 -2.22373e-08 8.6944 -3.02423e-08 8.51126C-3.82473e-08 8.32813 0.0722816 8.1524 0.201134 8.02226L3.34213 4.60126L0.201133 1.18326Z" fill="#494AF8" />
                    </svg>
                  ) : (
                    <svg className="mt-2 lg:mt-1 w-[6px] hidden md:block" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.201133 1.18326C0.0722813 1.05313 -3.63929e-07 0.877396 -3.71934e-07 0.694263C-3.79939e-07 0.511129 0.0722812 0.335397 0.201133 0.205262C0.264407 0.141012 0.339827 0.0899887 0.423006 0.0551615C0.506184 0.0203342 0.595458 0.00239942 0.685633 0.00239941C0.775808 0.00239941 0.865083 0.0203342 0.948261 0.0551614C1.03144 0.0899887 1.10686 0.141012 1.17013 0.205262L5.00013 4.11326C5.12881 4.24369 5.20095 4.41954 5.20095 4.60276C5.20095 4.78598 5.12881 4.96183 5.00013 5.09226L1.17013 9.00026C1.10686 9.06451 1.03144 9.11554 0.948261 9.15036C0.865083 9.18519 0.775809 9.20312 0.685634 9.20312C0.595459 9.20312 0.506184 9.18519 0.423006 9.15036C0.339828 9.11554 0.264407 9.06451 0.201134 9.00026C0.0722816 8.87013 -2.22373e-08 8.6944 -3.02423e-08 8.51126C-3.82473e-08 8.32813 0.0722816 8.1524 0.201134 8.02226L3.34213 4.60126L0.201133 1.18326Z" fill="#363C4F" />
                    </svg>
                  )}

                  <svg className="mt-2 lg:mt-1 w-[6px] block md:hidden" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M0.201133 1.18326C0.0722813 1.05313 -3.63929e-07 0.877396 -3.71934e-07 0.694263C-3.79939e-07 0.511129 0.0722812 0.335397 0.201133 0.205262C0.264407 0.141012 0.339827 0.0899887 0.423006 0.0551615C0.506184 0.0203342 0.595458 0.00239942 0.685633 0.00239941C0.775808 0.00239941 0.865083 0.0203342 0.948261 0.0551614C1.03144 0.0899887 1.10686 0.141012 1.17013 0.205262L5.00013 4.11326C5.12881 4.24369 5.20095 4.41954 5.20095 4.60276C5.20095 4.78598 5.12881 4.96183 5.00013 5.09226L1.17013 9.00026C1.10686 9.06451 1.03144 9.11554 0.948261 9.15036C0.865083 9.18519 0.775809 9.20312 0.685634 9.20312C0.595459 9.20312 0.506184 9.18519 0.423006 9.15036C0.339828 9.11554 0.264407 9.06451 0.201134 9.00026C0.0722816 8.87013 -2.22373e-08 8.6944 -3.02423e-08 8.51126C-3.82473e-08 8.32813 0.0722816 8.1524 0.201134 8.02226L3.34213 4.60126L0.201133 1.18326Z" fill="#363C4F" />
                  </svg>
                </>
              )}
              <h3 className={`lg:text-[18px] text-[15px] font-medium cursor-pointer font-jetBrain ml-2 md:hover:text-blue ${isOpen ? 'text-blue' : 'text-dark'}`} onClick={() => toggleClick(index)} onMouseLeave={() => handleMouseLeave(currentE.id, index)} onMouseEnter={() => handleMouseEnter(currentE.id, index)}>
                {currentE.question}
              </h3>
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <p className={isOpen ? 'text-[13px] lg:text-[15px] font-normal leading-normal pt-[15px] lg:pb-[9px] pl-5 max-h-min font-jetBrain' : 'max-h-0 overflow-hidden'}>{parse(currentE.answer, { replace: replaceAnchorTagsWithLinks })}</p>
            </Transition>
          </div>
        );
      })}
    </>
  );
}

export default Accordion;
