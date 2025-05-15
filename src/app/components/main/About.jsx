import Container from "../../../utils/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import img from "../../../../public/image/about.jpg";
import SocLinks from "../main/common/SocLinks";
import { socLinksAbout } from "../../../utils/routes";

export default function About() {
  const t = useTranslations("About");

  const statistic = Object.values({
    video: {
      text: t("statistic.video"),
      num: "2500+",
    },
    views: {
      text: t("statistic.views"),
      num: "$150 000",
    },
    subscriber: {
      text: t("statistic.subscriber"),
      num: "100+",
    },
  });

  return (
    <Container>
      <div id="about" className="px-10 lg:px-20">
        <h2 className="uppercase font-bold text-2xl l:text-[48px] leading-[1.17] text-center mb-[36px] l:mb-[52px]">
          {t("title")}
        </h2>

        <div className="flex flex-col md:flex-row md:items-end gap-7  md:gap-5 l:gap-[60px]">
          {/* img */}
          <div className="rounded-[15.4px] w-full md:h-[398px] lg:w-[550px] overflow-hidden">
            <Image
              src={img}
              alt="Евгений Гребиненко - крипто-эксперт"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              className="w-full h-full object-cover rounded-[18px] lg:object-[-4px,-105px] lg:h-auto lg:object-unset"
              quality={75}
              priority
              loading="eager"
            />
          </div>

          {/* /img */}

          {/*text */}
          <div className="md:w-[100%] l:max-w-[415px]">
            <h3 className="text-center md:text-start uppercase font-semibold text-2xl leading-[1.17] md:text-[32px] mb-5 l:mb-[30px]">
              {t("subtitle")}
              <span className="block gradient-secondary-text">
                {t("colorSubtitle")}
              </span>
            </h3>

            <p className="text-center md:text-start text-sm md:text-[18px] leading-[1.17] mb-9 md:mb-[51px]">
              {t("description")}
            </p>

            {/* soclinks */}
            <div className="flex justify-center md:justify-start">
              <SocLinks socialLinks={socLinksAbout} variant="about" />
            </div>

            {/* /soclinks */}
          </div>
          {/* /text */}
        </div>
      </div>
      {/* statistic */}
      <div className="mb-[76px] mg:pb-[200px] mx-10 md:mx-0 px-12 py-9 rounded-[18px] md:rounded-none l:py-[63px] lg:pt-[70px] mt-9 l:mt-[84px] gradient-background">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[94px] mx-auto justify-items-center lg:max-w-[880px] lg:pt-[10px]">
          {statistic.map(({ num, text }, index) => (
            <li key={index}>
              <p className="font-semibold text-4xl leading-[1.17] l:text-5xl l:leaading-[1.17] mb-1 l:mb-[7.94px] text-center">
                {num}
              </p>
              <p className="text-center uppercase font-semibold text-xs leading-[1.17] max-w-[146px] l:max-w-[182px] l:text-lg l:leading-[1.17] mx-auto">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
