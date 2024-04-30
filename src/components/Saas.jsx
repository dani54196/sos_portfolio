// import content
import { createElement, useState } from "react";
import { useTranslation } from "react-i18next";

// import img
import bot from "../assets/images/Saas/bot.png";
import party from "../assets/images/Saas/party.png";
import memory from "../assets/images/Saas/memory.png";
import running from "../assets/images/Saas/running.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

const Saas = () => {
  const [selectSkill, setSelectSkill] = useState(null);
  const { t } = useTranslation();

  return (
    <section className="min-h-fit" id="skills">
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {t("saas.title")}
        </h2>
        <p className="p-5" data-aos="fade-down">
          {t("saas.subtitle")}
        </p>
        <br />

        <div className="flex flex-wrap gap-4 justify-center">
          <div
            data-aos="fade-up"
            data-aos-delay={1 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={bot}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Bot</h6>
              <p className="italic">{t("saas.wpBot")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div
            data-aos="fade-up"
            data-aos-delay={1 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={party}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Party</h6>
              <p className="italic">{t("saas.event")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div
            data-aos="fade-up"
            data-aos-delay={1 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={memory}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Party</h6>
              <p className="italic">{t("saas.memory")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div
            data-aos="fade-up"
            data-aos-delay={1 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={running}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Party</h6>
              <p className="italic">{t("saas.marathonInscription")}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Saas;
