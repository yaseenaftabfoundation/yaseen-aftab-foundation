import { Link } from "@/i18n/routing";
import { Button } from "@/app/material";
import { useTranslations } from "next-intl";
import ProgramCard from "../shared/ProgramCard";

const ProgramsSection = ({ programs, locale }) => {
  const t = useTranslations("HomePage.ProgramsSection");

  // programs section styles
  const styles = {
    section: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px]
      mx-auto px-5 mb-28 laptop:mb-24 mobile:mb-20
    `,

    heading: {
      container: `flex items-center justify-between mobile:justify-center mb-12`,
      title: `heading-02 mobile:text-center`,
      action: `mobile:hidden`,
    },

    programs: {
      container: `grid grid-cols-3 tablet:grid-cols-2 tablet:justify-center mobile:grid-cols-1 gap-x-5 gap-y-11 pt-6`,
      action: `hidden mobile:block w-full`,
    },
  };

  return (
    <section className={styles.section}>
      {/* heading */}
      <div className={styles.heading.container}>
        {/* title */}
        <h2 className={styles.heading.title}>{t("heading")}</h2>
        {/* action for desktop */}
        <Link href="/programs">
          <Button variant="outlined" size="lg" className={styles.heading.action}>
            {t("action")}
          </Button>
        </Link>
      </div>

      {/* programs */}
      <div className={styles.programs.container}>
        {programs.map((program) => (
          <ProgramCard
            key={program.slug}
            cover={program.cover.url}
            video={program.video}
            title={program.localizations[0].title}
            slug={program.slug}
            date={program.date}
            description={program.localizations[0].description.html}
            view={t("view")}
            locale={locale}
          />
        ))}

        {/* action for mobile */}
        <Link href="/programs">
          <Button variant="outlined" size="lg" className={styles.programs.action}>
            {t("action")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProgramsSection;
