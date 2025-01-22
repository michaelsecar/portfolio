export const Button = ({ text, icon, isDisabled = false, props }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-primary hover:text-dark";
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`flex p-2 rounded-lg min-w-32 border-primary text-primary border gap-2
        items-center justify-center duration-200 
        ${variantStyle}
      `}
    >
      {icon} {text}
    </button>
  );
};
