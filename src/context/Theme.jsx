import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    // 👇 Update HTML attribute
    document.documentElement.setAttribute("data-theme", theme);

   
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
