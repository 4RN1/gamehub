import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameHub",
  description: "Gaming community platform for gamers to connect, share, and discuss their favorite games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className="min-h-screen flex flex-col">



    <main>
  
      {children}
    </main>



</body>
    </html>
  );
}
