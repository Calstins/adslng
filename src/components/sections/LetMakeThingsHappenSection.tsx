import React from 'react';
import MainButton from '../common/MainButton';

function LetMakeThingsHappenSection() {
  return (
    <section className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-h3Mobile md:text-h3 font-medium">
          Let&apos;s make things happen
        </p>

        <p className="my-[26px]">
          Contact us today to discover how our comprehensive technology services
          can enhance your business operations and drive success.
        </p>

        <MainButton
          text="Get your free proposal"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="absolute -top-6 right-6 hidden md:block w-[30vw]">
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
