import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "./IconButton";
import { ExitIcon } from "../icons/ExitIcon";

export const PopUp = ({ children, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 w-full h-full bg-opacity-80 bg-dark"
          onClick={onClose}
        >
          <div className="flex items-center justify-center h-full">
            <div
              className="flex gap-10 border border-primary rounded-lg p-4 bg-dark justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="">{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
