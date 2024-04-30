import { createElement, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="m-1 flex flex-wrap justify-around">
      <div className="p-3 flex justify-around items-center">
        <p className="mb-0">
          Software of South © All CopyRights Reserved {currentYear}
        </p>
      </div>
      <div className="flex flex-col  justify-center">
        <Link to="/terms" className="mb-2">
          Terminos y Condiciones
        </Link>
        {/* <Link to="/questions" className="mb-2">
          Preguntas Frecuentes
        </Link> */}
        <p className="mb-2">
          Defensa de las y los consumidores. Para reclamos{" "}
        </p>
        <a
          href="https://autogestion.produccion.gob.ar/consumidores"
          className="mb-2"
        >
          ingresá acá.
        </a>
      </div>
      <div className="data-fiscal ">
        <a
          href="http://qr.afip.gob.ar/?qr=EGp1_Oq1RjHRDhXXQs6DuA,,"
          target="_F960AFIPInfo"
        >
          <img
            src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
            alt="Data Fiscal"
            className="mb-2"
            width={100}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
