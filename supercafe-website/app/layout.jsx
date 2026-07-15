import "./globals.css";

export const metadata = {
  title: "supercafé – Kaffee, Kuchen & gute Momente | Gießen",
  description:
    "Ein veganes Café in Gießen mit hausgemachten Spezialitäten, besonderem Kaffee und einer Atmosphäre zum Verweilen. Ludwigstraße 64, 35392 Gießen.",
  openGraph: {
    title: "supercafé – Gießen",
    description:
      "Ein veganes Café in Gießen mit hausgemachten Spezialitäten, besonderem Kaffee und einer Atmosphäre zum Verweilen.",
    url: "https://supercafe-giessen.de",
    siteName: "supercafé",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
