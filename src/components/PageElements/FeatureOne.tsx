import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  HiEye,
  HiClock,
  HiCurrencyDollar,
  HiCheckCircle,
} from 'react-icons/hi';

const features = [
  {
    name: 'Improve Operational Awareness',
    description:
      'Know driver status and location, and receive real-time conditions reports.',
    icon: HiEye,
  },
  {
    name: 'Increase Productivity',
    description: 'Task drivers with assignment queues to minimize downtime.',
    icon: HiClock,
  },
  {
    name: 'Reduce Costs',
    description: 'Identify opportunities for route optimization.',
    icon: HiCurrencyDollar,
  },
  {
    name: 'Enhance Safety  ',
    description: 'Communicate accidents and obstacles to dispatch. ',
    icon: HiCheckCircle,
  },
];
export const FeatureOne = () => {
  return (
    <div className="py-24 bg-white">
      <div className="feature__container">
        <Fade bottom distance="100px">
          <div className="lg:text-center">
            <h2 className="feature__caption__text">
              Enhance your winter operations
            </h2>

            <p className="feature__header__text">A better way to operate</p>

            <p className="feature__subheader__text">
              PlowOps helps state and local municipalities drastically improve
              the safety and efficiency of their winter operations.
            </p>
          </div>
        </Fade>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <Fade bottom distance="100px" key={feature.name}>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-b from-theme-100 to-theme-300  text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16  feature__body__header__text">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="ml-16  feature__body__text">
                    {feature.description}
                  </dd>
                </div>
              </Fade>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
