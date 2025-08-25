export const DropdownItem = ({
  item,
  Icon = undefined,
  callback = undefined,
}) => {
  return (
    <button
      onClick={callback}
      className="
            font-bold p-3 flex justify-between w-full items-center
            bg-gray-100 dark:bg-black 
            dark:hover:bg-green-400 dark:hover:text-black
            hover:bg-green-600 hover:text-white
            border-gray-400 dark:hover:border-black hover:border-white
            border-2 rounded-md
            duration-100
            "
    >
      <span>{item}</span>
      {Icon ? <Icon /> : <></>}
    </button>
  );
};
