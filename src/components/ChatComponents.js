const SidebarComponents = ({ textLeft = '', textRight = '', contentLeft = '', contentRight = '', rounded = '' }) => {
  // console.log(color);
  return (
    <div className={`bg-midGray border-[#eee] px-4 py-5 rounded-[10px] ${rounded} grid grid-cols-1 lg:grid-cols-5 mt-[15px]`}>
      <div className="col-span-1 md:col-span-1">
        <p className={`${textLeft} lg:text-sm text-[13px] leading-5 font-jetBrain font-semibold max-lg:mb-[5px] `}>{contentLeft}</p>
      </div>
      <div className="col-span-4 md:col-span-4 flex justify-between items-center">
        <p className={`text-dark ${textRight} text-[13px] leading-5 lg:text-sm font-jetBrain`}>{contentRight}</p>
      </div>
    </div>
  );
};

export default SidebarComponents;
