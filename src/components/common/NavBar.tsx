'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import MainButton from './MainButton';
import Link from 'next/link';

interface LinkProps {
  href?: string;
}

const NavBar: React.FC<LinkProps> = ({ href }) => {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20  w-full">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white py-4">
        <div className="flex justify-between items-center">
          <div>
            {/* <img src="/images/logo.png" alt="logo" /> */}
            <Link href="/">
              <p className="text-5xl font-extrabold">
                ADSL<span className="text-primary">.</span>
              </p>
            </Link>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map((link, index) => (
              <a
                key={index}
                className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
                href={link.link}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-[40px] select-none">
              <MainButton
                text="Request a quote"
                action={() => {
                  const quoteSection = document.getElementById('quote');
                  if (quoteSection) {
                    quoteSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 right-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
          menu ? 'bg-primary py-2' : ''
        }`}
      >
        <div className="flex justify-between mx-4">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            {/* <img src="/images/logo.png" alt="logo" className="w-[7rem]" /> */}
            <Link href="/">
              <p className="text-5xl font-extrabold">
                ADSL<span className="text-primary">.</span>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.png"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
                  href={link.link}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-[40px] select-none">
                <MainButton text="Request a quote" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
