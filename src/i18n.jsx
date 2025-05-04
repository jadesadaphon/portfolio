import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "th",
    supportedLngs: ["en", "th", "kh"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/portfolio/locales/{{lng}}/trans.json",
    },
    detection: {
      order: ["navigator", "htmlTag", "localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
      lookupQuerystring: "lang",
    },
  });

export default i18n;
