import { motion } from "framer-motion";

export const Paper = ({ children }) => {
  return (
    <motion.div
      className="h-screen"
      transition={{ duration: 0.5 }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <div className="rounded-lg p-10 h-full shadow-md text-white bg-dark bg-opacity-90 border border-primary">
        {children}
      </div>
    </motion.div>
  );
};
