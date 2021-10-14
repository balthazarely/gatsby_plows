import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HiTag } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {
  cardHover,
  sectionLayoutChildAnimation,
} from '../../../animations/animations';
import { TagButton } from '../Buttons/TagButton';

interface BlogCardTypes {
  title: string;
  date: string;
  path: string;
  categories: string[];
  image: any;
}

export const BlogCard = ({
  title,
  image,
  date,
  path,
  categories,
}: BlogCardTypes) => {
  return (
    <motion.div variants={sectionLayoutChildAnimation}>
      <motion.div initial="rest" whileHover="hover">
        <div className=" bg-white rounded-xl  shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 justify-between flex flex-col  ">
          <motion.div className="w-full h-52 rounded overflow-hidden  ">
            <motion.div
              className="w-full h-52"
              variants={cardHover}
              transition={{ type: 'easeInOut', duration: 0.35 }}
            >
              <Link to={path}>
                <GatsbyImage
                  image={image}
                  alt="blog post image"
                  className="w-full h-full"
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="p-4 md:h-40 h-36">
            <div className="flex-grow  h-full">
              <Link to={path}>
                <p className="mb-2 text-xs text-gray-600 ">{date}</p>
                <motion.div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                  <motion.p className=" text-md font-bold leading-tight  text-gray-800  md:h-20 h-16">
                    {title}
                  </motion.p>
                </motion.div>
              </Link>
              <div className="tags   w-full flex justify-end items-center">
                <HiTag className="text-theme-300" />
                {categories.map((category: any) => (
                  <TagButton key={category} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
