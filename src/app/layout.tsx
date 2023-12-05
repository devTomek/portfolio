import '@/app/globals.css';
import '@/app/normalize.css';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Tom | FE Dev',
  description: 'Home page of Tomasz Chybziński porfolio',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body id="body" className={poppins.className}>
        <Navbar />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
