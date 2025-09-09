import { useTheme } from "../hooks/useTheme";
import { ThemeContext } from "./contexts/ThemeContext";

export const ThemeContextProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
