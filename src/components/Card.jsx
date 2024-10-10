export const CardContainer = ({ children }) => {
  return (
    <div
      className="max-w-72 rounded-md bg-dark shadow-md 
    hover:scale-105 duration-200"
    >
      {children}
    </div>
  );
};

export const CardImage = ({ children, image }) => {
  return (
    <div>
      <img src={image} alt="Imagen del proyecto" />
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="p-2 font-semibold">{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div className="p-2 text-sm">{children}</div>;
};
