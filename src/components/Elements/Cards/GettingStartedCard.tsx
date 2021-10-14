import React from 'react';
import Fade from 'react-reveal/Fade';

interface GettingStartedPropTypes {
  name: string;
  icon: JSX.Element;
}

export const GettingStartedCard = ({ name, icon }: GettingStartedPropTypes) => {
  return (
    <div className="transform duration-200 transition hover:-translate-y-1  ">
      <Fade bottom distance="100px">
        {/* <div>{feature.name}</div> */}
        <div className="flex justify-start items-center rounded-lg cursor-pointer bg-white h-full lg:h-18 hover:shadow-lg shadow-md py-2 px-4 duration-200 transition">
          <div className="flex items-center justify-center h-10 max-w-10 ">
            {icon}
          </div>
          <p className="md:text-sm sm:text-xs lg:text-base text-xs  font-semibold text-gray-500 ml-2">
            {name}
          </p>
        </div>
      </Fade>
    </div>
  );
};
