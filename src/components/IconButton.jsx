export const IconButton = ({ icon, isDisabled = false }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-primary hover:text-dark";
  return (
    <button
      disabled={isDisabled}
      className={`px-4 py-2 duration-200 rounded-md border border-primary text-primary
         ${variantStyle}`}
    >
      {icon}
    </button>
  );
};
