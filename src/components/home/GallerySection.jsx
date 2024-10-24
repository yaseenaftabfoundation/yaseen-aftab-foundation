import { Link } from "@/i18n/routing";
import { Button } from "@/app/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const GallerySection = ({ gallery }) => {
  const t = useTranslations("HomePage.GallerySection");

  // gallery section styles
  const styles = {
    container: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px]
      mx-auto px-5 mb-28 laptop:mb-24 mobile:mb-20
    `,
    heading: `heading-02 text-center mb-12`,
    images: {
      container: `grid grid-cols-3 mobile:grid-cols-2 gap-5 relative`,
      wrapper: `w-full aspect-square rounded-xl overflow-hidden relative`,
      image: `object-cover object-center`,
      overlay: `
        w-full h-full bg-gradient-to-b from-white/0 via-white/80 to-white/100
        absolute inset-0 z-[1] grid place-items-center
      `,
      action: `scale-125 laptop:scale-110 mobile:scale-100`,
    },
  };

  return (
    <section className={styles.container}>
      {/* heading */}
      <h2 className={styles.heading}>{t("heading")}</h2>

      {/* images */}
      <div className={styles.images.container}>
        {gallery.map((image, index) => (
          <figure key={index} className={styles.images.wrapper}>
            <Image
              src={image.url}
              alt="Yaseen Aftab Foundation's Gallery Photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.images.image}
            />
          </figure>
        ))}

        {/* overlay */}
        <div className={styles.images.overlay}>
          {/* gallery link */}
          <Link href="/gallery">
            <Button size="lg" color="teal" variant="filled" className={styles.images.action}>
              {t("action")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
