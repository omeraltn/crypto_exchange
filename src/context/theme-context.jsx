import { createContext, useContext, useEffect, useState } from "react";

//context kurulumu

export const ThemeContext = createContext();

//context sağlayıcısı
export const ThemeProvider = ({ children }) => {
  //tema state'i
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    //localstorage'a kaydedilmiş bir tema varsa onu kullan
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    //tarayıcıda tercih edilen temayı kullan ilk giriş için
    return window.matchMedia("(prefers-color-scheme: dark)");
  });

  //temayı değiştiricek fonksiyonu
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  //tema değişimi tailwindin algılaması için html elementini güncelle

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  // context yapısından diğer componenetlara sağlanacak verileri belirle
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//context yapısına abone olmamızı sağlayan custom hook

export const useTheme = () => useContext(ThemeContext);
