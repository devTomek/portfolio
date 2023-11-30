import '@/app/normalize.css';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container/Container';

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
      <body className={poppins.className}>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
