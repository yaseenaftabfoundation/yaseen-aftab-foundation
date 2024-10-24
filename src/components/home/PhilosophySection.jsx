import { useTranslations } from "next-intl";

const PhilosophySection = () => {
  const t = useTranslations("HomePage.PhilosophySection");

  // philosophy section styles
  const styles = {
    section: `w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px] mx-auto px-5 mb-28 laptop:mb-24 mobile:mb-20`,
    heading: `heading-02 text-center`,
  };

  return (
    <section className={styles.section}>
      {/* heading */}
      <h2 className={styles.heading}>{t("heading")}</h2>

      {/* philosophies */}
      <div></div>
    </section>
  );
};

export default PhilosophySection;
