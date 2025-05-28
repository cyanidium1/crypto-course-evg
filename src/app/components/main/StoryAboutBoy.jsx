"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../../../utils/Container";
import { motion } from "framer-motion";
import graphImageMob from "../../../../public/image/story-about-boy/graphic-mob.png";
import graphImageDesk from "../../../../public/image/story-about-boy/graphic-desk.png";

const StoryAboutBoy = () => {
  const t = useTranslations("StoryAboutBoy");

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
        className="px-10 lg:px-20 pb-[136px] lg:pb-[200px] relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="w-[313px] mx-auto mb-10 lg:flex lg:w-auto lg:mb-[89px]">
          <h2 className="text-2xl text-center lg:text-5xl font-bold mb-[32px] uppercase lg:w-[679px] lg:mr-[128px] lg:mb-0 lg:text-left">
            {t("title")}{" "}
            <span className="gradient-secondary-text uppercase">
              {t("highlightedText")}
            </span>
          </h2>
          <p className="text-sm text-white/90 lg:w-[313px] lg:text-base lg:mt-auto">
            {t("description")}
          </p>
        </div>
        <div className="relative mx-auto overflow-hidden rounded-[7px]">
          <Image
            src={graphImageMob}
            alt="Bitcoin growth graph"
            className="mx-auto lg:hidden"
            width={313}
            height={123}
          />
          <Image
            src={graphImageDesk}
            alt="Bitcoin growth graph"
            className="mx-auto hidden lg:block"
            height={442}
          />
          <div className="absolute inset-0 top-0 left-0 bg-[#0C0117] opacity-40 lg:opacity-60" />
        </div>
      </motion.div>
    </Container>
  );
};

export default StoryAboutBoy;
