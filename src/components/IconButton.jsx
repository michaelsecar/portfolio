export const IconButton = ({ onClick, icon, isDisabled = false }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-primary hover:text-dark";
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`px-4 py-2 duration-200 rounded-md border border-primary text-primary
         ${variantStyle}`}
    >
      {icon}
    </button>
  );
};
