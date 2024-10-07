export const IconButton = ({ icon, isDisabled = false }) => {
  const variantStyle = isDisabled ? "" : "hover:bg-dark hover:text-light";
  return (
    <button
      disabled={isDisabled}
      className={`px-4 py-2 duration-200 rounded-md border border-dark bg-white
        hover:bg-dark hover:text-light ${variantStyle}`}
    >
      {icon}
    </button>
  );
};
