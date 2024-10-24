import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["bn", "en"],
  defaultLocale: "bn",
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
