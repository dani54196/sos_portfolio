// import content
import { useEffect } from "react";
import { content } from "../Content";
import { useTranslation } from "react-i18next";
import wp from "../assets/images/Hero/wp.png";

const Hero = () => {
  const { hero } = content;
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center"
    >
      <div className="md:w-1/2">
        <img src={hero.image} alt="software of south logo" className="w-full p-5" />
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold">{t("hero.title")}</h2>
        <br />
        <p className="text-lg md:text-xl">{t("hero.content")}</p>
      </div>
    </section>
  );
};

export default Hero;
