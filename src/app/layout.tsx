import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/sections/FooterSection';
import ReCaptchaProvider from '@/components/common/ReCaptchaProvider';

export const metadata: Metadata = {
  title: 'Augusta Digital Services Limited',
  description: 'Your goto place for anything digital',
  icons: {
    icon: [
      '/favicon.svg',
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
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
