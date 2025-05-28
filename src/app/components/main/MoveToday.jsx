"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../../../utils/Container";
import { motion } from "framer-motion";
import gradientCircle from "../../../../.next/static/media/gradient-circle.2c3952b2.svg";

const MoveToday = () => {
  const t = useTranslations("MoveToday");

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
      <motion.div
        className="px-10 lg:px-20 pb-[76px] lg:pb-[200px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-10 uppercase lg:mb-[50px]">
          {t("title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-5 lg:w-[1127px] lg:mx-auto">
          <motion.div
            variants={cardVariants}
            className="gradient-to-right p-[1px] rounded-xl w-[313px] lg:w-auto lg:h-[113px]"
          >
            <div className="relative bg-background rounded-xl py-[19px] pl-[73px] pr-[25px] h-full lg:w-[458px] lg:pt-[15px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[25px]">
                <Image
                  src={gradientCircle}
                  alt="circle"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs lg:text-base text-white/90 relative z-10 w-[215px] lg:w-[334px]">
                {t("card1")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="gradient-to-right p-[1px] rounded-xl w-[313px] lg:w-auto lg:h-[113px]"
          >
            <div className="relative bg-background rounded-xl py-[19px] pl-[73px] pr-[25px] h-full lg:w-[335px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[25px]">
                <Image
                  src={gradientCircle}
                  alt="circle"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs lg:text-base text-white/90 relative z-10 w-[215px] lg:w-[237px]">
                {t("card2")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="gradient-to-right p-[1px] rounded-xl w-[313px] lg:w-auto lg:h-[113px]"
          >
            <div className="relative bg-background rounded-xl py-[19px] pl-[73px] pr-[25px] h-full lg:w-[287px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[25px]">
                <Image
                  src={gradientCircle}
                  alt="circle"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs lg:text-base text-white/90 relative z-10 w-[215px] lg:w-[169px]">
                {t("card3")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="gradient-to-right p-[1px] rounded-xl w-[313px] lg:w-auto lg:h-[113px]"
          >
            <div className="relative bg-background rounded-xl py-[19px] pl-[73px] pr-[25px] h-full lg:w-[371px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[25px]">
                <Image
                  src={gradientCircle}
                  alt="circle"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs lg:text-base text-white/90 relative z-10 w-[215px] lg:w-[254px]">
                {t("card4")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="gradient-to-right p-[1px] rounded-xl w-[313px] lg:w-auto lg:h-[113px]"
          >
            <div className="relative bg-background rounded-xl py-[19px] pl-[73px] pr-[25px] h-full lg:pt-[10px] lg:w-[357px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[25px]">
                <Image
                  src={gradientCircle}
                  alt="circle"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs lg:text-base text-white/90 relative z-10 w-[215px] lg:w-[258px]">
                {t("card5")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="gradient-to-right p-[1px] rounded-xl w-[313px] lg:w-auto lg:h-[113px]"
          >
            <div className="relative bg-background rounded-xl py-[19px] pl-[73px] pr-[25px] h-full lg:w-[353px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[25px]">
                <Image
                  src={gradientCircle}
                  alt="circle"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs lg:text-base text-white/90 relative z-10 w-[215px] lg:w-[246px]">
                {t("card6")}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default MoveToday;
