import { unstable_setRequestLocale } from "next-intl/server";
import { getAbout, getCouncils, getMembers } from "@/services";
import PageHeading from "@/components/shared/PageHeading";
import Members from "@/components/shared/Members";
import AboutBg from "@/assets/about-bg.jpg";
import Introduction from "@/components/shared/Introduction";

const AboutPage = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const about = await getAbout(locale);
  const councils = await getCouncils(locale);
  const members = await getMembers(locale);

  return (
    <main className="-mt-[220px]">
      {/* heading */}
      <PageHeading page="AboutPage" bg={AboutBg} />
      {/* intruduction */}
      <Introduction about={about} />
      {/* Members */}
      <Members councils={councils} members={members} />
    </main>
  );
};

export default AboutPage;
