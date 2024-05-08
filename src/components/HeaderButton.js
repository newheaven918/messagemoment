const HeaderButton = ({ classes, WidthFont = 'w-[150px] text-base', name, event = () => console.log('Clicked!') }) => {
  return (
    <button onClick={event} className={`rounded-md h-[46px] ${classes} ${WidthFont} px-5 hover:bg-opacity-80 font-jetBrain font-extrabold`}>
      {name}
    </button>
  );
};

export default HeaderButton;
