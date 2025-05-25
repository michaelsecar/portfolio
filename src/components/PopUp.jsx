import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export const PopUp = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const rootElement = document.querySelector("#root");
    if (isOpen && rootElement) {
      rootElement.classList.add("overflow-hidden");
    } else {
      rootElement?.classList.remove("overflow-hidden");
    }
    return () => {
      rootElement?.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 10,
          }}
          exit={{ opacity: 0 }}
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
    </AnimatePresence>,
    document.body
  );
};
