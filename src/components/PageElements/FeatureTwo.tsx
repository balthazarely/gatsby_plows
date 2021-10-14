import React from 'react';
import Fade from 'react-reveal/Fade';
import Plow from '../../../static/plow1.jpg';

const list = [
  'Operations dashboard',
  'Driver and vehicle location tracking',
  'Route assignments and statuses',
  'Driver feedback and field observations',
  'Hardware and sensor integrations',
  'Plow status',
  'Spread rates',
  'Dash cameras',
  'Road temperature and weather sensors',
];

export const FeatureTwo = () => {
  return (
    <div className="py-24 bg-gray-50">
      <Fade bottom distance="100px">
        <div className="feature__container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 order-2 lg:order-1 ">
              <p className="feature__header__text">
                What is <span className=" text-theme-300">PlowOps?</span>
              </p>

              <p className="feature__subheader__text">
                PlowOps is a customized tracking solution platform tailored to
                any organization’s plowing needs. Out of the box, PlowOps
                provides everything needed to digitize winter operations and
                modernize snowplow functions. Its core set of features includes:
              </p>

              <ul className="feature__body__list">
                {list.map((item: string) => (
                  <li key={item} className="feature__body__list__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="lg:h-full overflow-hidden h-96 min-w-full ">
                <iframe
                  src="https://www.youtube.com/embed/PHrHvfg93qo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="h-full min-w-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
