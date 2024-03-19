import { createElement, useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="m-1 flex flex-wrap justify-around">
      <div className="p-3 flex justify-around items-center">
        <p className="mb-0">
          Software of South © All CopyRights Reserved {currentYear}
        </p>
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
            width={150}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
