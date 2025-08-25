import { LanguageContextProvider } from "./providers/LanguageProvider";
import { SectionContextProvider } from "./providers/SectionProvider";
import { ThemeContextProvider } from "./providers/ThemeProvider";

export const AppProvider = ({ children }) => {
  return (
    <SectionContextProvider>
      <ThemeContextProvider>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </ThemeContextProvider>
    </SectionContextProvider>
  );
};
