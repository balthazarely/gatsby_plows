import React from 'react';
import { Link } from 'gatsby';
import { HiChevronRight } from 'react-icons/hi';

interface PageProps {
  title: string;
  path: string;
}

export const NextBlogBtn = ({ title, path }: PageProps) => {
  return (
    <div className="justify-end flex-1 group ">
      <Link to={path}>
        <div className="flex items-center justify-end">
          <span className="text-xs  tracking-wide font-semibold uppercase text-theme-300 group-hover:text-theme-700 transform group-hover:translate-x-1 duration-150">
            Next Blog
          </span>
          <HiChevronRight className="h-8 text-xl text-theme-300 group-hover:text-theme-700 transform group-hover:translate-x-1 group-hover:scale-125 duration-150" />
        </div>
        <div className="blog text-xs sm:text-sm  md:text-base text-right  font-bold text-gray-600 group-hover:text-theme-700 duration-150">
          {title}
        </div>
      </Link>
    </div>
  );
};
