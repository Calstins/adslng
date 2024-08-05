'use client';
import React from 'react';
import MainButton from '../common/MainButton';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full 2xl:justify-around 2xl:items-center">
      <div className="md:w-[50%]">
        <p className="text-h1Mobile 2xl:text-4xl md:text-h2 text-black font-bold leading-tight">
          Welcome to Our <br /> Technology Solutions Hub
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/home_illustration.svg"
            alt="hero illustration"
            className="float"
          />
        </div>

        <p className="text-p text-black my-[35px] 2xl:text-2xl">
          We provide expert information systems design, consulting, advisory
          services, and system integration to ensure your business uses the best
          technology solutions tailored to your needs.
        </p>

        <MainButton
          text="Book a consultation"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
          action={() => {
            const quoteSection = document.getElementById('quote');
            if (quoteSection) {
              quoteSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
      <div className="hidden md:block">
        <img
          src="/images/home_illustration.svg"
          alt="hero illustration"
          className="float -mt-8"
        />
      </div>
    </section>
  );
}

export default HeroSection;
