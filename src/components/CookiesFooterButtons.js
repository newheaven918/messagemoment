const CookiesFooterButtons = ({ cookiesAccepted, cookiesRejected, cookiesSaved }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between p-6 border-t border-solid border-black border-opacity-10 gap-[10px] rounded-b">
      <div className="flex items-center justify-center gap-[10px] w-full lg:w-auto ">
        <button className="bg-blue font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={cookiesAccepted}>
          Accept All
        </button>
        <button className="bg-lightGrey font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-dark ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={cookiesRejected}>
          Reject All
        </button>
      </div>
      <button className="bg-lightGrey font-jetBrain text-[15px] lg:w-[180px] h-[46px] rounded-md text-dark ease-linear transition-all duration-150 grow hover:bg-opacity-80" type="button" onClick={cookiesSaved}>
        Save Setting
      </button>
    </div>
  );
};

export default CookiesFooterButtons;
