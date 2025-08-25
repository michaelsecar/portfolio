import { createContext } from "react";
import { useToggle } from "../hooks/useToggle";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [open, toggle] = useToggle(false);

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};
