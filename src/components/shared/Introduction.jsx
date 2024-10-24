import Video from "./Video";

const Introduction = ({ about }) => {
  // introduction styles
  const styles = {
    section: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px] px-5 mx-auto
      grid gap-12 mobile:gap-5 mt-20 mobile:mt-5 mb-28 laptop:mb-24 mobile:mb-20
    `,

    video: `w-full aspect-video rounded-xl overflow-hidden`,

    content: {
      container: `w-full relative px-20 laptop:px-10 mobile:px-0`,
      description: `paragraph text-justify-forced`,
    },
  };

  return (
    <section className={styles.section}>
      {/* wrapper */}
      <div className={styles.video}>
        {/* intro video */}
        <Video thumbnail={about.thumbnail.url} video={about.video} thumbnailSize="100vw" />
      </div>

      {/* about content */}
      <div className={styles.content.container}>
        {/* description */}
        <div
          dangerouslySetInnerHTML={{ __html: about.localizations[0].description.html }}
          className={styles.content.description}
        />
      </div>
    </section>
  );
};

export default Introduction;
