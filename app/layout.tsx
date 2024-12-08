import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
  title: "LMS - Learn Without Limits",
  description: "Empowering educators and students through seamless online learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* Main Container */}
        <div id="main_container">
          {/* Navbar */}
          <nav className="sticky top-0 h-16 bg-white shadow-sm border-b border-gray-200 text-blue-900 flex items-center justify-between px-6 lg:px-10 z-50">
            <section id="logo" className="font-black text-2xl tracking-wide">
              <Link href="/">
                LMS
              </Link>
            </section>
            <section id="menu" className="flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
              <Link
                href="/pages/login"
                className="hover:text-blue-700 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href="/pages/signup"
                className="px-4 py-2 rounded text-white bg-blue-900 hover:bg-blue-800 transition-all duration-200 shadow-md"
              >
                Join Us
              </Link>
            </section>
          </nav>

          {/* Page Content */}
          <main className="px-6 lg:px-16 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
