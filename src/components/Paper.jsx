export const Paper = ({ children }) => {
  return (
    <div className="h-max">
      <div className="rounded-lg p-10 h-full shadow-md text-white bg-dark bg-opacity-70">
        {children}
      </div>
    </div>
  );
};
