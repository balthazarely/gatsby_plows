import React from 'react';
import { GlobalContext } from '../../context/provider';

const DrawerOverlay = () => {
  const { menuOpen, closeMenu } = React.useContext(GlobalContext);

  return (
    <div
      onClick={() => {
        closeMenu();
        close();
      }}
      className={`fixed top-0 left-0 w-full h-screen bg-black z-30   transition-opacity duration-200  ${
        menuOpen
          ? 'opacity-40 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    ></div>
  );
};

export default DrawerOverlay;
