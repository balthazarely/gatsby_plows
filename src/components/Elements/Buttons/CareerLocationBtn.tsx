import React from 'react';

interface CareerLocationBtnPropTypes {
  selectedCountry: string;
  country: string;
  setJobCountry: (value: string) => void;
}

export const CareerLocationBtn = ({
  selectedCountry,
  country,
  setJobCountry,
}: CareerLocationBtnPropTypes) => {
  return (
    <button
      onClick={() => setJobCountry(country)}
      className={`uppercase px-4 py-0.5 text-sm font-bold  ${
        selectedCountry === country
          ? 'text-theme-100 border-b-2 border-theme-100'
          : 'text-gray-500 border-b-0'
      }`}
    >
      {country}
    </button>
  );
};
