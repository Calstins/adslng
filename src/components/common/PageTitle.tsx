'use client';

import React from 'react';
import Paragraph from './Paragraph';
import MainButton from './MainButton';

interface PageTitleProps {
  line1: string;
  line2: string;
  content: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ line1, line2, content }) => {
  return (
    <div className="flex flex-col justify-between w-full 2xl:justify-around items-center text-center gap-5">
      <p className="text-h1Mobile 2xl:text-4xl md:text-h2 text-black font-bold leading-tight">
        {line1} <br /> {line2}
      </p>
      <p className="text-p 2xl:text-2xl 2xl:mt-5 text-center leading-6">
        {content}
      </p>
      <MainButton
        text="Book a consultation"
        classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black item-center"
        action={() => {
          const quoteSection = document.getElementById('quote');
          if (quoteSection) {
            quoteSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
};

export default PageTitle;
