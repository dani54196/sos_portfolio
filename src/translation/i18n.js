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
          services: {
            title: "Services",
            subtitle: "MY SERVICES",
            title1: "Web Development",
            para1:
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
            title2: "Backend & Database",
            para2:
              "Backend & Database, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
            title3: "Cloud Services",
            para3:
              "Cloud Services, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
          },
          skills: {
            title: "Skills",
            subtitle: "MY TOP SKILLS",
            aws: "Use Cloud Services",
            node: "develop backend",
          },
          projects: {
            title: "Projects",
            subtitle: "MY RECENT WORKS",
            readMore: "READ MORE",
          },
          testimonial: {
            title: "Testimonials",
            subtitle: "MY CLIENT REVIEWS",
          },
          hireMe:{
            title: "Hire Me",
            subtitle: "Ready to work together?",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          contact: {
            title: "Contact",
            subtitle: "Get in touch with us",
            name: "Name",
            menssage: "Message",
            send: "Send",
          },
        },
      },
      es: {
        translation: {
          hero: {
            content1: "Años de experiencia en desarrollo web",
            content2: "Proyectos trabajados en nuestra carrera",
          },
          services: {
            title: "Servicios",
            subtitle: "MIS SERVICIOS",
            title1: "Desarrollo web",
            para1:
              "En publicaciones y diseño gráfico, Lorem ipsum es un texto de relleno comúnmente utilizado para demostrar la forma visual de un documento que depende de la media",
            title2: "Backend & Base de datos",
            para2:
              "Backend & Base de datos, Lorem ipsum es un texto de relleno comúnmente utilizado para demostrar la forma visual de un documento que depende de la media",
            title3: "Servicios en la nube",
            para3:
              "Servicios en la nube, Lorem ipsum es un texto de relleno comúnmente utilizado para demostrar la forma visual de un documento que depende de la media",
          },
          skills: {
            title: "Habilidades",
            subtitle: "MIS HABILIDADES PRINCIPALES",
            aws: "Uso de servicios en la nube",
            node: "desarrollar backend",
          },
          projects: {
            title: "Proyectos",
            subtitle: "MIS TRABAJOS RECIENTES",
            readMore: "SABER MÁS",
          },
          testimonial: {
            title: "Testimonios",
            subtitle: "MIS RESEÑAS DE CLIENTES",
          },
          hireMe:{
            title: "Contrátame",
            subtitle: "¿Listo para trabajar juntos?",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          contact: {
            title: "Contacto",
            subtitle: "Ponte en contacto con nosotros",
            name: "Nombre",
            menssage: "Mensaje",
            send: "Enviar",
          },
        },
      },
    },
  });

export default i18n;
