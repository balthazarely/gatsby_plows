import React from 'react';
import { motion } from 'framer-motion';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { sectionLayoutChildAnimation } from '../../../animations/animations';

interface TestimonialPropTypes {
  title: string;
  location: string;
  country: string[];
  link: string;
}

export const CareerCard = ({
  title,
  location,
  country,
  link,
}: TestimonialPropTypes) => {
  return (
    <motion.div variants={sectionLayoutChildAnimation} className="group">
      <a target="BLANK" href={link}>
        <div className="transform duration-200 transition hover:-translate-y-1  ">
          <div className="flex justify-between flex-col items-start gap-3 rounded-lg cursor-pointer bg-white h-full lg:h-18 hover:shadow-lg shadow-md py-4 px-6 duration-200 transition">
            <p className="font-bold text-base text-gray-500 group-hover:text-theme-100 duration-200 ">
              {title}
            </p>
            <div className="flex  justify-center  items-center">
              <HiOutlineLocationMarker className="text-theme-100" />
              <p className="ml-1 text-sm md:text-center text-gray-500 ">
                {location}
              </p>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
