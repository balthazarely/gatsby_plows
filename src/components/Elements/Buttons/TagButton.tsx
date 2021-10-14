import { Link } from 'gatsby';
import React from 'react';

interface TagButtonTypes {
  category: string;
}

export const TagButton = ({ category }: TagButtonTypes) => {
  return (
    <Link to={`/blog/category/${category}`}>
      <div className="text-xs text-gray-500 cursor-pointer  bg-gray-200 py-0.5 px-1 mr-1 rounded hover:bg-gray-300 ">
        {category}
      </div>
    </Link>
  );
};
