import { useContext } from "react";

import { MenuContext } from "../../providers/MenuProvider";
import { Navbar } from "./Navbar";
import { Menu } from "../Menu/Menu";
import { AnimatePresence } from "motion/react";

export const Header = () => {
  const menu = useContext(MenuContext);
  return (
    <header>
      <Navbar />
      <AnimatePresence>|{menu.open && <Menu />}</AnimatePresence>
    </header>
  );
};
