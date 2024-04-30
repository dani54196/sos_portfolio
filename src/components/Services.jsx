import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
// import images
import frontend from "../assets/images/Services/web-design.png";
import backend from "../assets/images/Services/cloud-database.png";
import cloud from "../assets/images/Services/cloud.png";
import responsive from "../assets/images/Services/responsive.png";
import security from "../assets/images/Services/cyber-security.png";

import wordpress from "../assets/images/Skills/wordpress.png";
import react from "../assets/images/Skills/react.png";
import hugo from "../assets/images/Skills/hugo.png";
import node from "../assets/images/Skills/node.png";
import go from "../assets/images/Skills/golang.png";
import mysql from "../assets/images/Skills/mysql.png";
import python from "../assets/images/Skills/python.png";
import mongodb from "../assets/images/Skills/mongodb.png";
import jwt from "../assets/images/Skills/jwt.png";
import aws from "../assets/images/Skills/aws.png";
import serverless from "../assets/images/Skills/serverless.png";
import docker from "../assets/images/Skills/docker.png";
import ghactions from "../assets/images/Skills/ghactions.png";
import nginx from "../assets/images/Skills/nginx.png";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const onOpen = (modal) => {
    setActiveModal(modal);
    setIsOpen(true);
  };
  const onClose = () => {
    setActiveModal(null);
    setIsOpen(false);
  };
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className="bg-bg_light_primary">
        <div className="md:container px-5 py-14">
          <h2 className="title" data-aos="fade-down">
            {t("services.title")}
          </h2>
          {/* <h4 className="subtitle" data-aos="fade-down">
            {t("services.subtitle")}
          </h4> */}
          <br />
          <div className="flex gap-5 justify-between flex-wrap group">
            {/* //////////////////////////////////////////////////////// */}
            <div
              data-aos="fade-up"
              data-aos-delay={1 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <img src={frontend} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title1")}</h6>
              <p className="leading-7">{t("services.para1")}</p>
              <Button onClick={() => onOpen("modal1")} className="mt-4">
                {t("services.open")}
              </Button>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen && activeModal === "modal1"}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader className="mx-auto">
                    {t("services.title1")}
                    <div className="flex justify-center space-x-4">
                      <img
                        src={react}
                        alt="React"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={wordpress}
                        alt="WordPress"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={hugo}
                        alt="hugo"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={responsive}
                        alt="Responsive"
                        className="mx-auto"
                        width={50}
                      />
                    </div>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {t("services.modal1")
                      .split("\n")
                      .map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      {t("services.close")}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            {/* //////////////////////////////////////////////////////// */}
            <div
              data-aos="fade-up"
              data-aos-delay={2 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={backend} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title2")}</h6>
              <p className="leading-7">{t("services.para2")}</p>
              <Button onClick={() => onOpen("modal2")} className="mt-4">
                {t("services.open")}
              </Button>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen && activeModal === "modal2"}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader className="mx-auto">
                    {t("services.title2")}
                    <div className="flex justify-center space-x-4">
                      <img
                        src={go}
                        alt="Golang"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={node}
                        alt="Node JS"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={python}
                        alt="python"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={mysql}
                        alt="MySQL"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={mongodb}
                        alt="MongoDB"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={jwt}
                        alt="jsonwebtoken"
                        className="mx-auto"
                        width={50}
                      />
                    </div>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {t("services.modal2")
                      .split("\n")
                      .map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      {t("services.close")}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            {/* //////////////////////////////////////////////////////// */}
            <div
              data-aos="fade-up"
              data-aos-delay={3 * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <img src={cloud} alt="..." className="mx-auto" width={50} />
              <h6 className="my-3">{t("services.title3")}</h6>
              <p className="leading-7">{t("services.para3")}</p>
              <Button onClick={() => onOpen("modal3")} className="mt-4">
                {t("services.open")}
              </Button>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen && activeModal === "modal3"}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader className="mx-auto">
                    {t("services.title3")}
                    <div className="flex justify-center space-x-4">
                      <img
                        src={aws}
                        alt="amazon web services"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={serverless}
                        alt="serverless"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={docker}
                        alt="docker"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={ghactions}
                        alt="github actions"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={security}
                        alt="security"
                        className="mx-auto"
                        width={50}
                      />
                      <img
                        src={nginx}
                        alt="nginx"
                        className="mx-auto"
                        width={50}
                      />
                    </div>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {t("services.modal3")
                      .split("\n")
                      .map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      {t("services.close")}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            {/* //////////////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
