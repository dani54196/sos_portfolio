// import content
import { createElement, useState } from "react";
import { useTranslation } from "react-i18next";

// import img
import aws from "../assets/images/Skills/aws.png";
import node from "../assets/images/Skills/node.png";
import react from "../assets/images/Skills/react.png";
import go from "../assets/images/Skills/golang.png";
import wordpress from "../assets/images/Skills/wordpress.png";


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

const Skills = () => {
  const [selectSkill, setSelectSkill] = useState(null);
  const { t } = useTranslation();

  return (
    <section className="min-h-fit" id="skills">
      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {t("skills.title")}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t("skills.subtitle")}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {/* /// */}
          <div
            data-aos="fade-up"
            data-aos-delay={1 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={aws}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>aws</h6>
              <p className="italic">{t("skills.aws")}</p>
            </div>
          </div>
          {/* /// */}
          <div
            data-aos="fade-up"
            data-aos-delay={2 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={node}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>NodeJS</h6>
              <p className="italic">{t("skills.node")}</p>
            </div>
          </div>
          {/* /// */}
          <div
            data-aos="fade-up"
            data-aos-delay={3 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={react}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>React</h6>
              <p className="italic">{t("skills.aws")}</p>
            </div>
          </div>
          {/* /// */}{" "}
          <div
            data-aos="fade-up"
            data-aos-delay={4 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={go}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Go</h6>
              <p className="italic">{t("skills.aws")}</p>
            </div>
          </div>
          {/* /// */}{" "}
          <div
            data-aos="fade-up"
            data-aos-delay={5 * 200}
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={wordpress}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Wordpress</h6>
              <p className="italic">{t("skills.aws")}</p>
            </div>
          </div>
          {/* /// */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
