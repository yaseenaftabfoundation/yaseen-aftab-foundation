import { useTranslations } from "next-intl";
import ProgramCard from "./ProgramCard";

const Programs = ({ programs, locale }) => {
  const t = useTranslations("ProgramsPage");

  // programs styles
  const styles = {
    container: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px]
      grid grid-cols-3 mobile:grid-cols-1 gap-x-5 gap-y-11 mt-6 mx-auto
      px-5 pt-20 laptop:pt-10 mobile:pt-5 mb-28 laptop:mb-24 mobile:mb-20
    `,
  };

  return (
    <section className={styles.container}>
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
    </section>
  );
};

export default Programs;
