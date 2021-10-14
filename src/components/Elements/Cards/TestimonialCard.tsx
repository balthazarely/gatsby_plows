import React from 'react';
import Fade from 'react-reveal/Fade';
import { GoQuote } from 'react-icons/go';

interface TestimonialPropTypes {
  name: string;
  company: string;
  shortStatement: string;
  logo: string;
}

export const TestimonialCard = ({
  name,
  company,
  shortStatement,
  logo,
}: TestimonialPropTypes) => {
  return (
    <div className="transform duration-200 transition hover:-translate-y-1  ">
      <Fade bottom distance="100px">
        <div className="flex justify-between flex-col items-center rounded-lg cursor-pointer bg-white h-full lg:h-18 hover:shadow-lg shadow-md py-4 px-6 duration-200 transition">
          <GoQuote className="text-theme-100 text-4xl" />
          <p className="mt-4 max-w-2xl leading-relaxed text-sm md:text-center text-gray-500 lg:mx-auto">
            {shortStatement}
          </p>
          <div className="flex just justify-center flex-col items-center">
            <img src={logo} alt="logo" className="lg:h-24 h-20" />
            <p className="mt-1 italic font-bold text-sm md:text-center text-gray-500 lg:mx-auto">
              {name}
            </p>
            <p className=" italic text-xs md:text-center text-gray-500 lg:mx-auto">
              {company}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};
