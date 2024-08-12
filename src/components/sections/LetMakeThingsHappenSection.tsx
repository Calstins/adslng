'use client';
import React from 'react';
import MainButton from '../common/MainButton';

function LetMakeThingsHappenSection() {
  return (
    <section className="bg-accent rounded-[45px] p-4 sm:p-[50px] md:p-[60px] relative w-full 2xl:p-[100px]">
      <div className="md:pr-[22rem] 2xl:w-[60%] ">
        <p className="text-h3Mobile md:text-h3 font-medium 2xl:text-5xl">
          Let&apos;s make things happen
        </p>

        <p className="my-[26px] 2xl:text-2xl">
          Contact us today to discover how our comprehensive technology services
          can enhance your business operations and drive success.
        </p>

        <MainButton
          text="Get your free proposal"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
          action={() => {
            const quoteSection = document.getElementById('quote');
            if (quoteSection) {
              quoteSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
      <div className="absolute -top-6 md:-top-4 2xl:-top-3 right-6 2xl:right-14 hidden md:block w-[30vw] 2xl:w-[20vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw]">
        <img
          src="/images/proposal_illustration.svg"
          alt="proposal illustration"
          className="float"
        />
      </div>
    </section>
  );
}

export default LetMakeThingsHappenSection;
