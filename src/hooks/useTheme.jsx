import { useEffect } from "react";
import { useToggle } from "./useToggle";

export const useTheme = () => {
  const isUsingDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, toggleDarkMode] = useToggle(isUsingDarkMode);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
