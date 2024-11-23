import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/_components/Navbar';
import SubMenu from './_components/SubMenu';

export const metadata: Metadata = {
  title: 'Alzaf Ecommerce',
  description:
    'This website is create by nextjs and this website is for only alzaf e-commerce.'
};

const inter = Inter({
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SubMenu />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
