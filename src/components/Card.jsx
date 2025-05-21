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

const CardContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="bg-black"
    >
      {children}
    </motion.div>
  );
};

const CardImage = ({ children, image }) => {
  return (
    <div>
      <img src={image} alt="Imagen del proyecto" />
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="p-2 text-center font-semibold text-xl">{children}</div>
  );
};

const CardBody = ({ children }) => {
  return <div className="text-sm p-2">{children}</div>;
};
