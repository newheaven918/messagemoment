import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FileUploadPopup = ({ error = false }) => {
  const [transferError, setTransferError] = useState(error);
  const [percentage, setPercentage] = useState(37);
  const [showUploadModal, setShowUploadModal] = useState(true);

  return (
    <div className={`max-w-[1220px] mx-auto h-0 flex flex-col fixed z-10 bottom-[111px] left-0 right-0 lg:left-auto lg:right-auto w-full ${showUploadModal ? '' : 'hidden'}`}>
      <div className="w-full lg:w-[360px] ml-auto -mt-[120px] lg:-mt-[128px] pb-5 mr-12 border rounded-t-[10px] border-[#E6E6E6] bg-white">
        <div className="flex justify-between items-center rounded-t-[10px] bg-blue">
          <div className="flex py-3 items-center">
            <svg className="ml-[15px]" xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
              <path opacity="0.2" d="M5 12.5924H9C9.55 12.5924 10 12.1424 10 11.5924V6.59244H11.59C12.48 6.59244 12.93 5.51244 12.3 4.88244L7.71 0.292444C7.61749 0.19974 7.5076 0.126193 7.38662 0.0760114C7.26565 0.02583 7.13597 0 7.005 0C6.87403 0 6.74435 0.02583 6.62338 0.0760114C6.5024 0.126193 6.39251 0.19974 6.3 0.292444L1.71 4.88244C1.08 5.51244 1.52 6.59244 2.41 6.59244H4V11.5924C4 12.1424 4.45 12.5924 5 12.5924ZM1 14.5924H13C13.55 14.5924 14 15.0424 14 15.5924C14 16.1424 13.55 16.5924 13 16.5924H1C0.45 16.5924 0 16.1424 0 15.5924C0 15.0424 0.45 14.5924 1 14.5924Z" fill="white" />
            </svg>
            <p className="text-[15px] font-medium text-white ml-[10px]">File Uploading via FileMoment.com</p>
          </div>
          <svg onClick={() => setShowUploadModal(false)} className="mr-[18px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="white" />
          </svg>
        </div>
        <div className="flex justify-between items-center bg-white">
          <div className="flex mt-[18px]">
            <svg className="ml-[15px] mt-[3.2px]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444ZM4.58889 8.54L6.22222 10.5078L8.63333 7.40444C8.78889 7.20222 9.1 7.20222 9.25556 7.41222L11.9856 11.0522C12.0289 11.11 12.0553 11.1787 12.0618 11.2506C12.0682 11.3226 12.0546 11.3949 12.0223 11.4595C11.99 11.5241 11.9403 11.5784 11.8789 11.6164C11.8175 11.6543 11.7467 11.6744 11.6744 11.6744H2.34889C2.02222 11.6744 1.84333 11.3011 2.04556 11.0444L3.98222 8.55556C4.13 8.35333 4.42556 8.34556 4.58889 8.54Z" fill="#CCCCCC" />
            </svg>
            <div className="ml-[15px]">
              <p className="text-sm font-medium text-dark font-jetBrain">img_12839_03.jpg</p>
              <p className="text-xs text-dark opacity-40 font-medium font-jetBrain">7.5mb</p>
            </div>
          </div>
          <div className="flex mt-[18px] items-center">
            {transferError ? (
              <div className="mr-[20px]">
                <p className="text-end text-sm font-medium text-errorColor font-jetBrain">Transfer Error</p>
                <p className="text-xs font-medium text-dark opacity-40 font-jetBrain">0KB/sec</p>
              </div>
            ) : (
              <div className="mr-[20px]">
                <p className="text-end text-sm font-medium text-dark font-jetBrain">{percentage}%</p>
                <p className="text-xs font-medium text-dark opacity-40 font-jetBrain">90KB/sec</p>
              </div>
            )}

            <div className={`relative mr-[15px] group ${transferError ? 'hidden' : ''}`}>
              <CircularProgressbar value={percentage} className="!w-[24px]" />
              <svg onClick={() => setTransferError(true)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer lg:hidden group-hover:lg:block" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9.7785 0.22908C9.70833 0.158765 9.62498 0.10298 9.53323 0.0649179C9.44147 0.0268556 9.34311 0.00726357 9.24377 0.00726357C9.14443 0.00726357 9.04607 0.0268556 8.95431 0.0649179C8.86255 0.10298 8.7792 0.158765 8.70903 0.22908L5 3.93053L1.29097 0.221495C1.22075 0.151273 1.13738 0.0955689 1.04563 0.0575646C0.95388 0.0195603 0.855543 7.39916e-10 0.756233 0C0.656923 -7.39917e-10 0.558585 0.0195603 0.466835 0.0575646C0.375085 0.0955689 0.291718 0.151273 0.221495 0.221495C0.151273 0.291718 0.0955689 0.375085 0.0575646 0.466835C0.0195603 0.558585 -7.39916e-10 0.656923 0 0.756233C7.39917e-10 0.855543 0.0195603 0.95388 0.0575646 1.04563C0.0955689 1.13738 0.151273 1.22075 0.221495 1.29097L3.93053 5L0.221495 8.70903C0.151273 8.77925 0.0955689 8.86262 0.0575646 8.95437C0.0195603 9.04612 0 9.14446 0 9.24377C0 9.34308 0.0195603 9.44141 0.0575646 9.53316C0.0955689 9.62492 0.151273 9.70828 0.221495 9.7785C0.291718 9.84873 0.375085 9.90443 0.466835 9.94244C0.558585 9.98044 0.656923 10 0.756233 10C0.855543 10 0.95388 9.98044 1.04563 9.94244C1.13738 9.90443 1.22075 9.84873 1.29097 9.7785L5 6.06947L8.70903 9.7785C8.77925 9.84873 8.86262 9.90443 8.95437 9.94244C9.04612 9.98044 9.14446 10 9.24377 10C9.34308 10 9.44141 9.98044 9.53316 9.94244C9.62492 9.90443 9.70828 9.84873 9.7785 9.7785C9.84873 9.70828 9.90443 9.62492 9.94244 9.53316C9.98044 9.44141 10 9.34308 10 9.24377C10 9.14446 9.98044 9.04612 9.94244 8.95437C9.90443 8.86262 9.84873 8.77925 9.7785 8.70903L6.06947 5L9.7785 1.29097C10.0667 1.00274 10.0667 0.517308 9.7785 0.22908Z" fill="#494AF8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPopup;
