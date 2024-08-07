import ContactUsSection from '@/components/sections/ContactUsSection';
import HeroSection from '@/components/sections/HeroSection';
import LetMakeThingsHappenSection from '@/components/sections/LetMakeThingsHappenSection';
import OurWorkingProcessSection from '@/components/sections/OurWorkingProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';
import React from 'react';

const Services = () => {
  return (
    <section>
      <div className="mx-4 2xl:mx-[300px] md:mx-[100px] pt-[70px] flex flex-col gap-[100px]">
        <HeroSection />
        {/* <LogoGroupSection /> */}
        <ServiceSection />
        <LetMakeThingsHappenSection />
        {/* <CaseStudySection /> */}
        <OurWorkingProcessSection />
        {/* <TeamSection /> */}
        <ContactUsSection />
      </div>
    </section>
  );
};

export default Services;
