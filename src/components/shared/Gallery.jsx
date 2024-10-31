"use client";

import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

const Gallery = ({ gallery }) => {
  // gallery styles
  const styles = {
    container: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px] mx-auto
      px-5 pt-20 laptop:pt-10 mobile:pt-5 mb-28 laptop:mb-24 mobile:mb-20
    `,

    images: {
      container: `grid grid-cols-3 mobile:grid-cols-2 gap-5`,
      wrapper: `
        w-full aspect-square rounded-xl overflow-hidden cursor-pointer
        relative hover:opacity-75 transition-opacity duration-300
      `,
      image: `object-cover object-center`,
    },
  };

  return (
    <section className={styles.container}>
      <PhotoProvider>
        {/* image gallery */}
        <div className={styles.images.container}>
          {gallery.map((image, index) => (
            <PhotoView key={index} src={image.url}>
              {/* image preview */}
              <figure key={index} className={styles.images.wrapper}>
                <Image
                  src={image.url}
                  alt="Yaseen Aftab Foundation's Gallery Photo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.images.image}
                />
              </figure>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
