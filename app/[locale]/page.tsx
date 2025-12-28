import AnimatedBadge from "@/shared/lib/shadCN/components/ui/animated-badge";
import { AnimatedShinyButton } from "@/shared/lib/shadCN/components/ui/animated-shiny-button";
import { FadeText } from "@/shared/lib/shadCN/components/ui/fade-text";
import { LetterPullUpText } from "@/shared/lib/shadCN/components/ui/letter-pull-up-text";
import { MultiDirectionSlideText } from "@/shared/lib/shadCN/components/ui/multi-direction-slide-text";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* <HackerBackground className="dark:opacity-30" color="" /> */}

      {/* Fade in welcome text */}
      <FadeText text={t("welcome")} direction="in" wordDelay={0.2} />

      {/* Company name */}
      <LetterPullUpText
        className="font-display text-center text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-20 dark:text-white"
        text={t("company")}
      />

      {/* Digital Twin text */}
      <MultiDirectionSlideText
        className="font-display text-center text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-20 dark:text-white"
        textLeft={t("dt").split(" ")[0]} // "Digital"
        textRight={t("dt").split(" ")[1]} // "Twin"
      />

      {/* Buttons */}
      <div className="relative flex justify-center items-center gap-5 mt-15">
        <AnimatedShinyButton url="/dashboard">
          {t("dashboard")}
        </AnimatedShinyButton>
        <AnimatedBadge
          text={t("checkDocks")}
          color="#22d3ee"
          href="https://github.com/funnyMans/digital-twin"
        />
      </div>
    </div>
  );
}
