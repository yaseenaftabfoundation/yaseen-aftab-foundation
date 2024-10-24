import { unstable_setRequestLocale } from "next-intl/server";
import { getContact } from "@/services";
import PageHeading from "@/components/shared/PageHeading";
import Contact from "@/components/shared/Contact";
import ContactBg from "@/assets/contact-bg.jpg";

const ContactPage = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const contact = await getContact(locale);

  return (
    <main className="-mt-[220px]">
      {/* heading */}
      <PageHeading page="ContactPage" bg={ContactBg} />
      {/* contact */}
      <Contact
        map={contact.map.url}
        location={contact.localizations[0].location}
        email={contact.email}
        secondaryEmail={contact.secondaryEmail}
        phone={contact.phone}
        secondaryPhone={contact.secondaryPhone}
      />
    </main>
  );
};

export default ContactPage;
