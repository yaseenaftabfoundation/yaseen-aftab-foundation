"use client";

import { Link } from "@/i18n/routing";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
import { Navbar as NextNav } from "@material-tailwind/react";
import useScrollPosition from "@/hooks/useScrollPosition";
import Navigation from "./Navigation";
import Brandmark from "./Brandmark";
import Menu from "./Menu";

const Navbar = () => {
  const t = useTranslations("Header");
  const scrollY = useScrollPosition();

  // navbar styles
  const styles = {
    container: twMerge(
      `
        max-w-full w-full h-16 flex items-center justify-center mobile:justify-between shadow-none rounded-none
        fixed top-0 left-0 z-20 p-2 mobile:pl-4 transition-transform duration-300 ease-out
      `,
      scrollY < 220 ? "-translate-y-full" : "translate-y-0"
    ),

    logo: {
      container: `hidden mobile:flex items-center gap-1`,
      brandmark: `h-8 -mt-2`,
      wordmark: `text-sm font-bold text-black uppercase leading-none`,
    },

    navigation: {
      container: `h-full flex mobile:hidden`,
      item: `h-full label capitalize px-3 py-0`,
    },

    menu: `hidden mobile:block`,
  };

  return (
    <NextNav className={styles.container}>
      {/* logo */}
      <Link href="/" className={styles.logo.container}>
        {/* brandmark */}
        <Brandmark styles={styles.logo.brandmark} />
        {/* wordmark */}
        <span className={styles.logo.wordmark}>{t("name")}</span>
      </Link>

      {/* navigation list */}
      <Navigation color="black" listStyles={styles.navigation.container} itemStyles={styles.navigation.item} />

      {/* navigation menu */}
      <Menu color="black" menuStyles={styles.menu} />
    </NextNav>
  );
};

export default Navbar;
