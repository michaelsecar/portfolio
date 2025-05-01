export const ColorInput = ({ name, onChange, ...props }) => {
  return (
    <input
      className="p-2 bg-dark border-medium border rounded-lg outline-none 
      focus:border-primary focus:shadow-xl focus:text-secondary duration-200 bg-opacity-50"
      type="color"
      name={name}
      onChange={onChange}
      {...props}
    />
  );
};
