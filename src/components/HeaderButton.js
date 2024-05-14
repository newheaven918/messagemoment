const HeaderButton = ({ classes, WidthFont = 'w-[150px] text-base', name, event = () => console.log('Clicked!') }) => {
  return (
    <button onClick={event} className={`rounded-md h-[46px] ${classes} ${WidthFont} px-5 py-1 hover:bg-HoverdBlue font-jetBrain font-extrabold`}>
      {name}
    </button>
  );
};

export default HeaderButton;
