import { unstable_setRequestLocale } from "next-intl/server";
import { getPrograms } from "@/services";
import PageHeading from "@/components/shared/PageHeading";
import Programs from "@/components/shared/Programs";
import ProgramsBg from "@/assets/programs-bg.jpg";

const ProgramsPage = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const programs = await getPrograms(locale);

  return (
    <main className="-mt-[220px]">
      {/* heading */}
      <PageHeading page="ProgramsPage" bg={ProgramsBg} />

      {/* programs */}
      <Programs programs={programs} locale={locale} />
    </main>
  );
};

export default ProgramsPage;
