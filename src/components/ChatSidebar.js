import Image from 'next/image';
import ChatFooter from './ChatFooter';

const ChatSidebar = ({ allUsers, showMenu, ad = '', video = false }) => {
  return (
    <div className={`${showMenu ? 'max-lg:fixed z-10 top-[90px] left-0 right-0 max-lg:h-[calc(100vh-240px)] max-lg:pb-10' : 'max-lg:opacity-0 max-lg:h-0 max-lg:overflow-hidden'} lg:opacity-100 max-lg:border-t max-lg:border-t-white max-lg:border-opacity-10 flex flex-col justify-between bg-black h-[calc(100vh-136px)] overflow-y-auto overflow-x-hidden lg:rounded-[10px] custom-scrollbar-white`}>
      <div className="min-h-[472px] lg:min-h-[492px] pb-10 lg:pb-20">
        <div className="flex justify-between items-center p-4 h-[55px]">
          <h3 className="text-sm font-medium text-white ">Chat Group</h3>
          <p className="text-white opacity-40 text-[13px] leading-[23px] font-jetBrain font-semibold">{allUsers.length === 0 ? '' : `${allUsers.length} / 10`}</p>
        </div>
        <hr className="border-white border-opacity-10" />

        {allUsers.map(user => (
          <div key={user.id} className="border-b border-darkGrey flex justify-between items-center">
            <a href="#" className={`block w-full pl-5 py-[6px] cursor-pointer text-white font-jetBrain text-[13px] font-semibold leading-[23px] ${!user.active && 'opacity-40'}`}>
              {user.name}
            </a>
            {user.active && <span className="font-jetBrain text-white pr-7">*</span>}
          </div>
        ))}
      </div>
      <div>
        <div className="relative px-3">
          <div className="advertisement bg-white bg-opacity-[.15] h-[202.5px] rounded-md">
            <h4 className="text-[11px] font-jetBrain font-bold leading-normal text-white text-center py-[11px] rounded-t-lg">Advertisement</h4>
            <div className="flex justify-center items-center h-[164px] relative">
              <a className="w-full" target="_blank" href="">
                {ad && <Image src={ad} alt="Ad" className="w-full h-[164px] object-cover" />}
                {video && (
                  <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g filter="url(#filter0_d_337_700)">
                      <path d="M16 15.72V24.28C16 24.8933 16.28 25.36 16.84 25.68C17.4 26 17.9467 25.9733 18.48 25.6L25.12 21.36C25.6267 21.04 25.88 20.5867 25.88 20C25.88 19.4133 25.6267 18.96 25.12 18.64L18.48 14.4C17.9467 14.0267 17.4 14 16.84 14.32C16.28 14.64 16 15.1067 16 15.72ZM20 36C17.7867 36 15.7067 35.5797 13.76 34.7392C11.8133 33.8997 10.12 32.76 8.68 31.32C7.24 29.88 6.10027 28.1867 5.2608 26.24C4.42027 24.2933 4 22.2133 4 20C4 17.7867 4.42027 15.7067 5.2608 13.76C6.10027 11.8133 7.24 10.12 8.68 8.68C10.12 7.24 11.8133 6.09973 13.76 5.2592C15.7067 4.41973 17.7867 4 20 4C22.2133 4 24.2933 4.41973 26.24 5.2592C28.1867 6.09973 29.88 7.24 31.32 8.68C32.76 10.12 33.8997 11.8133 34.7392 13.76C35.5797 15.7067 36 17.7867 36 20C36 22.2133 35.5797 24.2933 34.7392 26.24C33.8997 28.1867 32.76 29.88 31.32 31.32C29.88 32.76 28.1867 33.8997 26.24 34.7392C24.2933 35.5797 22.2133 36 20 36Z" fill="white" />
                    </g>
                    <defs>
                      <filter id="filter0_d_337_700" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_337_700" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_337_700" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>

        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatSidebar;
