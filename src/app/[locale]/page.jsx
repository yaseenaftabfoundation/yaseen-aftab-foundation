import { unstable_setRequestLocale } from "next-intl/server";
import { getAbout, getHomeGallery, getHomePrograms, getSlides } from "@/services";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ProgramsSection from "@/components/home/ProgramsSection";
import GallerySection from "@/components/home/GallerySection";

const HomePage = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const slides = await getSlides(locale);
  const about = await getAbout(locale);
  const programs = await getHomePrograms(locale);
  const gallery = await getHomeGallery();

  return (
    <main className="-mt-[220px] mb-28 laptop:mb-24 mobile:mb-20">
      {/* hero section */}
      <HeroSection slides={slides} locale={locale} />
      {/* intro section */}
      <AboutSection about={about} />
      {/* phylosophy section */}
      <PhilosophySection />
      {/* programs section */}
      <ProgramsSection programs={programs} locale={locale} />
      {/* gallery section */}
      <GallerySection gallery={gallery} />
    </main>
  );
};

export default HomePage;
