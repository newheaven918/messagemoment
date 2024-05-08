import React from 'react';

const ReportButton = ({ selected, disable, handleReport, handleClose }) => {
  return (
    <div className="flex justify-end items-center gap-[10px] py-3 px-4 lg:pr-8 border-t">
      <button className="bg-lightGrey font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80" type="button" onClick={handleClose}>
        Cancel
      </button>
      {selected ? (
        <button className={disable ? `bg-lightGrey font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80` : `bg-blue font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80`} type="button" onClick={handleReport}>
          Report File
        </button>
      ) : (
        <button className={`bg-lightGrey font-jetBrain text-[15px] w-full lg:w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150 hover:bg-opacity-80`} type="button">
          Report File
        </button>
      )}
    </div>
  );
};

export default ReportButton;
