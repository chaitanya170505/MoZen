import "./globals.css";

export const metadata = {
  title: "MOZEN",
  description: "AI Email Agent",
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