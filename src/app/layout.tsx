// src/app/layout.tsx
import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import '../app/globals.css';


export const metadata: Metadata = {
  title: 'AI Climate Action Catalog',
  description: 'AI Climate Action Catalog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
