"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../../../utils/Container";
import { motion } from "framer-motion";
import frameMob from "../../../../public/image/invite-block/frame-mob.png";
import frameDesk from "../../../../public/image/invite-block/frame-desk.png";
import PurchaseBtn from "./common/PurchaseBtn";
import { PRICES } from "../../constants/prices";

const InviteBlock = () => {
  const t = useTranslations("InviteBlock");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      <div className="px-10 lg:px-20 pb-[100px] lg:pb-[200px] relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10"
        >
          <div className="text-center mb-[63px] w-[273px] mx-auto md:w-auto lg:mb-[80px]">
            <h2 className="text-2xl font-bold md:text-5xl">{t("title")}</h2>
            <p className="text-xl font-normal md:text-4xl">{t("subtitle")}</p>
          </div>

          <div className="flex flex-col gap-5 items-center last:gap-0 l:flex-row l:justify-center">
            <motion.div variants={cardVariants} className="relative">
              <Image
                src={frameMob}
                alt={t("card1.title")}
                className="lg:hidden"
              />
              <Image
                src={frameDesk}
                alt={t("card1.title")}
                className="hidden lg:block"
              />
              <div className="absolute inset-0 transparent px-[26px] py-[15px] xs:p-[26px] flex flex-col md:py-[18px] md:px-[26px]">
                <h3 className="text-base mb-[10px] lg:text-xl font-bold xs:mb-5 text-white uppercase">
                  {t("card1.title")}
                </h3>
                <p className="text-white/90 text-sm xs:w-[266px] lg:text-base lg:w-[308px]">
                  {t("card1.text")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative">
              <Image
                src={frameMob}
                alt={t("card2.title")}
                className="lg:hidden"
              />
              <Image
                src={frameDesk}
                alt={t("card2.title")}
                className="hidden lg:block"
              />
              <div className="absolute inset-0 transparent px-[26px] py-[15px] xs:p-[26px] flex flex-col md:py-[18px] md:px-[26px]">
                <h3 className="text-base mb-[10px] lg:text-xl font-bold xs:mb-5 text-white uppercase">
                  {t("card2.title")}
                </h3>
                <p className="text-white/90 text-sm xs:w-[266px] lg:text-base lg:w-[308px]">
                  {t("card2.text")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative">
              <Image
                src={frameMob}
                alt={t("card3.title")}
                className="lg:hidden"
              />
              <Image
                src={frameDesk}
                alt={t("card3.title")}
                className="hidden lg:block"
              />
              <div className="absolute inset-0 transparent px-[26px] py-[15px] xs:p-[26px] flex flex-col md:py-[18px] md:px-[26px]">
                <h3 className="text-base mb-[10px] lg:text-xl font-bold xs:mb-5 text-white uppercase">
                  {t("card3.title")}
                </h3>
                <p className="text-white/90 text-sm xs:w-[266px] lg:text-base lg:w-[308px]">
                  {t("card3.text")}
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-[32px] flex flex-col items-center md:mt-[40px]">
            <div className="md:w-[530px]">
              <PurchaseBtn buttonVariant="large" />
            </div>
            <div className="flex items-center gap-[10px] lg:gap-4 mt-3 justify-center w-full">
              <p className="text-[#FF4A77] text-xl font-semibold leading-[1.08] lg:text-2xl lg:leading-normal">
                {PRICES.BASE.SALE}
              </p>
              <p className="text-[#C5C5C5] font-semibold text-sm line-through">
                {PRICES.BASE.REGULAR}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default InviteBlock;
