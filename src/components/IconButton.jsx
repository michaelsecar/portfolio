export const IconButton = ({ onClick, icon, isDisabled = false }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-secondary";
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`p-2 duration-200 rounded-full border border-primary text-dark bg-primary
        w-fit h-fit
         ${variantStyle}`}
    >
      {icon}
    </button>
  );
};
