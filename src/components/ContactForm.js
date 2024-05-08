'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CloudflareTurnstile from './CloudflareTurnstile';
import icon from '/public/icons/email.svg';
import messageImg from '/public/images/message.svg';
import BlurSection from './BlurSection';

const ContactForm = () => {
  const [userInputs, setUserInputs] = useState({
    fName: '',
    lName: '',
    email: '',
    option: '',
    message: ''
  });

  const [userValidation, setUserValidation] = useState({
    fName: false,
    lName: false,
    email: false,
    option: false,
    message: false
  });

  const [character, setCharacter] = useState(1500);
  const [activeBtn, setActiveBtn] = useState(false);
  const [validate, setValidate] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { fName, lName, email, option, message } = userInputs;
  let valid;

  function checkValidate(e) {
    if (e.target.name === 'email') {
      valid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value);
      setValidate(valid);
      if (valid) {
        setUserValidation(prev => ({ ...prev, [e.target.name]: false }));
        return;
      } else {
        setUserValidation(prev => ({ ...prev, [e.target.name]: true }));
        return;
      }
    }

    let val = e.target.value;
    if (val.trim()) {
      setUserValidation(prev => ({ ...prev, [e.target.name]: false }));
      return;
    }
    return setUserValidation(prev => ({ ...prev, [e.target.name]: true }));
  }

  function handleChange(e) {
    if (e.target.name === 'email') {
      valid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value);
      setValidate(valid);
    }
    setUserInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function handleTextCount() {
    const remainingCount = 1500 - userInputs.message.length;
    setCharacter(remainingCount);
  }

  useEffect(() => {
    if (fName.trim() && lName.trim() && email.trim() && option.trim() && message.trim() && validate) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [fName, lName, email, option, message]);

  useEffect(() => {
    setShowPopup(false);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] pb-[50px] lg:pb-[100px] ">
        <div className="flex items-center flex-col">
          <Image src={icon} className="mt-[50px] w-[80px] h-[80px] lg:w-[128px] lg:h-[128px]" alt="email" />
          <h2 className="text-4xl text-dark mt-[30px] font-bold mb-7">Contact Us</h2>
          <p className="text-[17px] text-center text-dark">
            Need answers or help? We might have answered your question in our{' '}
            <Link href="/faqs" className="text-blue">
              FAQs
            </Link>
            .{' '}
          </p>
          <p className="mb-[30px] text-[17px] text-center mt-2 text-dark">Otherwise complete this form on the topic relevant to your query.</p>
        </div>

        <form className="border rounded-[10px] max-w-[1096px] pt-[50px] pb-[39px] px-5 sm:px-12 lg:px-28 mx-auto border-black border-opacity-10 bg-white flex flex-col gap-[15px] lg:gap-5 w-full" onSubmit={handleForm}>
          <div className="flex flex-wrap md:flex-nowrap gap-[15px] md:gap-5">
            <div className="w-full">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="firstName">
                First Name*
              </label>
              <input className={`bg-white appearance-none block w-full font-jetBrain border text-[15px] h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md ${userValidation.fName ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} id="firstName" type="text" name="fName" required placeholder="Enter your first name" autoComplete="off" aria-autocomplete="off" onChange={handleChange} onBlur={checkValidate} />
            </div>
            <div className="w-full">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="lastName">
                Last Name*
              </label>
              <input className={`bg-white appearance-none block w-full font-jetBrain border text-[15px] h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md required ${userValidation.lName ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} name="lName" id="lastName" type="text" required placeholder="Enter your last name" onChange={handleChange} onBlur={checkValidate} />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="email">
                Email Address*
              </label>
              <input className={`bg-white appearance-none block w-full font-jetBrain border  text-[15px] h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md ${userValidation.email ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} id="email" type="email" placeholder="Enter your email address" name="email" required onChange={handleChange} onBlur={checkValidate} />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label htmlFor="option" className="block text-[17px] font-medium mb-[10px]">
                Select a topic*
              </label>
              <div className="relative">
                <select className={`block w-full font-jetBrain border appearance-none h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight text-[15px] focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md required text-dark bg-white ${userInputs.option ? '' : 'text-opacity-30'} ${userValidation.option ? 'text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none vvs:text-opacity-100' : 'border-black border-opacity-10 text-dark'}`} name="option" onChange={handleChange} onBlur={checkValidate} required id="option">
                  <option defaultChecked className="text-dark text-opacity-30 text-[15px]" value="">
                    Select
                  </option>
                  <option value="1" className="text-[15px]">
                    One
                  </option>
                  <option value="2" className="text-[15px]">
                    Two
                  </option>
                  <option value="3" className="text-[15px]">
                    Three
                  </option>
                  <option value="4" className="text-[15px]">
                    Four
                  </option>
                  <option value="5" className="text-[15px]">
                    Five
                  </option>
                  <option value="6" className="text-[15px]">
                    Six
                  </option>
                  <option value="7" className="text-[15px]">
                    Seven
                  </option>
                  <option value="8" className="text-[15px]">
                    Eight
                  </option>
                </select>
                <svg className="absolute  top-[21px] lg:top-7 right-[22px]" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <div className="flex justify-between items-center">
                <label className="block text-[17px] font-medium mb-[10px]" htmlFor="message">
                  Query*
                </label>
                <span className={`font-jetBrain text-[13px] font-medium ${character === 0 ? 'text-errorColor' : 'text-dark text-opacity-30'}`}>{character.toLocaleString()} characters left</span>
              </div>
              <textarea maxLength={`1500`} placeholder="Enter your query here" className={`font-jetBrain no-resize appearance-none block w-full border text-[15px] h-[250px] lg:h-[200px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md resize-none bg-white ${userValidation.message ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} id="message" required name="message" onChange={handleChange} onKeyUp={handleTextCount} onBlur={checkValidate}></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between">
            <CloudflareTurnstile />
            <div className="w-full lg:w-auto">
              <button onClick={() => setShowPopup(true)} disabled={!activeBtn} className={`shadow lg:w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white font-bold font-jetBrain text-[15px] py-2 px-4 rounded-md w-full ${activeBtn ? 'bg-blue' : 'bg-lightGrey'}`} type="button">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={`popup fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showPopup ? 'block' : 'hidden'}`}>
        <BlurSection img={messageImg} pt="pt-[138px]" buttonText={'Ok'} top="-top-[50px] lg:-top-[43px]" heading="Message Sent" returnHome={true} description={`We’ve received your message. A MessageMoment team member will be in contact with you soon. Thank you.`} />
      </div>
    </>
  );
};

export default ContactForm;
