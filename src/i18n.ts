import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const savedLanguage = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    ns: ["global", "home", "gallery"],
    backend: {
      loadPath: "../../public/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
