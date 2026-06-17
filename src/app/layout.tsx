import type { Metadata } from "next";
import { studio } from "@/config/studio";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${studio.name} — Studio de tatouage à ${studio.address.city}`,
    template: `%s · ${studio.name}`,
  },
  description: studio.description,
  openGraph: {
    title: `${studio.name} — ${studio.tagline}`,
    description: studio.description,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark antialiased cursor-none">
      <body
        className="cursor-none bg-background text-foreground font-sans"
        style={{ "--gold": studio.accentColor } as React.CSSProperties}
      >
        <SplashScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
