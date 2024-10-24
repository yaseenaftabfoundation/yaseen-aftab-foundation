import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Button, Carousel } from "@/app/material";
import Image from "next/image";

const HeroSection = ({ slides }) => {
  const t = useTranslations("HomePage.HeroSection");

  // hero section styles
  const styles = {
    carousel: `w-full h-[98vh] min-h-[800px] max-h-[1200px] laptop:min-h-[720px] laptop:max-h-[1080px] mobile:h-[100svh]`,
    slide: {
      container: `h-full w-full relative`,
      cover: `h-full w-full object-cover`,
      content: `h-full w-full bg-black/75 grid place-items-center absolute inset-0 pt-28`,
      wrapper: `w-1/2 laptop:w-2/3 mobile:w-3/4 text-center`,
      heading: `
        font-semibold text-[52px] laptop:text-[40px] mobile:text-[30px]
        text-white leading-snug mb-2 mobile:mb-1
      `,
      subheading: `subheading text-white/80 mb-10 mobile:mb-8`,
      actions: `flex mobile:flex-col justify-center gap-2`,
    },
  };

  return (
    <section>
      <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={8000}
        transition={{ ease: "easeInOut", duration: 1 }}
        className={styles.carousel}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide.container}>
            {/* cover */}
            <Image
              src={slide.cover.url}
              alt={slide.localizations[0].heading}
              fill
              priority
              sizes="100vw"
              className={styles.slide.cover}
            />

            {/* content */}
            <div className={styles.slide.content}>
              {/* wrapper */}
              <div className={styles.slide.wrapper}>
                {/* heading */}
                <h1 className={styles.slide.heading}>{slide.localizations[0].heading}</h1>
                {/* subheading */}
                <h2 className={styles.slide.subheading}>{slide.localizations[0].subheading}</h2>

                {/* actions */}
                <div className={styles.slide.actions}>
                  {/* programs link */}
                  <Link href="/programs">
                    <Button size="lg" color="white" variant="filled">
                      {t("programs")}
                    </Button>
                  </Link>
                  {/* gallery link */}
                  <Link href="/gallery">
                    <Button size="lg" color="white" variant="text">
                      {t("gallery")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
