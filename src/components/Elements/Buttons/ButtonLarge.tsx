import React from 'react';

interface ButtonTypes {
  children: React.ReactNode;
  type: 'solid' | 'outline';
  clickFunction?: () => void;
}

const ButtonLarge = ({ children, type, clickFunction }: ButtonTypes) => (
  <button
    onClick={() => clickFunction && clickFunction()}
    className=" inline-flex rounded-md shadow"
  >
    <div
      className={`cursor-pointer  transition-all duration-200 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
        type === 'outline'
          ? 'text-theme-300 bg-white hover:bg-gray-100'
          : ' text-white bg-theme-300 hover:bg-theme-500'
      }`}
    >
      {children}
    </div>
  </button>
);

export default ButtonLarge;
