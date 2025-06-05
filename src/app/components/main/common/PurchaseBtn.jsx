"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function PurchaseBtn({
  buttonVariant = "default",
  btnBg = "#fff",
  textColor = "#0C0117",
  discount = true,
  isBlicking = false,
  onClick,
  customId = "none",
}) {
  const t = useTranslations("ModalBtn");
  const f = useTranslations("Tariffs");
  const btnText = t("btnText");
  const btnTextSmall = f("button");

  const scrollToTariffs = () => {
    const tariffsSection = document.getElementById("tariffs");
    if (tariffsSection) {
      tariffsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Анимация круга
  const circleVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%", transition: { duration: 1, ease: "easeOut" } },
  };

  // Анимация текста
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const buttonClasses =
    buttonVariant === "large"
      ? "w-[313px] md:w-full h-[60px] lg:h-[74px] rounded-[18419.209px] bg-textColorWhite text-black text-sm lg:text-[22px]  font-semibold shadow-[4px_6px_10px_4px_rgba(167,93,243,0.20)_inset] relative"
      : buttonVariant === "largeGradient"
      ? "w-full h-[60px] lg:h-[74px] rounded-[40px] btnGradient text-sm lg:text-[22px] font-semibold relative"
      : buttonVariant === "small"
      ? "w-full rounded-[52.321px] h-[47px] lg:h-[57px] md:text-base font-semibold"
      : "lg:w-[190px] h-10 px-4 py-[10px] rounded-[9999px] gradient-to-right text-textColorWhite text-xs font-semibold leading-relaxed";

  return (
    <>
      <Button
        id={customId}
        onClick={() => {
          localStorage.setItem("selectedPlan", "base");
          scrollToTariffs();
          if (onClick) onClick();
        }}
        style={{ backgroundColor: btnBg, color: textColor }}
        className={`${buttonClasses} ${isBlicking ? "purchase-btn" : ""}`}
      >
        <motion.div
          className="inline-flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          {Array.from(buttonVariant === "small" ? btnTextSmall : btnText).map(
            (char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === " " ? "inline-block w-1" : ""}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            )
          )}
        </motion.div>

        {(buttonVariant === "large" || buttonVariant === "largeGradient") && (
          <motion.div
            className="absolute w-[59px] h-[60px] lg:w-[74px] lg:h-[74px] rounded-[37px] bg-[#FF4A77] top-0 right-0 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={circleVariants}
          >
            <p className="text-textColorWhite text-xl font-semibold leading-tight lg:text-2xl lg:leading-normal">
              -80%
            </p>
          </motion.div>
        )}
      </Button>
    </>
  );
}
