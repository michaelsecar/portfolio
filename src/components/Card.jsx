import { motion } from "framer-motion";

export const Card = ({ title, image, description }) => {
  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <CardImage image={image}>
        <CardBody>{description}</CardBody>
      </CardImage>
    </CardContainer>
  );
};

export const CardContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-dark shadow-md"
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
  return (
    <div className="p-2 text-center font-semibold text-xl">{children}</div>
  );
};

export const CardBody = ({ children }) => {
  return <div className="text-sm">{children}</div>;
};
