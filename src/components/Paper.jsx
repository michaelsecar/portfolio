import { motion } from "framer-motion";

export const Paper = ({ children }) => {
  return (
    <motion.div
      className="overflow-hidden"
      transition={{ duration: 0.5 }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <div className="rounded-lg p-10 h-full shadow-md text-white bg-dark bg-opacity-90 border-2 border-medium">
        <motion.div
          initial={{ translateY: 40, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};
