import { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const lang =
    localStorage.getItem("language") ??
    navigator.language.substring(0, 2) ??
    "en";
  localStorage.setItem("language", lang);
  const [language, setLanguage] = useState(lang);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
