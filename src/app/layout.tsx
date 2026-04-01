import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}