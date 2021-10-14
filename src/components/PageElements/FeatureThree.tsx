import React from 'react';
import Fade from 'react-reveal/Fade';
import Plow from '../../../static/plow1.jpg';

const list = [
  'Safer and better informed public',
  'Portal accessible by the public',
  'Enhanced situational awareness for operators',
  'Real-time vehicle location tracking',
  'Improved fleet-wide communication',
  'Simplified route assignments',
  'Increased driver accountability',
  'Organization-wide accountability',
];

export const FeatureThree = () => {
  return (
    <div className="py-24 bg-white">
      <Fade bottom distance="100px">
        <div className="feature__container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 order-1   ">
              <div className="lg:h-full overflow-hidden h-96 min-w-full ">
                <img
                  src={Plow}
                  alt="logo"
                  className="h-full min-w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 order-2 ">
              <p className="feature__header__text">
                Benefits of
                <span className=" text-theme-300"> PlowOps</span>
              </p>

              <p className="feature__subheader__text">
                PlowOps can benifit your city in numerous ways, and is currently
                providing support to cities across the nation.
              </p>

              <ul className="feature__body__list">
                {list.map((item: string) => (
                  <li key={item} className="feature__body__list__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
