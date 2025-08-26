import { useContext } from "react";

import { MenuItem } from "./MenuItem";
import { useToggle } from "../../hooks/useToggle";
import { SpainIcon, UnitedStatesIcon } from "../../icons/Icons";

import { LanguageContext } from "../../providers/LanguageProvider";
import { DropdownItem } from "./DropdownItem";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

export const LanguageDropDown = () => {
  const [open, toggle] = useToggle();
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative">
      <MenuItem
        item={language === "en" ? "English" : "Español"}
        Icon={language === "es" ? SpainIcon : UnitedStatesIcon}
        callback={toggle}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            className="p-2 border-2 absolute w-full flex flex-col gap-3 rounded-md mt-1
                 border-gray-400
                "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: -10 }}
          >
            <DropdownItem
              item="Español"
              Icon={SpainIcon}
              callback={() => setLanguage("es")}
            />
            <DropdownItem
              item="English"
              Icon={UnitedStatesIcon}
              callback={() => setLanguage("en")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
