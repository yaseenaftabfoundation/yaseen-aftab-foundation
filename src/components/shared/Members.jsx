import { useTranslations } from "next-intl";
import Council from "./Council";

const Members = ({ councils, members }) => {
  const t = useTranslations("AboutPage");

  // members styles
  const styles = {
    section: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px]
      mx-auto px-5 mb-28 laptop:mb-24 mobile:mb-20
    `,
    heading: `heading-02 text-center mb-12`,
    councils: `grid gap-12`,
  };

  return (
    <section className={styles.section}>
      {/* heading */}
      <h2 className={styles.heading}>{t("members")}</h2>

      {/* councils */}
      <div className={styles.councils}>
        {councils.map((council, index) => (
          <Council key={index} council={council.localizations[0].title} members={members} />
        ))}
      </div>
    </section>
  );
};

export default Members;
