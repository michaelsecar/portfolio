import { motion } from "framer-motion";

export const Paper = ({ children }) => {
  return (
    <motion.div
      className="h-max"
      initial={{ transform: "scale(0.9)", opacity: 0 }}
      animate={{ transform: "scale(1)", opacity: 1 }}
      whileInView={{ transform: "scale(1)", opacity: 1 }}
    >
      <div className="rounded-lg p-10 h-full shadow-md text-white bg-dark bg-opacity-90 border border-primary">
        {children}
      </div>
    </motion.div>
  );
};
