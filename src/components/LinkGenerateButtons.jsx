import QRCodeComponent from './QRCodeComponent';
import Tooltip from './Tooltip';

const LinkGenerateButtons = ({ showGenerate, openChat, showQr, generatedLink, showCopy, handleGenerateTip, handleGenerateTipLeave, secure, generateLink, handleQr, copyTOClip, copyTOClipSecure, classes, generateLinkSecure }) => {
  return (
    <div className={`buttons pl-[6px] flex gap-[6px] lg:gap-[5px] ${classes}`}>
      <div className="relative">
        <Tooltip showCopy={showGenerate} message={`Regenerate`} />
        {openChat ? (
          <button onMouseEnter={handleGenerateTip} onMouseLeave={handleGenerateTipLeave} onClick={secure ? generateLinkSecure : generateLink} className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white rounded-[5px] md:hover:bg-dark md:hover:bg-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M21.0374 9.74766C20.7312 7.54382 19.7088 5.50181 18.1278 3.93618C16.5468 2.37055 14.4949 1.36816 12.2882 1.08342C10.0814 0.79868 7.84231 1.24739 5.91568 2.36042C3.98906 3.47345 2.48183 5.18907 1.62617 7.24298M1 2.23363V7.24298H6.00936M1 12.2523C1.30627 14.4562 2.32865 16.4982 3.90964 18.0638C5.49063 19.6295 7.54252 20.6318 9.74925 20.9166C11.956 21.2013 14.1951 20.7526 16.1217 19.6396C18.0484 18.5265 19.5556 16.8109 20.4113 14.757M21.0374 19.7664V14.757H16.0281" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <button className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white bg-opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M21.0374 9.74766C20.7312 7.54382 19.7088 5.50181 18.1278 3.93618C16.5468 2.37055 14.4949 1.36816 12.2882 1.08342C10.0814 0.79868 7.84231 1.24739 5.91568 2.36042C3.98906 3.47345 2.48183 5.18907 1.62617 7.24298M1 2.23363V7.24298H6.00936M1 12.2523C1.30627 14.4562 2.32865 16.4982 3.90964 18.0638C5.49063 19.6295 7.54252 20.6318 9.74925 20.9166C11.956 21.2013 14.1951 20.7526 16.1217 19.6396C18.0484 18.5265 19.5556 16.8109 20.4113 14.757M21.0374 19.7664V14.757H16.0281" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
      <div className="relative">
        <QRCodeComponent generatedLink={generatedLink} classes={`hidden qr-code bg-black bg-cover bg-no-repeat p-[10px] rounded-[10px] w-[280px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[58px] ${!showQr ? 'lg:hidden' : 'lg:block'}`} />
        {openChat ? (
          <button onClick={handleQr} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white md:hover:bg-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M3.83333 3.83333H9.58333V9.58333H3.83333V3.83333ZM19.1667 3.83333V9.58333H13.4167V3.83333H19.1667ZM13.4167 14.375H15.3333V12.4583H13.4167V10.5417H15.3333V12.4583H17.25V10.5417H19.1667V12.4583H17.25V14.375H19.1667V17.25H17.25V19.1667H15.3333V17.25H12.4583V19.1667H10.5417V15.3333H13.4167V14.375ZM15.3333 14.375V17.25H17.25V14.375H15.3333ZM3.83333 19.1667V13.4167H9.58333V19.1667H3.83333ZM5.75 5.75V7.66667H7.66667V5.75H5.75ZM15.3333 5.75V7.66667H17.25V5.75H15.3333ZM5.75 15.3333V17.25H7.66667V15.3333H5.75ZM3.83333 10.5417H5.75V12.4583H3.83333V10.5417ZM8.625 10.5417H12.4583V14.375H10.5417V12.4583H8.625V10.5417ZM10.5417 5.75H12.4583V9.58333H10.5417V5.75ZM1.91667 1.91667V5.75H0V1.91667C0 1.40833 0.201934 0.920823 0.561379 0.561379C0.920823 0.201934 1.40833 0 1.91667 0L5.75 0V1.91667H1.91667ZM21.0833 0C21.5917 0 22.0792 0.201934 22.4386 0.561379C22.7981 0.920823 23 1.40833 23 1.91667V5.75H21.0833V1.91667H17.25V0H21.0833ZM1.91667 17.25V21.0833H5.75V23H1.91667C1.40833 23 0.920823 22.7981 0.561379 22.4386C0.201934 22.0792 0 21.5917 0 21.0833V17.25H1.91667ZM21.0833 21.0833V17.25H23V21.0833C23 21.5917 22.7981 22.0792 22.4386 22.4386C22.0792 22.7981 21.5917 23 21.0833 23H17.25V21.0833H21.0833Z" fill="#494AF8" />
            </svg>
          </button>
        ) : (
          <button className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white ">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M3.83333 3.83333H9.58333V9.58333H3.83333V3.83333ZM19.1667 3.83333V9.58333H13.4167V3.83333H19.1667ZM13.4167 14.375H15.3333V12.4583H13.4167V10.5417H15.3333V12.4583H17.25V10.5417H19.1667V12.4583H17.25V14.375H19.1667V17.25H17.25V19.1667H15.3333V17.25H12.4583V19.1667H10.5417V15.3333H13.4167V14.375ZM15.3333 14.375V17.25H17.25V14.375H15.3333ZM3.83333 19.1667V13.4167H9.58333V19.1667H3.83333ZM5.75 5.75V7.66667H7.66667V5.75H5.75ZM15.3333 5.75V7.66667H17.25V5.75H15.3333ZM5.75 15.3333V17.25H7.66667V15.3333H5.75ZM3.83333 10.5417H5.75V12.4583H3.83333V10.5417ZM8.625 10.5417H12.4583V14.375H10.5417V12.4583H8.625V10.5417ZM10.5417 5.75H12.4583V9.58333H10.5417V5.75ZM1.91667 1.91667V5.75H0V1.91667C0 1.40833 0.201934 0.920823 0.561379 0.561379C0.920823 0.201934 1.40833 0 1.91667 0L5.75 0V1.91667H1.91667ZM21.0833 0C21.5917 0 22.0792 0.201934 22.4386 0.561379C22.7981 0.920823 23 1.40833 23 1.91667V5.75H21.0833V1.91667H17.25V0H21.0833ZM1.91667 17.25V21.0833H5.75V23H1.91667C1.40833 23 0.920823 22.7981 0.561379 22.4386C0.201934 22.0792 0 21.5917 0 21.0833V17.25H1.91667ZM21.0833 21.0833V17.25H23V21.0833C23 21.5917 22.7981 22.0792 22.4386 22.4386C22.0792 22.7981 21.5917 23 21.0833 23H17.25V21.0833H21.0833Z" fill="#CCCCCC" />
            </svg>
          </button>
        )}
      </div>
      <div className="relative">
        <Tooltip showCopy={showCopy} classes="" message={`Copied`} />

        {openChat ? (
          <button onClick={secure ? copyTOClipSecure : copyTOClip} className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white md:hover:bg-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M15.4545 18.1818H5.45455V5.45455H15.4545M15.4545 3.63636H5.45455C4.97233 3.63636 4.50987 3.82792 4.1689 4.1689C3.82792 4.50987 3.63636 4.97233 3.63636 5.45455V18.1818C3.63636 18.664 3.82792 19.1265 4.1689 19.4675C4.50987 19.8084 4.97233 20 5.45455 20H15.4545C15.9368 20 16.3992 19.8084 16.7402 19.4675C17.0812 19.1265 17.2727 18.664 17.2727 18.1818V5.45455C17.2727 4.97233 17.0812 4.50987 16.7402 4.1689C16.3992 3.82792 15.9368 3.63636 15.4545 3.63636ZM12.7273 0H1.81818C1.33597 0 0.873508 0.191558 0.532533 0.532533C0.191558 0.873508 0 1.33597 0 1.81818V14.5455H1.81818V1.81818H12.7273V0Z" fill="#494AF8" />
            </svg>
          </button>
        ) : (
          <button className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M15.4545 18.1818H5.45455V5.45455H15.4545M15.4545 3.63636H5.45455C4.97233 3.63636 4.50987 3.82792 4.1689 4.1689C3.82792 4.50987 3.63636 4.97233 3.63636 5.45455V18.1818C3.63636 18.664 3.82792 19.1265 4.1689 19.4675C4.50987 19.8084 4.97233 20 5.45455 20H15.4545C15.9368 20 16.3992 19.8084 16.7402 19.4675C17.0812 19.1265 17.2727 18.664 17.2727 18.1818V5.45455C17.2727 4.97233 17.0812 4.50987 16.7402 4.1689C16.3992 3.82792 15.9368 3.63636 15.4545 3.63636ZM12.7273 0H1.81818C1.33597 0 0.873508 0.191558 0.532533 0.532533C0.191558 0.873508 0 1.33597 0 1.81818V14.5455H1.81818V1.81818H12.7273V0Z" fill="#CCCCCC" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default LinkGenerateButtons;
