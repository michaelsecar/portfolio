import { useState } from "react";
import { ColorContext } from "../contexts/ColorContext";

export const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#560405");
  const [isDark, setIsDark] = useState(true);

  return (
    <ColorContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
