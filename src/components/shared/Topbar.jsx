import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Navigation from "./Navigation";
import Brandmark from "./Brandmark";
import Menu from "./Menu";

const Topbar = () => {
  const t = useTranslations("Header");

  // topbar styles
  const styles = {
    container: `grid place-items-center relative z-10`,

    logo: {
      container: `flex flex-col justify-center gap-2 p-2`,
      brandmark: `h-28`,
      wordmark: `text-xl font-semibold text-center text-white uppercase tracking-wide leading-none`,
    },

    navigation: {
      container: `h-16 flex mobile:hidden`,
      item: `h-full label capitalize px-3 py-0`,
    },

    menu: `hidden mobile:block h-16`,
  };

  return (
    <header className={styles.container}>
      {/* logo */}
      <Link href="/" className={styles.logo.container}>
        {/* brandmark */}
        <Brandmark styles={styles.logo.brandmark} />
        {/* wordmark */}
        <span className={styles.logo.wordmark}>{t("name")}</span>
      </Link>

      {/* navigation list */}
      <Navigation color="white" listStyles={styles.navigation.container} itemStyles={styles.navigation.item} />

      {/* navigation menu */}
      <Menu color="white" menuStyles={styles.menu} />
    </header>
  );
};

export default Topbar;
