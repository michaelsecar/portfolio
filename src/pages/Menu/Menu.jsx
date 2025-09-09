import { useContext } from "react";

import { MenuItem } from "./MenuItem";
import { LanguageDropDown } from "./Dropdown";
import { CloseIcon, Sun, Moon } from "../../icons/Icons";

import { MenuContext } from "../../providers/MenuProvider";
import { ThemeContext } from "../../providers/contexts/ThemeContext";
import { LanguageContext } from "../../providers/LanguageProvider";
import { motion } from "framer-motion";

export const Menu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const menu = useContext(MenuContext);

  return (
    <motion.div
      className="fixed min-w-[300px] h-screen
            left-0 z-40
            bg-gray-50 dark:bg-black border-gray-600
            flex items-center border-r-2
            p-5
        "
      exit={{ transform: "translateX(-100%)" }}
      initial={{ transform: "translateX(-100%)" }}
      animate={{ transform: "translateX(0%)" }}
    >
      <div className="w-full">
        <div>
          <button className="absolute right-3 top-3" onClick={menu.toggle}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <MenuItem
            item={language === "en" ? "Theme" : "Tema"}
            Icon={theme ? Sun : Moon}
            callback={toggleTheme}
          />
          <LanguageDropDown currentLanguage={language} onChange={setLanguage} />
        </div>
      </div>
    </motion.div>
  );
};
