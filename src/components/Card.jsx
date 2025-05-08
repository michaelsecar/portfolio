import { motion } from "framer-motion";

export const CardContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-72 rounded-md bg-dark shadow-md"
    >
      {children}
    </motion.div>
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
