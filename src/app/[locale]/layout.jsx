import "../globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Noto_Sans, Noto_Sans_Bengali } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import Providers from "../providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// get locales
export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

// font configs
const notoBn = Noto_Sans_Bengali({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  fallback: ["sans-serif"],
});

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  fallback: ["sans-serif"],
});

// meta data
export const metadata = {
  title: "Yaseen Aftab Foundation",
  description: "A non-profit foundation based in Bangladesh",
};

// root layout
const Layout = async ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={locale === "en" ? noto.variable : notoBn.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {/* header */}
            <Header locale={locale} />
            {/* main */}
            {children}
            {/* footer */}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
