import { createContext } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
