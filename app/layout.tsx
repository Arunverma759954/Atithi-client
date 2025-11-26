// app/layout.tsx

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "Atithi Center",
  description: "Modern Hotel / Guest House Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* HEADER FIXED */}
        <Header />

        {/* PAGE CONTENT (avoid header overlap) */}
        <main className="pt-16">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
