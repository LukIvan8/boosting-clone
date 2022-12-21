import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import HeroText from "../lang/HeroText.json";
import CardContent from "../lang/CardContent.json"

const resources = {en: {translation: {heroText: HeroText, cardContent:CardContent} }}


i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en"],
    debug: false,
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;