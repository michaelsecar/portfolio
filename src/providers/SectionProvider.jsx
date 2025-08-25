import { createContext } from "react";
import { useScroll } from "../hooks/useScroll";

export const SectionContext = createContext();

export const SectionContextProvider = ({ children }) => {
  const currentSection = useScroll();
  return (
    <SectionContext.Provider value={{ currentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
