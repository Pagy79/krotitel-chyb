import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { APP_NAME, APP_ORIGIN } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_ORIGIN),
  title: APP_NAME,
  applicationName: APP_NAME,
  description: "Příprava na SŠ z matematiky — krocení chyb bez trestu.",
  appleWebApp: {
    capable: true,
    title: APP_NAME,
  },
  icons: {
    icon: "/compass-icon.svg",
    apple: "/compass-icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
