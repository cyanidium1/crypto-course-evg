"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import moneyMob from "../../../../public/image/stress-minds/money-1.png";
import moneyMob2 from "../../../../public/image/stress-minds/money-2.png";
import moneyMob3 from "../../../../public/image/stress-minds/money-3.png";
import moneyMob31 from "../../../../public/image/stress-minds/money-3-1.png";
import moneyDesk1 from "../../../../public/image/stress-minds/money-desk-1.png";
import moneyDesk2 from "../../../../public/image/stress-minds/money-desk-2.png";
import moneyDesk3 from "../../../../public/image/stress-minds/money-desk-3.png";

const StressMinds = () => {
  const t = useTranslations("StressMinds");

  return (
    <section className="container mx-auto px-5 pb-[76px] md:pb-[100px]">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-20">
        {t("title")}
      </h2>

      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
        {/* Card 1 */}
        <div className="relative">
          <Image
            src={moneyMob}
            alt={t("card1Title")}
            quality={95}
            width={313}
            height={451}
            className="md:hidden"
          />
          <Image
            src={moneyDesk1}
            alt={t("card2Title")}
            quality={95}
            width={360}
            height={545}
            className="hidden md:block"
          />
          <div className="absolute inset-0 transparent rounded-2xl p-[22px] flex flex-col justify-end">
            <h3 className="text-xl font-bold mb-5 uppercase text-white">
              {t("card1Title")}
            </h3>
            <p className="text-sm md:text-base font-normal text-gray-200">
              {t("card1Text")}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <Image
            src={moneyMob2}
            alt={t("card2Title")}
            quality={95}
            width={313}
            height={451}
            className="md:hidden"
          />
          <Image
            src={moneyDesk2}
            alt={t("card2Title")}
            quality={95}
            width={360}
            height={545}
            className="hidden md:block"
          />
          <div className="absolute inset-0 transparent rounded-2xl p-[22px] flex flex-col justify-end">
            <h3 className="text-xl  font-bold mb-5 uppercase text-white">
              {t("card2Title")}
            </h3>
            <p className="text-sm md:text-base font-normal text-gray-200">
              {t("card2Text")}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <Image
            src={moneyMob3}
            alt={t("card3Title")}
            quality={95}
            width={313}
            height={451}
            className="md:hidden"
          />
          <Image
            src={moneyMob31}
            alt={t("card3Title")}
            quality={95}
            width={265}
            height={195}
            className="absolute top-[90px] left-[30px] md:hidden"
          />
          <Image
            src={moneyDesk3}
            alt={t("card2Title")}
            quality={95}
            width={360}
            height={545}
            className="hidden md:block"
          />
          <div className="absolute inset-0 transparent rounded-2xl p-[22px] flex flex-col justify-end">
            <h3 className="text-xl  font-bold mb-5 uppercase text-white">
              {t("card3Title")}
            </h3>
            <p className="text-sm md:text-base font-normal text-gray-200">
              {t("card3Text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StressMinds;
