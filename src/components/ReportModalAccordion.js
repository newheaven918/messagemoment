'use client';
import { Transition } from '@headlessui/react';

const ReportModalAccordion = ({ handleButton, show, options, handleChange, selected }) => {
  return (
    <>
      <div onClick={handleButton} className="cursor-pointer px-4 border-b">
        <div className="flex justify-between items-center">
          {!selected ? <h3 className="text-[15px] max-lg:text-[13px] font-normal cursor-pointer font-jetBrain py-4 ">Select a reason</h3> : <h3 className="text-[15px] max-lg:text-[13px] font-normal cursor-pointer font-jetBrain py-4 ">{selected}</h3>}
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 5.78033C9.98744 6.07322 9.51256 6.07322 9.21967 5.78033L5.25 1.81066L1.28033 5.78033C0.987436 6.07322 0.512562 6.07322 0.219669 5.78033C-0.073224 5.48744 -0.073224 5.01256 0.219669 4.71967L4.71967 0.21967C5.01256 -0.0732236 5.48744 -0.0732236 5.78033 0.21967L10.2803 4.71967C10.5732 5.01256 10.5732 5.48744 10.2803 5.78033Z" fill="#292F52" />
            </svg>
          )}
        </div>
        {!selected ? <p className="text-[13px]  max-md:text-[11px] font-normal leading-normal pb-4 font-jetBrain">Help us maintain a safe and respectful community by choosing a motive that best describes your concern about the file.</p> : ''}
      </div>

      <Transition show={show} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        {options.map(option => (
          <div key={option.id} className="py-[10px] border-b px-4 flex items-start bg-[#fafafa] hover:bg-white hover:cursor-pointer">
            <div className="w-3.5 h-3.5 mr-[10px]">
              <input className="w-3.5 h-3.5" type="radio" id={option.id} value={option.option} checked={selected === option.option} onChange={handleChange} style={{ accentColor: '#363C4F' }} />
            </div>
            <div className="flex flex-col cursor-pointer">
              <label htmlFor={option.id} className="font-jetBrain text-[15px] font-normal leading-[23px] cursor-pointer">
                {option.option}
              </label>{' '}
              <label htmlFor={option.id} className=" text-[#777] font-jetBrain text-[13px] font-normal cursor-pointer">
                {option.details}
              </label>
            </div>
          </div>
        ))}
      </Transition>
    </>
  );
};

export default ReportModalAccordion;
