"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TimerBlockHero() {
  const t = useTranslations("Hero");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDuration = 5 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const savedTime = localStorage.getItem("countdownTime");
    const countdownStart = savedTime ? parseInt(savedTime, 10) : now;

    const countdownDate = countdownStart + countdownDuration;

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem("countdownTime");
      } else {
        setTimeLeft({
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    const handleBeforeUnload = () => {
      localStorage.setItem("countdownTime", countdownStart.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="mx-auto mt-[54px] mb-5 md:mt-0 rounded-[18px] py-[26px] md:py-[35px] px-[22px] md:pl-5 md:pr-[24px] text-center md:max-w-[530px] border-[1.5px] md:border-[1.5px] border-white/50 md:flex md:mb-[15px] md:gap-[22px]">
      <div className="md:max-w-[294px]">
        <h3 className="text-xl leading-[1.17] l:leading-[1.17] uppercase font-bold text-white mb-[18px] md:mb-3">
          {t("timer")}
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex justify-center items-center gap-[10px] text-xl uppercase font-bold text-white md:max-w-[294px]">
            <div className="w-[60px] md:w-[80px] h-[48px] md:h-[35px] flex items-center justify-center rounded-[10px] border-[1.5px] border-white/50 bg-transparent">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="font-bold text-xl leading-[1.17]">:</span>
            <div className="w-[60px] md:w-[80px] h-[48px] md:h-[35px] flex items-center justify-center rounded-[10px] border-[1.5px] border-white/50 bg-transparent">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="font-bold text-xl leading-[1.17]">:</span>
            <div className="w-[60px] md:w-[80px] h-[48px] md:h-[35px] flex items-center justify-center rounded-[10px] border-[1.5px] border-white/50 bg-transparent">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block gradient-secondary-text text-base l:text-base font-semibold w-[168px] text-left shrink-0">
        <span className="font-bold">PDF</span> "{t("pdfText")}"
      </div>
    </div>
  );
}
