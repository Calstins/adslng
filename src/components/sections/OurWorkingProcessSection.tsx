'use client';

import React, { useState } from 'react';
import WorkingProcessCard from '../cards/WorkingProcessCard';
import { Accordion } from '../ui/accordion';
import Paragraph from '../common/Paragraph';

function OurWorkingProcessSection() {
  const processes = [
    {
      label: '01',
      title: 'Consultation',
      description:
        'We begin with an in-depth consultation to understand your business needs and objectives.',
    },
    {
      label: '02',
      title: 'Assessment and Planning',
      description:
        'Our team conducts a thorough assessment of your current systems and develops a strategic plan tailored to your goals.',
    },
    {
      label: '03',
      title: 'Design and Implementation',
      description:
        'We design and implement customized solutions, ensuring seamless integration and minimal disruption to your ',
    },
    {
      label: '04',
      title: 'Testing and Optimization',
      description:
        'We rigorously test and optimize the implemented solutions to ensure peak performance and efficiency.',
    },
    {
      label: '05',
      title: 'Training and Support',
      description:
        'Our team provides comprehensive training and ongoing support to ensure your team is fully equipped to leverage the new systems.',
    },
    {
      label: '06',
      title: 'Continual Improvement',
      description:
        'We continually monitor and improve our solutions to adapt to your evolving business needs and technological advancements.',
    },
  ];

  const content = 'Step-by-Step Guide to Achieving Your Business Goals';

  const [value, setValue] = useState('');

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] 2xl:gap-[120px] items-center ">
        <div className="px-4 py-3 bg-primary inline-block font-medium text-h2 rounded-md 2xl:text-5xl">
          Our Working Process
        </div>
        <Paragraph className="text-p 2xl:text-2xl 2xl:mt-5" value={content} />
      </div>

      <div className="mt-[80px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processes.map((process, index) => (
            <WorkingProcessCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default OurWorkingProcessSection;
