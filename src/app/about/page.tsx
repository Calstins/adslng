import PageTitle from '@/components/common/PageTitle';
import ContactUsSection from '@/components/sections/ContactUsSection';
import OurWorkingProcessSection from '@/components/sections/OurWorkingProcessSection';

export default function About() {
  return (
    <section>
      <div className="pt-[70px] flex flex-col gap-[100px] my-7">
        <PageTitle
          line1="We Guide Your Business Through"
          line2="the Digital Landscape to Achieve Success"
          content="At ADSL, we empower businesses to thrive by offering expert design and consulting services, including vendor application implementation, data network management, bespoke solutions, and network optimization"
        />
        <OurWorkingProcessSection />
        <ContactUsSection />
      </div>
    </section>
  );
}
