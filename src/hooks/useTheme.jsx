import { useEffect } from "react";
import { useToggle } from "./useToggle";

const THEMES = {
  dark: "dark",
  light: "light",
};

export const useTheme = () => {
  const [isDarkMode, toggleDarkMode] = useToggle();
  const getCurrentTheme = () => {
    // Getting the system theme
    let isUsingDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Checking local storage
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme && localStorageTheme in THEMES) {
      isUsingDarkMode = localStorageTheme === THEMES.dark;
    }
    return isUsingDarkMode;
  };

  useEffect(() => {
    const isUsingDarkMode = getCurrentTheme();
    if (isUsingDarkMode) {
      toggleDarkMode();
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    console.log(localStorage.getItem("theme"));
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
