import React, { createContext, useState, useContext } from "react";
import translations from "../translations.json";

// Context yaratish
const LanguageContext = createContext();

// Provider komponent
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("uz");

  // hozirgi til uchun tarjimalar
  const t = translations[lang];

  // Context orqali til va tarjimalarni global berish
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Qulay foydalanish uchun custom hook
export const useLanguage = () => useContext(LanguageContext);