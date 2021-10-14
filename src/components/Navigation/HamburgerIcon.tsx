import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { GlobalContext } from '../../context/provider';

function HamburgerIcon() {
  const { openMenu } = React.useContext(GlobalContext);
  return (
    <>
      <button
        className="flex flex-row justify-center items-center group lg:hidden hover:text-theme-500  cursor-pointer"
        onClick={() => openMenu()}
      >
        <HiMenuAlt3 className="w-8 h-8" />
      </button>
    </>
  );
}

export default HamburgerIcon;
