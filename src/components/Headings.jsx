export const H1 = ({ children }) => {
  return (
    <h1 className="text-4xl font-mono font-semibold text-primary">
      {children}
    </h1>
  );
};

export const H2 = ({ children }) => {
  return (
    <h2 className="text-3xl font-mono font-semibold text-secondary">
      {children}
    </h2>
  );
};

export const H3 = ({ children }) => {
  return (
    <h3 className="text-xl font-mono font-semibold text-terciary">
      {children}
    </h3>
  );
};
