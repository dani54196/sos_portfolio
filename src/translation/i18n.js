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
            title1: "Software development",
            title2: "Digital solutions",
            content:
              "Our focus is on providing comprehensive and customized solutions for businesses and enterprises worldwide. We take pride in offering a full suite of services that span from design and implementation to maintenance and continuous growth of your digital applications and platforms.",
          },
          services: {
            title: "Services & Skills",
            subtitle: "MY SERVICES",
            open: "Learn more",
            close: "Close",
            title1: "Web Development",
            para1:
              "Our web development service offers professional and customized solutions to create attractive and functional websites. From planning and design to implementation and maintenance, we focus on meeting your goals and exceeding your expectations.",
            modal1:
              "☁️ Generation of highly customizable static sites. \n☁️ Use of modern technologies like React for full control over components and user interface. \n☁️ Integration with third-party APIs to extend functionality, links to social networks, maps, and more. \n☁️ Support for multiple languages. \n☁️ Worpress sites with custom themes and plugins \n☁️ Guarantee that all our sites are responsive and compatible with mobile devices, computers, and tablets.",
            title2: "Backend & Database",
            para2:
              "With our backend service, we ensure efficient and secure operation of your application or website. We take care of business logic, data management, and security, ensuring optimal performance and a seamless experience for end users.",
            modal2:
              "☁️ Design and modeling of databases.\n☁️ Implementation of SQL statements and backup management.\n☁️ Data migration from spreadsheets to applications.\n☁️ Deployment in private cloud, with options for both relational and non-relational databases.\n☁️ Creation of robust and scalable APIs.\n☁️ Implementation of design patterns for efficient architecture.\n☁️ Secure authentication and data verification.\n☁️ Use of modern libraries and clear documentation.\n☁️ Unit and integration testing, along with integration of third-party services like MercadoPago and QR generation.\n☁️ Implementation of serverless services for greater efficiency and scalability.",
            title3: "DevOps & Cloud",
            para3:
              "Our cloud service allows you to make the most of cloud computing technologies to improve the scalability, availability, and security of your applications and data. We handle the migration, management, and optimization of your cloud infrastructure so you can focus on growing your business.",
            modal3:
              "☁️ Vulnerability testing to protect against SQL injections and other attacks.\n☁️ Implementation of firewalls and prevention of DDOS attacks.\n☁️ Advanced configuration of DNS and secure communication protocols.\n☁️ Implementation of CI/CD practices for continuous and secure growth.\n☁️ Automation of the development, testing, and deployment process.\n☁️ Deployment of applications in multiple clouds and containerization of applications in different programming languages and databases.\n☁️ Configuration of mail servers.\n☁️ SSL certificates.\n☁️ DNS configuration.\n☁️ Implementation of servers for WordPress-based applications.\n☁️ Development of microservices and use of serverless technologies.\n☁️ Experience in AWS and configuration of reverse proxies to optimize costs and scalability in the cloud.",
          },
          saas: {
            title: "Software as a Service (SaaS) or Subscription model",
            subtitle:
              "We offer the possibility of contracting software development as a service through a subscription. This allows you to use the software when you need it, without having to pay extra. It is a flexible solution that adapts to your needs and gives you access to quality software without the need for a significant initial investment.",
            wpBot:
              "Development of chatbots for whatsapp, integration with buttons, connect to api or database, and Chat GPT.",
            event:
              "Development of applications for events, with participant registration, sending invitations",
            memory: "Upload photos and videos for events",
            marathonInscription:
              "Registration for sports events, registration management",
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
          pay: {
            paymethos: "Payment methods",
            reci: "We accept multiple payment methods. If you are in Argentina, you can pay in installments. We also issue invoices.",
            tadvice: "Legal Advice",
            advice:
              "We provide legal advice to draft user contracts, terms of use, data policies, and legal conditions. Our services guarantee the correct drafting and legal adequacy of these documents, providing you with peace of mind and legal security in your operations and services.",
          },
          workFlow: {
            title: "Workflows",
            step: [
              {
                title: "First Step",
                description: "Functional Analysis, Design & Project Planning",
              },
              {
                title: "Second Step",
                description: "Planning, Architecture & Development",
              },
              {
                title: "Third Step",
                description: "Deployment & Functioning",
              },
              {
                title: "Fourth Step",
                description: "Maintenance & Continuous Growth if required",
              },
            ],
          },
          hireMe: {
            title: "Hire Me",
            subtitle: "Ready to work together?",
            para: "At Software of the South, we are committed to providing quality technology solutions that drive the growth and efficiency of your business. Contact us today to start your digital journey!",
            book: "Book a meeting",
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
            title1: "Desarrollo de software",
            title2: "Soluciones digitales",
            content:
              "Nuestro enfoque está en proporcionar soluciones completas y personalizadas para empresas y negocios en todo el mundo. Nos enorgullece ofrecer un conjunto completo de servicios que abarcan desde el diseño y la implementación hasta el mantenimiento y el crecimiento continuo de tus aplicaciones y plataformas digitales.",
          },
          services: {
            title: "Servicios y Habilidades",
            subtitle: "MIS SERVICIOS",
            open: "Saber más",
            close: "Cerrar",
            title1: "Frontend",
            para1:
              "Nuestro servicio de desarrollo web ofrece soluciones personalizadas y profesionales para crear sitios web atractivos y funcionales. Desde la planificación y el diseño hasta la implementación y el mantenimiento, nos enfocamos en cumplir con tus objetivos y superar tus expectativas.",
            modal1:
              "☁️ Generación de sitios estáticos altamente personalizables. \n☁️ Uso de tecnologías modernas como React para un control total sobre los componentes y la interfaz de usuario. \n☁️ Integración con API de terceros para ampliar la funcionalidad, enlaces a redes sociales, mapas y más. \n☁️ Soporte para múltiples idiomas. \n☁️ Sitios de WordPress con temas y plugins personalizados. \n☁️ Garantía de que todos nuestros sitios son responsivos y compatibles con dispositivos móviles, computadoras y tablets.",
            title2: "Backend & Base de datos",
            para2:
              "Con nuestro servicio de backend, garantizamos un funcionamiento eficiente y seguro de tu aplicación o sitio web. Nos encargamos de la lógica de negocio, la gestión de datos y la seguridad, asegurando un rendimiento óptimo y una experiencia sin problemas para los usuarios finales.",
            modal2:
              "☁️ Diseño y modelado de bases de datos.\n☁️ Implementación de sentencias SQL y gestión de backups.\n☁️ Migración de datos desde hojas de cálculo a aplicaciones.\n☁️ Despliegue en la nube privada, con opciones tanto para bases de datos relacionales como no relacionales.\n☁️ Creación de APIs robustas y escalables.\n☁️ Implementación de patrones de diseño para una arquitectura eficiente.\n☁️ Autenticación segura y verificación de datos.\n☁️ Uso de librerías modernas y documentación clara.\n☁️ Pruebas unitarias y de integración, junto con la integración de servicios de terceros como MercadoPago y generación de QRs.\n☁️ Implementación de servicios serverless para una mayor eficiencia y escalabilidad. ",
            title3: "DevOps & Cloud",
            para3:
              "Nuestro servicio en la nube te permite aprovechar al máximo las tecnologías de computación en la nube para mejorar la escalabilidad, la disponibilidad y la seguridad de tus aplicaciones y datos. Nos encargamos de la migración, la gestión y la optimización de tu infraestructura en la nube para que puedas centrarte en hacer crecer tu negocio.",
            modal3:
              "☁️ Pruebas de vulnerabilidad para proteger contra inyecciones SQL y otros ataques.\n☁️ Implementación de firewalls y prevención de ataques DDOS.\n☁️ Configuración avanzada de DNS y protocolos de comunicación seguros.\n☁️ Implementación de prácticas de CI/CD para un crecimiento continuo y seguro.\n☁️ Automatización del proceso de desarrollo, pruebas y despliegue.\n☁️ Despliegue de aplicaciones en múltiples nubes y contenedorización de aplicaciones en diferentes lenguajes de programación y bases de datos.\n☁️ Configuración de servidores de correo.\n☁️ Certificados SSL.\n☁️ Configuracion DNS.\n☁️ Implementación de servidores para aplicaciones basadas en WordPress.\n☁️ Desarrollo de microservicios y uso de tecnologías serverless.\n☁️ Experiencia en AWS y configuración de reverse proxies para optimizar costos y escalabilidad en la nube.",
          },
          saas: {
            title: "Software como Servicio (SaaS) o Modelo de suscripción",
            subtitle:
              "Ofrecemos la posibilidad de contratar el desarrollo de software como un servicio mediante una suscripción. Esto te permite utilizar el software cuando lo necesites, sin tener que pagar de más. Es una solución flexible que se adapta a tus necesidades y te brinda acceso a un software de calidad sin la necesidad de una inversión inicial significativa.",
            wpBot:
              "Desarrollo de chatbots para whatsapp, integración con  botones, conectarse a api o base de datos, y Chat GPT.",
            event:
              "Desarrollo de aplicaciones para eventos, con registro de participantes, envio de invitaciones ",
            memory: "Subida de fotos y videos, para eventos",
            marathonInscription:
              " Inscripción a eventos deportivos, gestión de inscripciones",
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
          pay: {
            paymethos: "Métodos de pago",
            reci: "Recibimos múltiples medios de pago. Si estás en Argentina, puedes pagar en cuotas. También emitimos facturas.",
            tadvice: "Asesoramiento legal",
            advice:
              "Proporcionamos asesoramiento legal para redactar contratos de usuario, términos de uso, políticas de datos y condiciones legales. Nuestros servicios garantizan la correcta redacción y adecuación legal de estos documentos, brindándote tranquilidad y seguridad jurídica en tus operaciones y servicios.            ",
          },
          workFlow: {
            title: "Flujos de trabajo",
            step: [
              {
                title: "Primer paso",
                description:
                  "Análisis funcional, Diseño y Planeamiento del proyecto",
              },
              {
                title: "Segundo paso",
                description: "Desarrollo, Implementación y Testing",
              },
              {
                title: "Tercer paso",
                description: "Despliegue y Funcionamiento",
              },
              {
                title: "Cuarto paso",
                description:
                  "Mantenimiento y Crecimiento continuo si lo requiere",
              },
            ],
          },
          hireMe: {
            title: "Contrátame",
            subtitle: "¿Listo para trabajar juntos?",
            para: "En Software of the South, estamos comprometidos en ofrecer soluciones tecnológicas de calidad que impulsen el crecimiento y la eficiencia de tu negocio. ¡Contáctanos hoy para comenzar tu viaje digital!",
            book: "Agendar reunión",
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
