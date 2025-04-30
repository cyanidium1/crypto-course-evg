import { Manrope, Raleway } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Cyanidium Dev. Template",
  description: "NextJS NextUI template",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sansation = localFont({
  src: [
    {
      path: "../../../public/fonts/Sansation_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${raleway.className} ${sansation.className} ${manrope.className}`}
    >
      <body className="bg-background text-textColorWhite">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
