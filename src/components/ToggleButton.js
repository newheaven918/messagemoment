import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FiCheck } from 'react-icons/fi';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`cursor-pointer relative inline-block min-w-[56px] h-6 rounded-full p-[3px] first-of-type:disabled ${isActive ? 'bg-blue' : ' bg-dark'}`} onClick={toggleButton}>
      <div className="flex justify-between items-center p-[2px] text-white">
        <div>
          <FiCheck size={14} />
        </div>
        <div>
          <RxCross2 size={14} />
        </div>
      </div>
      <div className={`relative bottom-[17px] w-4 h-4 bg-white rounded-full transition-transform transform ${isActive ? ' translate-x-full left-4' : 'left-0 translate-x-0'}`}>
        <div className={`absolute inset-0 flex items-center justify-center text-gray-600 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`absolute inset-0 flex items-center justify-center text-dark-600 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
    </button>
  );
};

export default ToggleButton;
