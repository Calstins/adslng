import PageTitle from '@/components/common/PageTitle';
import ContactUsSection from '@/components/sections/ContactUsSection';
import LetMakeThingsHappenSection from '@/components/sections/LetMakeThingsHappenSection';

export default function Home() {
  return (
    <section>
      <div className="mx-4 2xl:mx-[300px] md:mx-[100px] pt-[70px] flex flex-col gap-[100px]">
        <PageTitle
          line1="Connect with Us to Elevate"
          line2="Your Business to New Heights"
          content="At ADSL, we’re here to help you succeed with tailored solutions in design, consulting, network management, and optimization. Contact us today to explore how we can drive your business forward together. Your success begins with a conversation—reach out now!"
        />
        <LetMakeThingsHappenSection />
        <ContactUsSection />
      </div>
    </section>
  );
}
