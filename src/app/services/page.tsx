import PageTitle from '@/components/common/PageTitle';
import ContactUsSection from '@/components/sections/ContactUsSection';
import LetMakeThingsHappenSection from '@/components/sections/LetMakeThingsHappenSection';
import OurWorkingProcessSection from '@/components/sections/OurWorkingProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';
import React from 'react';

const Services = () => {
  return (
    <section>
      <div className="mx-4 2xl:mx-[300px] md:mx-[100px] pt-[70px] flex flex-col gap-[100px]">
        <PageTitle
          line1="Empowering Your Business"
          line2="with Tailored Solutions"
          content="ADSL provides expert services to enhance your business, including customized CRM and ERP solutions, comprehensive data network management, and bespoke applications. We also optimize network performance to ensure efficiency and functionality. Explore how our tailored solutions can drive your success.!"
        />
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
