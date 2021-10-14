import React from 'react';
import ButtonLarge from '../Elements/Buttons/ButtonLarge';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

export const CTASection = () => {
  return (
    <div className="bg-white py-24">
      <Fade bottom distance="100px">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-theme-300">Contact us today.</span>
          </h2>
          <div className="mt-8 flex gap-2 lg:mt-0 lg:flex-shrink-0">
            <Link to="/request-demo">
              <ButtonLarge type="solid">Schedule Live Demo</ButtonLarge>
            </Link>
            <Link to="/contact">
              <ButtonLarge type="outline">Contact</ButtonLarge>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};
