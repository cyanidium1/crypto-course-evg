"use client";
import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import PurchaseBtn from "./common/PurchaseBtn";
import { useRouter } from "next/navigation";
import { PRICES } from "../../constants/prices";

export default function Tariffs() {
  const router = useRouter();
  const t = useTranslations("Tariffs");

  const proPoints = Object.values({
    item1: t("pro.point1"),
    item2: t("pro.point2"),
    item4: t("pro.point4"),
    item5: t("pro.point5"),
    item6: t("pro.point6"),
  });

  const PAYMENT_LINKS = {
    pro: "https://secure.wayforpay.com/payment/enter.cryptoboost", // PRO
  };

  const handleClick = (plan) => {
    localStorage.setItem("selectedPlan", plan);
    window.location.href = PAYMENT_LINKS[plan];
  };

  return (
    <Container>
      <div id="tariffs" className="px-10 l:px-20 pb-[76px] l:pb-[200px]">
        <h2 className="mb-7 l:mb-[79px] uppercase font-bold text-2xl leading-[1.17] md:text-4xl md:leading-[1.17] l:text-5xl l:leading-[1.17] text-center mx-auto">
          {t("title")}
        </h2>

        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center md:gap-[26px] l:gap-5">
          <li className="p-8 px-6 lg:px-9 lg:pt-9 rounded-[28px] w-[313px] h-[490px] l:h-[500px] lg:w-[360px] shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] relative mb-[26px] md:mb-0 flex flex-col justify-between bg-textColorWhite text-textColorBlack gradient-background">
            <div className="absolute top-[-21px] right-[50%] transform translate-x-1/2  h-[42px] w-[169px] gradient-diagonal flex justify-center items-center rounded-[18px] shadow-[0px_4px_16px_1px_rgba(0,0,0,0.25)]">
              <p className="text-textColorWhite uppercase text-base leading-[1.17] font-bold">
                Best seller
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-[12px] lg:mb-[18px]">
                <h3 className="uppercase font-semibold text-base leading-[1.17] lg:text-xl lg:leading-[1.17]">
                  {t("pro.title")}
                </h3>
                <div className="bg-textColorBlack rounded-[30px] py-[10px] px-[34px] lg:w-[119px]">
                  <p className="gradient-secondary-text text-base leading-[1.17] uppercase font-bold">
                    PRO
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-[22px]  mb-[20px]">
                <p className="font-manrope text-[64px] font-bold uppercase leading-[1.17] lg:text-[74px] lg:leading-[1.17]">
                  {PRICES.PRO.SALE}
                </p>
                <p className="font-manrope text-xl font-bold uppercase leading-[1.17] line-through">
                  {PRICES.PRO.REGULAR}
                </p>
              </div>

              <ul className="flex flex-col gap-[6px]  lg:gap-[7px]">
                {proPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-[8px]">
                    <div className="w-5 h-5 bg-textColorBlack rounded-[50%] flex-shrink-0" />
                    <p className="uppercase font-semibold text-base leading-[1.17]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <PurchaseBtn
              onClick={() => {
                handleClick("pro");
              }}
              discount={false}
              buttonVariant="small"
              btnBg="#0C0117"
              textColor="#fff"
              customId="buy2"
              isBlicking={true}
            />
          </li>
        </ul>
      </div>
    </Container>
  );
}
