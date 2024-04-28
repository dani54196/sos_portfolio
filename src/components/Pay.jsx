import React from "react";
import { Container } from "@chakra-ui/react";
import { FaPaypal, FaRegCreditCard } from "react-icons/fa";
import { SiBitcoin, SiMercadopago } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { LiaFileContractSolid } from "react-icons/lia";

const Pay = () => {
  const { t } = useTranslation();
  return (
    <section className="md:container px-2 py-14">
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2 p-2">
          <h2 className="title text-center">{t("pay.paymethos")}</h2>
          <div className="flex justify-between p-5">
            <FaPaypal size={52} />
            <SiBitcoin size={52} />
            <SiMercadopago size={52} />
            <FaMoneyBillTransfer size={52} />
            <FaRegCreditCard size={52} />
          </div>
          <p className="p-5">{t("pay.reci")}</p>
        </div>
        <div className="basis-1/2 p-2">
          <h2 className="title text-center py-2">{t("pay.tsaas")}</h2>
          <p className="p-5">{t("pay.saas")}</p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center">
          <h2 className="title">{t("pay.tadvice")}</h2>
          <LiaFileContractSolid size={40} />
        </div>
        <p className="p-5">{t("pay.advice")}</p>
      </div>
    </section>
  );
};

export default Pay;
