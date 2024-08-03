import React from 'react';
import TeamCard from '../cards/TeamCard';
import MainButton from '../common/MainButton';

function TeamSection() {
  const teams = [
    {
      name: 'John Smith',
      position: 'CEO and Founder',
      experience:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      image: '/images/t_1.png',
    },
    {
      name: 'Jane Doe',
      position: 'Director of Operations',
      experience:
        '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      image: '/images/t_2.png',
    },
    {
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      experience:
        '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      image: '/images/t_3.png',
    },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Team
        </div>
        <p className="text-p">
          Meet the skilled and experienced team behind our successful technology
          solutions and innovative business strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[80px]">
        {teams.map((team, index) => (
          <TeamCard {...team} key={index} />
        ))}
      </div>

      <div className="mt-[40px] flex justify-end">
        <MainButton
          text="See all team"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
    </section>
  );
}

export default TeamSection;
