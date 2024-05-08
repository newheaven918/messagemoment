'use client';
import { Fragment, useState } from 'react';
import report from '/public/icons/report.png';
import Image from 'next/image';
import CookiesFooterButtons from './CookiesFooterButtons';
import { Dialog, Transition } from '@headlessui/react';
import ReportModalAccordion from './ReportModalAccordion';
import ReportButton from './ReportButton';
import solidIcon from '/public/icons/solidcheck.svg';
const options = [
  {
    id: 1,
    option: 'Inappropiate Content',
    details: 'This file contains offensive, explicit, or inappropriate material that violates community guidelines or Terms of Use.'
  },
  {
    id: 2,
    option: 'Copyright Violation',
    details: 'The file appears to infringe upon copyright or intellectual property rights, such as unauthorized distribution of copyrighted material.'
  },
  {
    id: 3,
    option: 'Malicious Software',
    details: "The file seems to contain viruses, malware, or other harmful software that could compromise users' devices or data."
  },
  {
    id: 4,
    option: 'Privacy Concerns',
    details: 'The file includes personal or sensitive information without consent, potentially violating privacy and data protection regulations.'
  },
  {
    id: 5,
    option: 'Spam or Unwanted Content',
    details: 'The file is spam, unsolicited advertising, or irrelevant content that disrupts the user experience.'
  },
  {
    id: 6,
    option: 'Harassment or Bullying',
    details: 'The file is being used to harass, bully, or target individuals, creating an unsafe or hostile environment.'
  }
];

const ReportModal = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [disable, setDisable] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  // function handleButton() {
  //   setIsOpen(prev => !prev);
  // }

  const handleChange = event => {
    setSelected(event.target.value);
  };

  function handleButton() {
    setIsOpen(prev => !prev);
    setShow(prev => !prev);
  }

  const handleReport = () => {
    if (!selected) {
      setDisable(true);
    }
    setShowPopUp(true);
  };

  return (
    <>
      <Transition appear show as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <div className="fixed inset-0 ">
            <div className="flex min-h-full items-center justify-center p-4 bg-white bg-opacity-90">
              <Transition.Child enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <div className="">
                  <div className="max-w-[720px] mx-auto">
                    <div className="justify-center items-end lg:items-center overflow-x-hidden overflow-y-auto lg:inset-0 z-50 outline-none focus:outline-none bottom-0 ">
                      <div className="max-w-[648px] h-[648px] w-full rounded-full bg-opacity-20 lg:bg-opacity-50 bg-blue  blur-[50px] absolute left-1/2 transform -translate-x-1/2"></div>
                      <div className="border border-black border-opacity-10 rounded-lg shadow-lg relative flex flex-col h-[calc(100vh-220px)] mt-12 lg:pt-0 lg:max-h-[570px] xl:max-h-[650px] lg:w-[690px] bg-white outline-none focus:outline-none mb-[10px] lg:mb-0">
                        <div className="px-5 border-b border-solid border-black border-opacity-10 rounded-t gap-5 relative">
                          <Image src={report} alt="Cookies" className="w-[50px] lg:w-[80px] absolute -top-4 " />
                          <h3 className="text-[17px] lg:text-[26px] text-blue font-bold py-4 lg:py-5 ml-[65px] mr-7 lg:ml-[100px]">Report a FileMoment.com file</h3>
                          <button className="p-1 ml-auto bg-transparent border-0 text-black  absolute top-5 lg:top-7 right-5 lg:right-[30px] outline-none focus:outline-none" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                              <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="#363C4F" />
                            </svg>
                          </button>
                        </div>

                        {!showPopUp ? (
                          <div className="relative p-5 flex-auto px-[18px] overflow-y-auto max-h-[calc(100vh-300px)] custom-scrollbar">
                            <h5 className="text-blue text-[17px] leading-6 font-medium pb-[10px]">Welcome to our File Report Center</h5>

                            <p className="text-[15px] pb-[10px] max-lg:text-[13px]  font-jetBrain leading-[23px] font-normal text-justify ">MessageMoment was designed to provide a safe and secure environment for all our members. If you believe that a sent file violates our guidelines or Terms of Use, please use this reporting feature to bring it to our attention. This process is totally anonymous.</p>

                            <h5 className="text-blue text-[17px] leading-6 font-medium pb-[10px]">Why would you like to report this file?</h5>

                            <div className="accordion-lists">
                              <div className="accordion-lists ">
                                <div className="accordion-item border border-light-gray border-solid rounded-md my-[10px] " onClick={() => setIsOpen(prev => !prev)}>
                                  <ReportModalAccordion handleButton={handleButton} show={show} options={options} handleChange={handleChange} selected={selected} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative flex flex-col justify-center items-center p-5 flex-auto px-[18px] overflow-y-auto max-h-[calc(100vh-300px)] custom-scrollbar">
                            <div className="flex items-center justify-center flex-col lg:gap-5 max-w-[432px]">
                              <Image className="w-[50px] lg:w-[80px] max-lg:mb-5" src={solidIcon} alt="Icon" />
                              <p className="text-[17px] pb-[10px] max-lg:text-[13px] text-blue font-medium leading-[24px] text-center">Your reports help us maintain the integrity of our community and ensure that everyone can enjoy a positive experience.</p>
                              <p className="text-[15px] pb-[10px] max-lg:text-[13px] font-jetBrain text-dark font-normal leading-[24px] text-center">Our team will review the reported file promptly and take appropriate actions if necessary.</p>
                            </div>
                          </div>
                        )}

                        {showPopUp ? (
                          <div className="flex items-center justify-center gap-[10px] py-3.5 px-5 border-t">
                            <button className="bg-blue font-semibold font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={handleClose}>
                              Continue
                            </button>
                          </div>
                        ) : (
                          <ReportButton handleReport={handleReport} selected={selected} disable={disable} handleClose={handleClose} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReportModal;

<>
  {/* <div className="justify-center items-end lg:items-center flex h-screen w-screen overflow-x-hidden overflow-y-auto fixed lg:inset-0 z-50 outline-none focus:outline-none bottom-0 ">
    <div className="border border-black border-opacity-10 rounded-lg shadow-lg relative flex flex-col w-[calc(100%-20px)] h-[calc(100vh-220px)] mt-12 lg:pt-0 lg:max-h-[570px] xl:max-h-[650px] max-w-[670px] bg-white outline-none focus:outline-none mb-[10px] lg:mb-0">
      <div className="px-5 border-b border-solid border-black border-opacity-10 rounded-t gap-5 relative">
        <Image src={report} alt="Cookies" className="w-[60px] lg:w-[80px] absolute -top-4 lg:-top-6 " />
        <h3 className="text-[17px] lg:text-[26px] text-blue font-bold py-4 lg:py-5 text-center">Report a FileMoment.com File</h3>
        <button className="p-1 ml-auto bg-transparent border-0 text-black  absolute top-5 lg:top-7 right-5 lg:right-[30px] outline-none focus:outline-none" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="#363C4F" />
          </svg>
        </button>
      </div>

      <div className="relative p-5 flex-auto px-[18px] overflow-y-auto max-h-[calc(100vh-300px)] custom-scrollbar">
        <h5 className="text-blue text-[17px] leading-6 font-medium pb-[10px]">Welcome to our File Report Center</h5>

        <p className="text-[15px] pb-[10px] max-lg:text-[13px]  font-jetBrain leading-[23px] font-normal text-justify ">MessageMoment was designed to provide a safe and secure environment for all our members. If you believe that a sent file violates our guidelines or Terms of Use, please use this reporting feature to bring it to our attention. This process is totally anonymous.</p>

        <h5 className="text-blue text-[17px] leading-6 font-medium pb-[10px]">Welcome to our File Report Center</h5>

        <div className="accordion-lists">
          <div className="accordion-lists">
            <div className="accordion-item border border-light-gray border-solid rounded-md my-[10px]" onClick={() => setIsOpen(prev => !prev)}>
              <ReportModalAccordion handleButton={handleButton} show={show} options={options} handleChange={handleChange} selected={selected} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-5 flex-auto px-[18px] overflow-y-auto max-h-[calc(100vh-300px)] custom-scrollbar">
        <div className="flex items-center justify-center flex-col gap-5">
          <Image src={solidIcon} />
          <p className="text-[17px] pb-[10px] max-lg:text-[13px] mx-[120px] text-blue font-medium leading-[24px] text-center">Your reports help us maintain the integrity of our community and ensure that everyone can enjoy a positive experience.</p>
          <p className="text-[15px] pb-[10px] max-lg:text-[13px] font-jetBrain mx-[100px] text-dark font-normal leading-[24px] text-center">Our team will review the reported file promptly and take appropriate actions if necessary.</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[10px] py-3 mr-5 border-t">
        <button className="bg-blue  font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={handleReport}>
          Report File
        </button>
      </div>
      <ReportButton handleReport={handleReport} selected={selected} disable={disable} handleClose={handleClose} />
    </div>
  </div> */}
</>;
