import React from 'react';
import MainButton from '../common/MainButton';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div className="md:w-[50%]">
        <p className="text-h1Mobile md:text-h2 text-black font-bold leading-tight">
          Welcome to Our <br /> Technology Solutions Hub
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/microphone_illustration.png"
            alt="microphone illustration"
          />
        </div>

        <p className="text-p text-black my-[35px]">
          At our company, we specialize in providing top-tier information
          systems design, consulting, advisory services, and system integration.
          Our expert team ensures your business leverages the best technology
          solutions tailored to your unique needs.
        </p>

        <MainButton
          text="Book a consultation"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="hidden md:block">
        <img
          src="/images/microphone_illustration.png"
          alt="microphone illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;
