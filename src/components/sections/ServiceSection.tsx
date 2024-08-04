import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import Paragraph from '../common/Paragraph';

export default function ServiceSection() {
  const services = [
    {
      titleTop: 'Vendor Application Design and Implementation',
      titleBottom:
        'From initial audits to full deployment and support, we manage CRM and ERP systems to suit your business needs.',
      bg: 'bg-accent',
      titleBg: 'bg-primary',
      image: '/images/design.svg',
      darkArrow: true,
      link: '/',
    },

    {
      titleTop: 'Vendor or Bespoke Solutions',
      titleBottom:
        'We design, implement, and maintain solutions with clear project timelines and management.',
      bg: 'bg-primary',
      titleBg: 'bg-white',
      image: '/images/timeline.svg',
      darkArrow: true,
      link: '/',
    },

    {
      titleTop: 'Network Optimization',
      titleBottom:
        'We control and optimize network components to enhance the functionality and efficiency of your communication systems',
      bg: 'bg-secondary',
      titleBg: 'bg-white',
      image: '/images/s_6.png',
      darkArrow: false,
      link: '/',
    },

    {
      titleTop: 'Data Networks',
      titleBottom:
        'Design and implementation of local and heterogeneous data networks using IP, Frame Relay, and SDH technologies.',
      bg: 'bg-accent',
      titleBg: 'bg-primary',
      image: '/images/computer.svg',
      darkArrow: true,
      link: '/',
    },

    {
      titleTop: 'Voice and Data Integration',
      titleBottom:
        ' Combine voice and data transmission into a single, high-throughput network.',
      bg: 'bg-primary',
      titleBg: 'bg-white',
      image: '/images/voice.svg',
      darkArrow: true,
      link: '/',
    },

    {
      titleTop: 'IP Telephony and Contact Centers',
      titleBottom:
        'Integrate voice and data services through a single IP-based infrastructure, including IP Contact Centers and IP Call Centers.',
      bg: 'bg-secondary',
      titleBg: 'bg-white',
      image: '/images/contact.svg',
      darkArrow: false,
      link: '/',
    },

    {
      titleTop: 'Cabling Systems',
      titleBottom:
        'From initial design to realization and formal hand-over, we ensure your cabling systems are top-notch.',
      bg: 'bg-accent',
      titleBg: 'bg-primary',
      image: '/images/cable.svg',
      darkArrow: true,
      link: '/',
    },

    {
      titleTop: 'Server and PC Delivery',
      titleBottom:
        'Installation and integration of network operating systems and applications for optimal performance.',
      bg: 'bg-primary',
      titleBg: 'bg-white',
      image: '/images/network.svg',
      darkArrow: true,
      link: '/',
    },

    {
      titleTop: 'Security Systems',
      titleBottom:
        ' A diverse array of professionally selected solutions, including network security, anti-fraud systems, extrusion prevention systems, and managed security services.',
      bg: 'bg-secondary',
      titleBg: 'bg-white',
      image: '/images/security.svg',
      darkArrow: false,
      link: '/',
    },

    {
      titleTop: 'Design Services',
      titleBottom:
        "Network topology, server room, and data center design to meet your business's growing needs.",
      bg: 'bg-accent',
      titleBg: 'bg-primary',
      image: '/images/design_2.svg',
      darkArrow: true,
      link: '/',
    },
  ];

  const content =
    'Our company provides comprehensive technology solutions, including information systems design, consulting, network optimization, telecommunication integration, and robust security services, tailored to enhance your business efficiency and productivity.';

  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Services
        </div>
        <Paragraph className="text-p" value={content} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[80px]">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}
