// import content
import { useEffect } from "react";
import { content } from "../Content";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { hero } = content;
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-5 "
    >
      <div className="md:w-1/2">
        <img src={hero.image} alt="software of south logo" className="w-full p-5" />
      </div>

      <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold">{t("hero.title1")}</h1>
      <h1 className="text-4xl text-center md:text-5xl font-bold">&</h1>
      <h1 className="text-4xl md:text-5xl font-bold">{t("hero.title2")}</h1>
        
        <br />
        <p className="text-lg md:text-xl">{t("hero.content")}</p>
      </div>
    </section>
  );
};

export default Hero;
