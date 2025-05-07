export const Button = ({ text, icon, isDisabled = false, props }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-secondary";
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`flex p-2 rounded-full min-w-32 bg-primary border-primary text-dark border gap-2 font-semibold
        items-center justify-center duration-200 
        ${variantStyle}
      `}
    >
      {icon} {text}
    </button>
  );
};
