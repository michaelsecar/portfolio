import { useContext } from "react";

import { MenuContext } from "../../providers/MenuProvider";
import { Navbar } from "./Navbar";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const menu = useContext(MenuContext);
  return (
    <header>
      <Navbar />
      {menu.open && <Menu />}
    </header>
  );
};
