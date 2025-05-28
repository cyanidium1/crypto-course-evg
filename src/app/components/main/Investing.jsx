"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../../../utils/Container";
import { motion } from "framer-motion";
import investingImageMob from "../../../../public/image/investing/invest-mob.png";
import investingImageDesk from "../../../../public/image/investing/invest-desk.png";
import investingShadowMob from "../../../../public/image/investing/invest-shadow-mob.png";
import investingShadowDesk from "../../../../public/image/investing/invest-shadow-desk.png";
import investingMoney from "../../../../public/image/investing/invest-money.png";
import PurchaseBtn from "./common/PurchaseBtn";
import { PRICES } from "../../constants/prices";

const Investing = () => {
  const t = useTranslations("Investing");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container>
      <motion.div
        className="px-10 lg:px-20 pb-[100px] lg:pb-[200px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative max-w-[423px] mx-auto lg:max-w-[1120px] lg:flex lg:flex-col">
          <div className="w-[313px] mx-auto lg:w-[679px] mb-[279px] lg:mb-[28px] lg:mx-0">
            <h2 className="text-2xl w-[277px] font-bold lg:text-left lg:text-5xl lg:w-[536px] uppercase">
              {t("title")}
            </h2>
          </div>
          <div className="w-[313px] ml-auto lg:mr-auto lg:ml-0">
            <p className="w-[278px] text-right text-sm mb-12 lg:mb-10   text-white/90 z-30 relative lg:w-[465px] lg:text-base lg:text-left">
              {t("description")}
            </p>
          </div>
          <div>
            <Image
              src={investingShadowMob}
              alt="Shadow"
              className="absolute right-0 z-20 bottom-[-60px] lg:hidden"
              width={393}
              height={518}
            />
            <Image
              src={investingImageMob}
              alt="Investing"
              className="absolute right-[30px] top-[125px] lg:hidden"
              width={313}
              height={313}
            />
            <Image
              src={investingShadowDesk}
              alt="Shadow"
              className="hidden overflow-hidden absolute right-[-80px] z-20 bottom-[-170px] lg:block"
            />
            <Image
              src={investingMoney}
              alt="Money"
              className="hidden overflow-hidden absolute right-[100px] top-[15px] lg:block"
              width={250}
              height={250}
            />
            <Image
              src={investingImageDesk}
              alt="Investing"
              className="hidden lg:block lg:absolute lg:right-0 lg:top-0"
              width={442}
              height={442}
            />
          </div>
          <div className="flex flex-col items-center lg:w-[530px] relative z-20">
            <PurchaseBtn buttonVariant="large" />
            <div className="flex items-center gap-[10px] lg:gap-4 mt-3 justify-center w-full relative z-20">
              <p className="text-[#FF4A77] text-xl font-semibold leading-[1.08] lg:text-2xl lg:leading-normal">
                {PRICES.BASE.SALE}
              </p>
              <p className="text-[#C5C5C5] font-semibold text-sm line-through">
                {PRICES.BASE.REGULAR}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Investing;
