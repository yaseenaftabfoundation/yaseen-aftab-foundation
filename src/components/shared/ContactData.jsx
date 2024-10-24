const ContactData = ({ icon, title, data, secondaryData }) => {
  // contact data styles
  const styles = {
    container: `flex gap-5 laptop:gap-4 mobile:gap-3`,
    icon: `text-3xl laptop:text-2xl mobile:text-xl text-teal-500`,
    content: ``,
    title: `heading-04 mb-2`,
    data: `paragraph text-black/75`,
  };

  return (
    <div className={styles.container}>
      {/* icon */}
      <span className={styles.icon}>{icon}</span>

      {/* content */}
      <div className={styles.content}>
        {/* title */}
        <h3 className={styles.title}>{title}</h3>
        {/* data */}
        <p className={styles.data}>{data}</p>
        {/* secondary data */}
        {secondaryData && <p className={styles.data}>{secondaryData}</p>}
      </div>
    </div>
  );
};

export default ContactData;
