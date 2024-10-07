export const Button = ({ children, icon, isDisabled = false }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-dark hover:text-light";
  return (
    <button
      disabled={isDisabled}
      className={`flex py-2 px-4 border border-dark rounded-md min-w-32 
        items-center justify-center  bg-white duration-200 
        ${variantStyle}
      `}
    >
      {icon} {children}
    </button>
  );
};
