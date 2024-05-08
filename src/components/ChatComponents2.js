const SidebarComponents2 = ({ bg = '', textLeft = '', textRight = '', contentLeft = '', contentRight = '' }) => {
  return (
    <div className={`bg-errorColor ${bg} bg-opacity-5 px-4 py-5 rounded-b-xl mt-[15px] border-t-[3px] border-t-[#EB5757] grid grid-cols-1 lg:grid-cols-5`}>
      <div className="col-span-1 md:col-span-1 flex items-center max-lg:mb-[5px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1.55556 0H12.4444C12.857 0 13.2527 0.163888 13.5444 0.455612C13.8361 0.747335 14 1.143 14 1.55556V12.4444C14 12.857 13.8361 13.2527 13.5444 13.5444C13.2527 13.8361 12.857 14 12.4444 14H1.55556C1.143 14 0.747335 13.8361 0.455612 13.5444C0.163888 13.2527 0 12.857 0 12.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0ZM7.77778 7.77778V3.11111H6.22222V7.77778H7.77778ZM7.77778 10.8889V9.33333H6.22222V10.8889H7.77778Z" fill="#EB5757" />
        </svg>
        <p className={`text-blue ${textLeft} text-[13px] leading-[13px] lg:leading-none lg:text-sm font-jetBrain pl-[10px] font-semibold`}>{contentLeft}</p>
      </div>
      <div className="col-span-4 md:col-span-4 flex justify-between items-center">
        <p className={`text-dark ${textRight} text-[13px] leading-5 lg:text-sm font-jetBrain font-semibold`}>{contentRight}</p>
      </div>
    </div>
  );
};

export default SidebarComponents2;
