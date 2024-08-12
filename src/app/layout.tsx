import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/sections/FooterSection';
import ReCaptchaProvider from '@/components/common/ReCaptchaProvider';
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
        <div className="mx-4 lg:mx-8 xl:mx-[100px] 2xl:mx-[250px]">
          <ReCaptchaProvider>
            <NavBar />
            {children}
            <FooterSection />
          </ReCaptchaProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
