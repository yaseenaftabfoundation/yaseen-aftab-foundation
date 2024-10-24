import { useTranslations } from "next-intl";
import { Button } from "@/app/material";
import { Link } from "@/i18n/routing";
import Locales from "./Locales";

const Navigation = ({ listStyles, itemStyles, color }) => {
  const t = useTranslations("Header");

  // navigation list
  const navs = [
    { href: `/`, title: t("home") },
    { href: `/gallery`, title: t("gallery") },
    { href: `/programs`, title: t("programs") },
    { href: `/about`, title: t("about") },
    { href: `/contact`, title: t("contact") },
  ];

  return (
    <div className={listStyles}>
      {navs.map((nav, index) => (
        <Link key={index} href={nav.href}>
          <Button size="lg" variant="text" color={color} className={itemStyles}>
            {nav.title}
          </Button>
        </Link>
      ))}

      {/* locale switcher */}
      <Locales color={color} switchStyles={itemStyles} />
    </div>
  );
};

export default Navigation;
