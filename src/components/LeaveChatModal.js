import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

import chat2 from '/public/home/chat2.svg';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';

const LeaveChatModal = ({ isOpen, closeModal, handleLeave }) => {
  const navigate = useRouter();

  function leaveToHome() {
    navigate.push('/');
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed left-[15px] right-[15px] bottom-0 top-0 lg:inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center py-4 text-center bg-white bg-opacity-90">
            <Transition.Child enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90%">
                <div className="max-w-[720px] mx-auto">
                  <div className="flex justify-center flex-col items-center">
                    <div className="max-w-[470px] h-[470px] w-full rounded-full bg-opacity-20 lg:bg-opacity-50 bg-blue  blur-[50px] absolute z-10"></div>
                    <div className=" relative bg-white border border-black border-opacity-10 flex justify-center flex-col items-center max-w-[720px] z-20 rounded-[10px] w-full px-4 lg:px-7">
                      <Image src={chat2} className="w-[100px] -top-[50px] lg:w-[128px] absolute lg:-top-[62px]" alt="image" />
                      <div className=" pb-[60px]">
                        <h2 className="text-blue sm:mx-[29px] lg:mx-[125px] lg:text-[26px] font-bold leading-none text-[20px] mb-5 lg:mb-0 tracking-[-1px] lg:tracking-[-2px] pt-20 ">Are you sure that you want to leave this chat conversation?</h2>
                        <h3 className="text-blue text-[17px] lg:text-[26px] text-center max-w-[324px] lg:max-w-[470px]"></h3>
                        <p className="font-jetBrain text-[16px] lg:mx-[50px] sm:mx-[29px] font-normal lg:text-[16px] text-center -mb-[9px] mt-[21px] lg:mt-[30px]">Once all users have disconnected from this chat session, it will no longer be accessible by anyone using this link.</p>
                        <p className="text-dark mt-[21px] mb-8 lg:mt-[30px] my-[30px] font-jetBrain font-medium text-[13px] lg:text-[15px] text-center max-w-[324px] lg:max-w-[540px]">{}</p>
                        <div className="flex justify-center gap-2 lg:gap-[15px] items-center">
                          <button type="button" className="font-jetBrain rounded-md h-[46px] w-[140px] lg:w-[150px] px-5 border mr-[10px] font-semibold !text-[16px] " onClick={closeModal}>
                            Cancel
                          </button>
                          <button type="button" className="font-jetBrain rounded-md bg-blue hover:bg-opacity-80 h-[46px] w-[140px] lg:w-[150px] px-5 border mr-[10px] font-semibold !text-[14px] text-white lg:hidden" onClick={handleLeave}>
                            Leave
                          </button>
                          <button type="button" className="font-jetBrain rounded-md bg-blue hover:bg-opacity-80 h-[46px] w-[140px] lg:w-[150px] px-5 border mr-[10px] font-semibold !text-[14px] text-white max-lg:hidden" onClick={leaveToHome}>
                            Leave
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LeaveChatModal;
