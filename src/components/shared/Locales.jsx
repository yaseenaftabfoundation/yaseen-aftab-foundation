"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";

const Locales = ({ color, switchStyles }) => {
  const [openLocaleMenu, setOpenLocaleMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Header");

  // switch locale
  const switchLocale = (lang) => router.replace(pathname, { locale: lang });

  // locales styles
  const styles = {
    button: twMerge(`flex items-center justify-center gap-2`, switchStyles),
    indicator: `transition-transform duration-300 ${openLocaleMenu && "rotate-180"}`,
    option: `text-base font-medium`,
  };

  return (
    <Menu open={openLocaleMenu} handler={setOpenLocaleMenu} allowHover>
      {/* menu trigger */}
      <MenuHandler>
        <Button size="lg" variant="text" color={color} className={styles.button}>
          {/* label */}
          {t("locale")}
          {/* indicator */}
          <MdKeyboardArrowDown className={styles.indicator} />
        </Button>
      </MenuHandler>

      {/* menu list */}
      <MenuList>
        <MenuItem onClick={() => switchLocale("bn")} className={styles.option}>
          বাংলা
        </MenuItem>
        <MenuItem onClick={() => switchLocale("en")} className={styles.option}>
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Locales;
