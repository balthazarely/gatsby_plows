import React from 'react';

interface HeaderTypeProps {
  pageTitle: string;
  centered: boolean;
}

export const PageHeader = ({ pageTitle, centered }: HeaderTypeProps) => {
  return (
    <div
      className={`leading-8 font-extrabold tracking-tight text-gray-900 text-3xl sm:text-4xl  ${
        centered ? 'text-center' : 'text-left'
      }`}
    >
      {pageTitle}
    </div>
  );
};
