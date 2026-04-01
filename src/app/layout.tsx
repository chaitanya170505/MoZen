import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "MOZEN",
  description: "AI Email Agent",
  icons: {
    icon: "icon.png",
  },
  openGraph: {
    title: "Mozen",
    description: "Awesome app",
    images: ["/og-image.png"],
  },
  verification: {
    google: "ZPz2KXRN42HD82H4ef6hG1rntGRbRz9zRgzqRMeyt4g",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-JBHJ48EPGZ" />
    </html>
  );
}