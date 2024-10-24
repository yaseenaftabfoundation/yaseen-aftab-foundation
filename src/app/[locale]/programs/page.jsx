import { unstable_setRequestLocale } from "next-intl/server";
import PageHeading from "@/components/shared/PageHeading";
import ProgramsBg from "@/assets/programs-bg.jpg";

const ProgramsPage = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="-mt-[220px]">
      <PageHeading page="ProgramsPage" bg={ProgramsBg} />
    </main>
  );
};

export default ProgramsPage;
