import { unstable_setRequestLocale } from "next-intl/server";
import { getGallery } from "@/services";
import PageHeading from "@/components/shared/PageHeading";
import Gallery from "@/components/shared/Gallery";
import GalleryBg from "@/assets/gallery-bg.jpg";

const GalleryPage = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const gallery = await getGallery();

  return (
    <main className="-mt-[220px]">
      {/* heading */}
      <PageHeading page="GalleryPage" bg={GalleryBg} />
      {/* gallery */}
      <Gallery gallery={gallery} />
    </main>
  );
};

export default GalleryPage;
