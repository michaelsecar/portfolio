export const Paper = ({ children }) => {
  return (
    <div className="h-screen p-4">
      <div className="border border-dark rounded-lg p-6 h-full shadow-md">
        {children}
      </div>
    </div>
  );
};
