import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import Paragraph from '../common/Paragraph';
import { services } from '../../serviceData.js';

export default function ServiceSection() {
  const content =
    'Our company provides comprehensive technology solutions, including information systems design, consulting, network optimization, telecommunication integration, and robust security services, tailored to enhance your business efficiency and productivity.';

  return (
    <section className="" id="services">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[20px] lg:gap-[40px] 2xl:gap-[120px] items-center ">
        <div className="px-4 py-3 bg-primary inline-block font-medium text-h2 rounded-md">
          Services
        </div>
        <Paragraph className="text-p 2xl:text-2xl 2xl:mt-5" value={content} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] gap-[40px] mt-[80px] 2xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}
