// import content
import { useEffect } from "react";
import { content } from "../Content";
import { useTranslation } from "react-i18next";
import wp from "../assets/images/Hero/wp.png";

const Hero = () => {
  const { hero } = content;
  const { t } = useTranslation();

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>
        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <img className="" width={250} src={wp} />
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              data-aos-delay={1 * 300}
              className={"flex items-center w-80 gap-5"}
            >
              <h3>+3</h3>
              <p>{t("hero.content1")}</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay={1 * 300}
              className={" flex-row-reverse text-right"}
            >
              <h3>+30</h3>
              <p>{t("hero.content2")}</p>
            </div>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
