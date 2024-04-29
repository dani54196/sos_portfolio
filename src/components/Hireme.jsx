import { content } from "../Content";
import { useTranslation } from "react-i18next";

const Hireme = () => {
  const { Hireme } = content;
  const { t } = useTranslation();
  return (
    <section className="bg-bg_light_primary">
      <div className="lg:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {t("hireMe.title")}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t("hireMe.subtitle")}
        </h4>
        <br />
        <div className="flex items-center lg:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            width="80%"
            data-aos="fade-right"
            className="max-w-sm md:block hidden m-4"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            width="80%"
            className="max-w-sm md:hidden m-4"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-md
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{t("hireMe.para")}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              Agendar una reunión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
