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
            title: "Software development & digital solutions",
            content:
              "Our focus is on providing comprehensive and customized solutions for businesses and enterprises worldwide. We take pride in offering a full suite of services that span from design and implementation to maintenance and continuous growth of your digital applications and platforms.",
          },
          services: {
            title: "Services",
            subtitle: "MY SERVICES",
            title1: "Web Development",
            para1:
              "Our web development service offers professional and customized solutions to create attractive and functional websites. From planning and design to implementation and maintenance, we focus on meeting your goals and exceeding your expectations.",
            title2: "Backend & Database",
            para2:
              "With our backend service, we ensure efficient and secure operation of your application or website. We take care of business logic, data management, and security, ensuring optimal performance and a seamless experience for end users.",
            title3: "Cloud Services",
            para3:
              "Our cloud service allows you to make the most of cloud computing technologies to improve the scalability, availability, and security of your applications and data. We handle the migration, management, and optimization of your cloud infrastructure so you can focus on growing your business.",
          },
          skills: {
            title: "Skills",
            subtitle: "MY TOP SKILLS",
            aws: "AWS cloud infrastructure implementation and management.",
            node: "Efficient backend for modern web applications.",
            react: "Development of interactive and responsive user interfaces.",
            go: "Development of high-performance and concurrency applications.",
            wordpress:
              "Websites using WordPress, including themes and plugins.",
          },
          projects: {
            title: "Projects",
            subtitle: "MY RECENT WORKS",
            readMore: "GO TO SITE",
          },
          testimonial: {
            title: "Testimonials",
            subtitle: "MY CLIENT REVIEWS",
          },
          hireMe: {
            title: "Hire Me",
            subtitle: "Ready to work together?",
            para: "At Software of the South, we are committed to providing quality technology solutions that drive the growth and efficiency of your business. Contact us today to start your digital journey!",
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
            title: "Desarrollo de software y soluciones digitales",
            content:
              "Nuestro enfoque está en proporcionar soluciones completas y personalizadas para empresas y negocios en todo el mundo. Nos enorgullece ofrecer un conjunto completo de servicios que abarcan desde el diseño y la implementación hasta el mantenimiento y el crecimiento continuo de tus aplicaciones y plataformas digitales.",
          },
          services: {
            title: "Servicios",
            subtitle: "MIS SERVICIOS",
            title1: "Desarrollo web",
            para1:
              "Nuestro servicio de desarrollo web ofrece soluciones personalizadas y profesionales para crear sitios web atractivos y funcionales. Desde la planificación y el diseño hasta la implementación y el mantenimiento, nos enfocamos en cumplir con tus objetivos y superar tus expectativas.",
            title2: "Backend & Base de datos",
            para2:
              "Con nuestro servicio de backend, garantizamos un funcionamiento eficiente y seguro de tu aplicación o sitio web. Nos encargamos de la lógica de negocio, la gestión de datos y la seguridad, asegurando un rendimiento óptimo y una experiencia sin problemas para los usuarios finales.",
            title3: "Servicios en la nube",
            para3:
              "Nuestro servicio en la nube te permite aprovechar al máximo las tecnologías de computación en la nube para mejorar la escalabilidad, la disponibilidad y la seguridad de tus aplicaciones y datos. Nos encargamos de la migración, la gestión y la optimización de tu infraestructura en la nube para que puedas centrarte en hacer crecer tu negocio.",
          },
          skills: {
            title: "Habilidades",
            subtitle: "MIS HABILIDADES PRINCIPALES",
            aws: " Implementación y gestión de infraestructuras en la nube AWS.",
            node: "Backend eficiente para aplicaciones web modernas.",
            react:
              "Desarrollo de interfaces de usuario interactivas y receptivas.",
            go: "Desarrollo de aplicaciones de alto rendimiento y concurrencia.",
            wordpress:
              "Sitios web utilizando WordPress, incluyendo temas y plugins.",
          },
          projects: {
            title: "Proyectos",
            subtitle: "MIS TRABAJOS RECIENTES",
            readMore: "IR AL SITIO",
          },
          testimonial: {
            title: "Testimonios",
            subtitle: "MIS RESEÑAS DE CLIENTES",
          },
          hireMe: {
            title: "Contrátame",
            subtitle: "¿Listo para trabajar juntos?",
            para: "En Software of the South, estamos comprometidos en ofrecer soluciones tecnológicas de calidad que impulsen el crecimiento y la eficiencia de tu negocio. ¡Contáctanos hoy para comenzar tu viaje digital!",
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
