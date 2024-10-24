import Member from "./Member";

const Council = ({ council, members }) => {
  const filteredMembers = members.filter((member) => member.localizations[0].council.title === council);

  // council styles
  const styles = {
    container: `w-full h-full`,
    heading: {
      container: `flex items-center gap-5 mb-12`,
      divider: `w-full border-b border-black/25`,
      text: `heading-03 text-center text-nowrap`,
    },
    members: `grid grid-cols-4 laptop:grid-cols-3 mobile:grid-cols-2 gap-5`,
  };

  return (
    <div className={styles.container}>
      {/* heading */}
      <div className={styles.heading.container}>
        {/* divider */}
        <div className={styles.heading.divider}></div>
        {/* title */}
        <h3 className={styles.heading.text}>{council}</h3>
        {/* divider */}
        <div className={styles.heading.divider}></div>
      </div>

      {/* members */}
      <div className={styles.members}>
        {filteredMembers.map((member, index) => (
          <Member key={index} avatar={member.avatar} name={member.localizations[0].name} />
        ))}
      </div>
    </div>
  );
};

export default Council;
