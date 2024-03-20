import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hero: {
            content1: "Years of Experinse in Web development",
            content2: "Projects Worked in our career",
          },
          contact:{
            title: "Contact",
            subtitle: "Get in touch with us",
            name: "Name",
            menssage: "Message",
            send: "Send"
          }
        },
      },
      es: {
        translation: {
          hero: {
            content1: "Años de experiencia en desarrollo web",
            content2: "Proyectos trabajados en nuestra carrera",
          },
          contact:{
            title: "Contacto",
            subtitle: "Ponte en contacto con nosotros",
            name: "Nombre",
            menssage: "Mensaje",
            send: "Enviar"
          }
        },
      },
    },
  });

export default i18n;