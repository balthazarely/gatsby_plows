import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  HiOutlineDeviceMobile,
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiOutlineChatAlt,
  HiOutlineStatusOnline,
  HiOutlineCloudUpload,
} from 'react-icons/hi';
import { GettingStartedCard } from '../Elements/Cards/GettingStartedCard';

const features = [
  {
    name: 'Tablets or phones for in-vehicle mounting',
    icon: HiOutlineDeviceMobile,
  },
  {
    name: 'Mounting hardware',
    icon: HiOutlineCog,
  },
  {
    name: 'Telematics devices',
    icon: HiOutlineCloudUpload,
  },
  {
    name: 'Installation assistance',
    icon: HiOutlineInformationCircle,
  },
  {
    name: 'Cellular data plans for all devices',
    icon: HiOutlineStatusOnline,
  },
  {
    name: '24/7 support',
    icon: HiOutlineChatAlt,
  },
];
export const GettingStarted = () => {
  return (
    <div className="py-24 bg-gray-50">
      <Fade bottom distance="100px">
        <div className="feature__container">
          <Fade bottom distance="100px">
            <div className="lg:text-center">
              <p className="feature__header__text">Getting Started</p>
              <p className="feature__subheader__text">
                Software, hardware, installation, cellular data, and support are
                all provided for a flat rate per vehicle per month. Our
                all-inclusive approach makes it easy to digitize operations or
                migrate from other solutions. In addition to the PlowOps
                software solution, we also provide:
              </p>
            </div>
          </Fade>
          <div className=" grid md:grid-cols-3 grid-cols-2 gap-4 mt-6  ">
            {features.map((feature) => (
              <GettingStartedCard
                key={feature.name}
                name={feature.name}
                icon={
                  <feature.icon
                    className="h-8 w-8 text-theme-300"
                    aria-hidden="true"
                  />
                }
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};
