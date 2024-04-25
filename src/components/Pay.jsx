import React from "react";
import { Container } from "@chakra-ui/react";
import { FaPaypal, FaRegCreditCard, FaReceipt } from "react-icons/fa";
import { SiBitcoin, SiMercadopago } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { LiaFileContractSolid } from "react-icons/lia";

const Pay = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h2 className="text-center">{t("pay.paymethos")}</h2>
          <div className="flex justify-between p-5">
            <FaPaypal size={52} />
            <SiBitcoin size={52} />
            <SiMercadopago size={52} />
            <FaMoneyBillTransfer size={52} />
          </div>
        </div>
        <div className="basis-1/2 text-center">
          <h2>Paga en coutas</h2>
          <p className="p-2">{t("pay.reci")}</p>
          <div className="flex justify-around">
            <FaRegCreditCard size={52} />
            <FaReceipt size={52} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-grow p-5">
          <p>{t("pay.saas")}</p>
        </div>
        <div className="flex-grow p-5">
          <LiaFileContractSolid />
          <p>{t("pay.advice")}</p>
        </div>
      </div>
    </>
  );
};

export default Pay;
