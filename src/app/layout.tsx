import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import CursorManager from '../context/CursorManager';
import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/sections/FooterSection';

export const metadata: Metadata = {
  title: 'Augusta Digital Services Limited',
  description: 'You goto place for anything digital',
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <NavBar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
};

export default RootLayout;
