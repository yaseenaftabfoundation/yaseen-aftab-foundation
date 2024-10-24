import { getIframeURL } from "@/utils/getIframeURL";
import { useTranslations } from "next-intl";
import { Button } from "@/app/material";
import { Link } from "@/i18n/routing";
import MandalaBg from "@/assets/mandala-bg.png";
import QuranBg from "@/assets/quran-bg.jpg";
import Image from "next/image";
import Video from "../shared/Video";

const AboutSection = ({ about }) => {
  const t = useTranslations("HomePage.AboutSection");

  // about section styles
  const styles = {
    section: `
      max-w-[1920px] min-xl:w-[1400px] min-xl:px-5 w-full mx-auto grid grid-cols-3
      tablet:flex tablet:flex-col-reverse mb-28 laptop:mb-24 mobile:mb-20
    `,
    background: `object-cover object-center`,

    content: {
      container: `col-span-1 w-full h-full relative`,
      wrapper: `w-full h-full bg-teal-700/90 text-white flex flex-col justify-center relative z-[1] p-20 laptop:px-10 mobile:px-5`,
      heading: `heading-02 text-white mb-5`,
      description: `paragraph text-white text-justify-forced !line-clamp-6 mb-10`,
    },

    video: {
      container: `col-span-2 w-full h-full p-20 laptop:px-10 mobile:px-5 relative`,
      thumbnail: `w-full aspect-video rounded-xl overflow-hidden relative z-[1]`,
    },
  };
  return (
    <section className={styles.section}>
      {/* about content */}
      <div className={styles.content.container}>
        {/* background */}
        <Image
          src={QuranBg}
          alt="Yaseen aftab foundation - About section background"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className={styles.background}
        />
        {/* wrapper */}
        <div className={styles.content.wrapper}>
          {/* heading */}
          <h2 className={styles.content.heading}>{t("heading")}</h2>
          {/* description */}
          <div
            dangerouslySetInnerHTML={{ __html: about.localizations[0].description.html }}
            className={styles.content.description}
          />
          {/* about link */}
          <Link href="/about">
            <Button size="lg" color="white" variant="filled" className={styles.content.action}>
              {t("action")}
            </Button>
          </Link>
        </div>
      </div>

      {/* about video */}
      <div className={styles.video.container}>
        {/* background */}
        <Image
          src={MandalaBg}
          alt="Yaseen aftab foundation - About section background"
          quality={100}
          fill
          sizes="100vw"
          className={styles.background}
        />

        {/* wrapper */}
        <Video
          thumbnail={about.thumbnail.url}
          video={about.video}
          thumbnailSize="100vw"
          thumbnailStyles={styles.thumbnail}
        />
      </div>
    </section>
  );
};

export default AboutSection;
