'use client';

import React, { useState } from 'react';
import { Accordion } from '@/components/ui/accordion';
import PrivacyPolicyCard from '@/components/cards/PrivacyPolicyCard';
import PageTitle from '@/components/common/PageTitle';

function Privacy() {
  const processes = [
    {
      label: '01',
      title: 'Introduction',
      description:
        'Welcome to adslng.com (“we,” “our,” “us”). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website adslng.com (the “Site”).',
    },
    {
      label: '02',
      title: 'Information We Collect',
      description:
        '<ul><li><strong> Personal Information:</strong>When you use our Site, we may collect personal information such as your name, email address, and contact details if you provide them voluntarily (e.g., when signing up for a newsletter).</li><li><strong>Usage Data:</strong> We may collect information about how you interact with our Site, such as IP address, browser type, pages visited, and the time spent on our Site.</li></ul>',
    },
    {
      label: '03',
      title: 'How We Use Your Information',
      description:
        'We use the information we collect to:<br/><ul><li>Improve and personalize your experience on our Site.</li><li>Respond to your inquiries and provide customer support.</li><li>Send you updates, promotional materials, or other information that may be of interest to you (you can opt out at any time).</li><li>Analyze usage trends and enhance the functionality of our Site.</li></ul>',
    },
    {
      label: '04',
      title: 'Sharing Your Information',
      description:
        'We do not sell, trade, or otherwise transfer your personal information to outside parties except as follows:<br/><ul><li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Site and providing services.</li><li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li></ul>',
    },
    {
      label: '05',
      title: 'Cookies',
      description:
        'Our Site may use cookies and similar technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.',
    },
    {
      label: '06',
      title: 'Data Security',
      description:
        'We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.',
    },
    {
      label: '07',
      title: 'Your Rights',
      description:
        'You have the right to access, correct, or delete your personal information. To exercise these rights or if you have any questions about our privacy practices, please contact us at <a class="underline" href="mailto:origin@adslng.com">origin@adslng.com</a>',
    },
    {
      label: '08',
      title: 'Contact Us',
      description:
        'If you have any questions or concerns about this Privacy Policy, please contact us via email at: <a href="mailto:origin@adslng.com" class="underline">origin@adslng.com</a>',
    },
  ];
  const currentYear = new Date().getFullYear().toString();
  const line1 = 'Privacy';
  const line2 = `Policy`;
  const content = `Effective Date 07:08:${currentYear}`;
  const [value, setValue] = useState('');

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };
  return (
    <section className="mx-4 2xl:mx-[300px] md:mx-[100px] pt-[70px] flex flex-col gap-[100px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] 2xl:gap-[120px] items-center "></div>
      <PageTitle line1={line1} line2={line2} content={content} />
      <div className="my-[40px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processes.map((process, index) => (
            <PrivacyPolicyCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Privacy;
