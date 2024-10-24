"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@material-tailwind/react";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";

const PageHeading = ({ page, heading, bg }) => {
  const t = useTranslations(page);
  const router = useRouter();
  const locale = useLocale();

  // page heading styles
  const styles = {
    container: `w-full relative`,
    background: `object-cover object-center`,
    wrapper: `h-full w-full bg-black/75 grid place-items-center px-5 pt-[280px] mobile:pt-[260px] pb-[40px] relative z-[1]`,
    heading: `font-semibold text-[72px] laptop:text-[60px] mobile:text-[48px] text-white leading-none mb-2 mobile:mb-1`,
    action: `flex items-center gap-1`,
  };

  return (
    <section className={styles.container}>
      {/* background */}
      <Image
        src={bg}
        alt={`Yaseen Aftab Foundation - ${page} background`}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className={styles.background}
      />

      {/* wrapper */}
      <div className={styles.wrapper}>
        {/* heading */}
        <h1 className={styles.heading}>{heading ? heading : t("heading")}</h1>
        {/* back */}
        <Button size="lg" color="white" variant="text" onClick={() => router.back()} className={styles.action}>
          <MdArrowBack /> {locale === "en" ? "Go back" : "ফিরে যান"}
        </Button>
      </div>
    </section>
  );
};

export default PageHeading;
