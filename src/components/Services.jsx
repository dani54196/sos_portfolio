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
                    <img
                      src={frontend}
                      alt="..."
                      className="mx-auto"
                      width={150}
                    />
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
                    <img
                      src={backend}
                      alt="..."
                      className="mx-auto"
                      width={150}
                    />
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
                    <img
                      src={cloud}
                      alt="..."
                      className="mx-auto"
                      width={150}
                    />
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
