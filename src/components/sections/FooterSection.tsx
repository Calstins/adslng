import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import MainButton from '../common/MainButton';

function FooterSection() {
  const currentYear = new Date().getFullYear();
  const socials = [
    { icon: <FaLinkedin />, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaFacebook />, link: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, link: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section className="bg-secondary rounded-t-[45px] p-8 md:p-[60px]">
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <div>
          {/* <img src="/images/footer_logo.png" alt="footer logo" /> */}
          <p className="text-5xl font-extrabold text-white">ADSL</p>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-[40px]">
          {links?.map((link, index) => (
            <p key={index} className="text-white underline text-p">
              {link}
            </p>
          ))}
        </div> */}
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
          <Input placeholder="Email" className="h-[58px] rounded-[14px]" />
          <MainButton text="Subscribe to news " classes="bg-primary w-full" />
        </div>
      </div>
      <div className="my-[25px]">
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
        <p className="text-white text-p">
          © {currentYear} ADSL. All Rights Reserved.
        </p>
        <a href="/" className="text-white underline text-p block">
          Privacy Policy
        </a>
      </div>
    </section>
  );
}

export default FooterSection;
