import { MdLocalPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactData from "./ContactData";

const Contact = ({ map, location, email, secondaryEmail, phone, secondaryPhone }) => {
  const t = useTranslations("ContactPage");

  // contact styles
  const styles = {
    section: `
      w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[800px] mx-auto px-5
      grid grid-cols-3 tablet:grid-cols-1 items-center gap-20 laptop:gap-10 mobile:gap-5
      mb-28 laptop:mb-24 mobile:mb-20 mt-20 mobile:mt-5
    `,

    map: {
      container: `col-span-2 tablet:col-span-1 w-full aspect-video rounded-xl overflow-hidden relative`,
      image: `object-cover object-center`,
    },

    info: {
      container: `flex flex-col gap-10 laptop:gap-5`,
      heading: `heading-03 mb-2`,
    },
  };

  return (
    <section className={styles.section}>
      {/* map */}
      <figure className={styles.map.container}>
        <Image src={map} alt="Yaseen Aftab Foundation's Location" fill sizes="100vw" className={styles.map.image} />
      </figure>

      {/* contact info */}
      <div className={styles.info.container}>
        {/* heading */}
        <h2 className={styles.info.heading}>{t("info")}</h2>
        {/* email */}
        <ContactData icon={<MdOutlineEmail />} title={t("email")} data={email} secondaryData={secondaryEmail} />
        {/* phone */}
        <ContactData icon={<MdLocalPhone />} title={t("phone")} data={phone} secondaryData={secondaryPhone} />
        {/* location */}
        <ContactData icon={<MdLocationOn />} title={t("location")} data={location} />
      </div>
    </section>
  );
};

export default Contact;
