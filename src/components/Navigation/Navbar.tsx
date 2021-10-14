import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import SideDrawer from './SideDrawer';
import HamburgerIcon from './HamburgerIcon';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { navLinks } from '../Content/Navlinks';
import PlowOpsLogo from '../../../static/PlowOps-Logo.svg';
import NavbarLink, { LinkProps } from './NavbarLink';

interface DemoBtnPropTypes {
  link: string;
}

const DemoBtn = ({ link }: DemoBtnPropTypes) => {
  return (
    <div className="group ml-3 flex flex-col justify-center items-center relative">
      <Link
        to={link}
        className="cursor-pointer transition-all duration-200 inline-flex items-center justify-center px-4 py-1.5 border border-transparent text-sm font-medium rounded-sm text-white bg-theme-300 hover:bg-theme-500"
      >
        Request Demo
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [shrinkNavbar, setShrinkNavbar] = useState<boolean>(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -70) {
      setShrinkNavbar(true);
    } else {
      setShrinkNavbar(false);
    }
  });

  const isBrowser = typeof window !== `undefined`;
  function getScrollPosition() {
    if (!isBrowser) return;
    if (window.scrollY > 70) {
      setShrinkNavbar(true);
    } else {
      setShrinkNavbar(false);
    }
  }

  useEffect(() => {
    getScrollPosition();
  }, []);

  return (
    <nav
      className={`navbar w-full fixed transition-300 ${
        shrinkNavbar ? 'h-16 bg-white shadow-lg' : ' h-24 bg-transparent '
      }`}
    >
      <div className="max-w-7xl mx-auto h-full items-center flex justify-between px-4 sm:px-6 lg:px-8 ">
        <Link to="/">
          <img
            src={PlowOpsLogo}
            alt="logo"
            className={`transition-300   ${
              shrinkNavbar ? ' h-20 md:h-24' : ' h-24  md:h-32'
            } `}
          />
        </Link>
        <HamburgerIcon />
        <div className="navlinks lg:flex flex-row hidden items-center ">
          {navLinks.map((link: LinkProps) => (
            <div key={link.name}>
              <NavbarLink link={link.link} name={link.name} />
            </div>
          ))}
          <DemoBtn link="/request-demo" />
        </div>
      </div>
      <div className=" relative block lg:hidden ">
        <SideDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
