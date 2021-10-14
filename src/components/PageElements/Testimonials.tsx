import React from 'react';
import Fade from 'react-reveal/Fade';
import rrc from '../../../static/testimonial-logos/rrc_associates.jpeg';
import america_battlefield from '../../../static/testimonial-logos/american_battlefield.jpeg';
import ford from '../../../static/testimonial-logos/ford_logo.png';
import { TestimonialCard } from '../Elements/Cards/TestimonialCard';

const testimonailSection = [
  {
    name: 'Jake',
    company: 'RRC Associates',
    logo: rrc,
    shortStatement:
      'We are very fortunate to have found NeoTreks and their dedicated and experienced developers. They are very reliable, responsive and have an eye for the details that really make a difference.',
    statement:
      'We are very fortunate to have found NeoTreks and their dedicated and experienced developers. They are very reliable, responsive and have an eye for the details that really make a difference. What makes them special is their personal touch and excellent follow-through. They are a great group to work with, always guiding us through the right steps of how to get to a successful result. I highly recommend NeoTreks — they deliver results in a way that no other mobile software developer can.',
  },
  // {
  //   name: 'Jeff',
  //   company: 'BaseMap Inc',
  //   shortStatement:
  //     'NeoTreks has been a big part of our success and we are very appreciative of their contributions. Very talented team!',

  //   statement:
  //     'NeoTreks has been a big part of our success and we are very appreciative of their contributions. Very talented team!',
  // },
  {
    name: 'Larry',
    company: 'American Battlefield Trust',
    logo: america_battlefield,
    shortStatement:
      'Over the past 8 years we’ve been working with NeoTreks, we’ve produced some great Civil War Battlefield apps that have been promoted by Apple several times.The singular characteristic that sets NeoTreks apart from other software development firms is their responsiveness.',
    statement:
      'Over the past 8 years we’ve been working with NeoTreks, we’ve produced some great Civil War Battlefield apps that have been promoted by Apple several times.The singular characteristic that sets NeoTreks apart from other software development firms is their responsiveness. They listen and ask good questions to gain the understanding needed to deliver quality work for a great value. I’d highly recommend NeoTreks to provide results you can count on.',
  },
  // {
  //   name: 'Quentin',
  //   company: 'Global Category Management',
  //   shortStatement:
  //     'We have been partnering with NeoTreks for many years and find them to be honest, dedicated, friendly, and highly skilled. The NeoTreks team has always been there to handle every request promptly – offering suggestions on how to achieve the desired goals.',
  //   statement:
  //     'We have been partnering with NeoTreks for many years and find them to be honest, dedicated, friendly, and highly skilled. The NeoTreks team has always been there to handle every request promptly – offering suggestions on how to achieve the desired goals. ',
  // },
  {
    name: 'Mark Grueber',
    company: ' Bronco consumer marketing manager',
    logo: ford,
    shortStatement:
      'The trail mapping system available on Bronco is truly a game-changer in the off-road community.',
    statement:
      'The trail mapping system available on Bronco is truly a game-changer in the off-road community.',
  },
];
export const Testimonials = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="feature__container">
        <Fade bottom distance="100px">
          <div className="lg:text-center">
            <h2 className="feature__caption__text">Testimonials</h2>

            <p className="feature__header__text">
              What our clients are saying.
            </p>
          </div>
        </Fade>
        <div className="mt-10">
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 mt-6  ">
            {testimonailSection.map((feature) => (
              <TestimonialCard
                key={feature.name}
                name={feature.name}
                company={feature.company}
                shortStatement={feature.shortStatement}
                logo={feature.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
