'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import MainButton from '../common/MainButton';
import Link from 'next/link';

interface Social {
  icon: React.ReactNode;
  link: string;
  label: string;
}

interface FooterLink {
  name: string;
  link: string;
}

function FooterSection() {
  const currentYear = new Date().getFullYear();
  const socials: Social[] = [
    { icon: <FaLinkedin />, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaFacebook />, link: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, link: 'https://twitter.com', label: 'Twitter' },
  ];

  const links: FooterLink[] = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ];

  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    fetch(
      'https://adslng.us13.list-manage.com/subscribe/post?u=7ab33fa86c7aae8ac89c01eac&id=7060dcc134&f_id=00828de2f0',
      {
        method: 'POST',
        body: new URLSearchParams({
          EMAIL: email,
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setEmail('');
        } else {
          setError(
            'There was a problem with the subscription. Please try again.'
          );
        }
      })
      .catch(() => {
        setError(
          'There was a problem with the subscription. Please try again.'
        );
      });
  };

  return (
    <section className="bg-secondary rounded-t-[45px] p-8 md:p-[60px] 2xl:mx-[300px] md:mx-[100px]">
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <div>
          <p className="text-5xl font-extrabold text-white">ADSL</p>
        </div>
        <div className="flex flex-col md:flex-row gap-[40px]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-white underline text-p"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-[20px]">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              aria-label={social.label}
              className="text-white text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-[66px] flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <div className="px-2 bg-primary inline-block font-medium text-[20px] rounded-md">
            Contact Us:
          </div>
          <a
            href="mailto:origin@adslng.com"
            className="text-white mt-[27px] block"
          >
            Email: origin@adslng.com
          </a>
          <a href="tel:+2347034161819" className="text-white mt-[27px] block">
            Phone: 07034161819
          </a>
          <p className="text-white mt-[27px]">
            Address: 22 Olanubi Osinowo street Medina Estate Gbagada Lagos
          </p>
        </div>
        <div className="bg-[#292A32] flex flex-col md:flex-row gap-4 justify-center items-center md:gap-[20px] py-16 px-[40px] rounded-[14px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center items-center w-full"
          >
            <Input
              type="email"
              name="EMAIL"
              placeholder="Email"
              className="h-[58px] w-full md:w-auto px-4 rounded-[14px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MainButton
              text="Subscribe to news"
              classes="bg-primary text-black h-[58px] px-8 rounded-[14px] w-full md:w-auto"
            />
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 mt-2">Thank you for subscribing!</p>
          )}
        </div>
      </div>
      <div className="my-[25px]">
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
        <p className="text-white text-p">
          © {currentYear} ADSL<span className="text-primary mr-1">.</span> All
          Rights Reserved.
        </p>
        <Link href="/privacy" className="text-white underline text-p block">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
}

export default FooterSection;
