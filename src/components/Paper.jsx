export const Paper = ({ children }) => {
  return (
    <div className="h-max">
      <div className="rounded-lg p-10 h-full shadow-md text-white bg-dark bg-opacity-90 border border-primary">
        {children}
      </div>
    </div>
  );
};
