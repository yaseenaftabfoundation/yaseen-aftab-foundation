import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Brandmark from "./Brandmark";
import Navigation from "./Navigation";

const Footer = () => {
  const footerData = useTranslations("Footer");
  const headerData = useTranslations("Header");

  //  footer styles
  const styles = {
    footer: `w-full max-w-[1400px] laptop:max-w-[1000px] tablet:max-w-[700px] mx-auto px-5 py-8`,
    content: `w-full flex items-center justify-between mobile:flex-col gap-5`,

    logo: {
      container: `flex mobile:flex-col items-center gap-2`,
      brandmark: `h-12 mobile:h-24 -mt-4 mobile:m-0`,
      wordmark: `text-xl mobile:text-lg font-bold text-black/75 uppercase leading-none text-nowrap`,
    },

    navigation: {
      container: `flex flex-wrap items-center justify-end mobile:justify-center`,
      item: `h-full label capitalize p-2`,
    },

    divider: `my-8 border-black/25`,
    copyright: {
      container: `text-base mobile:text-sm font-normal leading-none text-black/50 flex mobile:flex-col items-center justify-between`,
      credit: `inline-block text-black/75 hover:text-black transition-colors duration-300 py-2`,
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* logo */}
        <Link href="/" className={styles.logo.container}>
          {/* brandmark */}
          <Brandmark styles={styles.logo.brandmark} />
          {/* wordmark */}
          <span className={styles.logo.wordmark}>{headerData("name")}</span>
        </Link>

        {/* navigation */}
        <Navigation color="black" listStyles={styles.navigation.container} itemStyles={styles.navigation.item} />
      </div>

      {/* divider */}
      <hr className={styles.divider} />

      {/* copyright */}
      <div className={styles.copyright.container}>
        {/* rights */}
        <span>
          &copy; {footerData("year")} {footerData("copyright")}
        </span>

        {/* credit */}
        <span>
          {footerData("credit")}{" "}
          <a
            href="https://www.ashrafasif.com"
            aria-label={footerData("author")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.copyright.credit}
          >
            {footerData("author")}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
