import ContactUsSection from '@/components/sections/ContactUsSection';
import HeroSection from '@/components/sections/HeroSection';
import LetMakeThingsHappenSection from '@/components/sections/LetMakeThingsHappenSection';
import OurWorkingProcessSection from '@/components/sections/OurWorkingProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';

export default function Home() {
  return (
    <section>
      <div className="pt-[70px] flex justify-center items-center flex-col gap-[100px] md:w-full w-full">
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
}
