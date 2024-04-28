import { useTranslation } from "react-i18next";
// import images
import code from "../assets/images/Services/code.png";
import backend from "../assets/images/Services/backend.png";
import cloud from "../assets/images/Services/cloud.png";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className="bg-bg_light_primary">
        <div className="md:container px-5 py-14">
          <h2 className="title" data-aos="fade-down">
            {t("services.title")}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {t("services.subtitle")}
          </h4>
          <br />
          <div className="flex gap-5 justify-between flex-wrap group">
            <div
              data-aos="fade-up"
              data-aos-delay={1 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <img src={code} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title1")}</h6>
              <p className="leading-7">{t("services.para1")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={2 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={backend} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title2")}</h6>
              <p className="leading-7">{t("services.para2")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={3 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <img src={cloud} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title3")}</h6>
              <p className="leading-7">{t("services.para3")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={3 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <img src={cloud} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title3")}</h6>
              <p className="leading-7">{t("services.para3")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={3 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <img src={cloud} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title3")}</h6>
              <p className="leading-7">{t("services.para3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
