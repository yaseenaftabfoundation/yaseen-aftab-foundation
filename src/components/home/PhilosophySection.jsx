import { useTranslations } from "next-intl";
import Philosophy from "../shared/Philosophy";
import DawahIcon from "@/assets/dawah.png";
import PurifyIcon from "@/assets/purification.png";
import CharityIcon from "@/assets/charity.png";
import ServiceIcon from "@/assets/service.png";

const PhilosophySection = () => {
  const t = useTranslations("HomePage.PhilosophySection");

  // phyilosopies
  const philosophies = [
    { title: "الدعوة", subtitle: t("dawah"), icon: DawahIcon },
    { title: "التزكية", subtitle: t("purification"), icon: PurifyIcon },
    { title: "الصدقة", subtitle: t("charity"), icon: CharityIcon },
    { title: "خدمة المجتمع", subtitle: t("service"), icon: ServiceIcon },
  ];

  // philosophy section styles
  const styles = {
    section: `w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px] mx-auto px-5 mb-28 laptop:mb-24 mobile:mb-20`,
    heading: `heading-02 text-center mb-12`,
    phylosophies: `grid grid-cols-4 tablet:grid-cols-2 gap-5`,
  };

  return (
    <section className={styles.section}>
      {/* heading */}
      <h2 className={styles.heading}>{t("heading")}</h2>

      {/* philosophies */}
      <div className={styles.phylosophies}>
        {philosophies.map((philosophy, index) => (
          <Philosophy key={index} title={philosophy.title} subtitle={philosophy.subtitle} icon={philosophy.icon} />
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
