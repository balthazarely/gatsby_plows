import React from 'react';
import { Link } from 'gatsby';
import { GlobalContext } from '../../context/provider';
import { navLinks } from '../Content/Navlinks';
import { HiX } from 'react-icons/hi';
import DrawerOverlay from './DrawerOverlay';
import { LinkProps } from './NavbarLink';
import { motion } from 'framer-motion';

function SideDrawer() {
  const { menuOpen, closeMenu, currentPage } = React.useContext(GlobalContext);

  const DemoBtn = () => {
    return (
      <div className="cursor-pointer transition-all duration-200 inline-flex items-center justify-center px-4 py-1.5 border border-transparent text-sm font-medium rounded-sm text-white bg-theme-300 hover:bg-theme-500">
        Request Demo
      </div>
    );
  };

  const container = {
    hidden: { scale: 1 },
    show: {
      scale: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.03,
      },
    },
  };

  const itemA = {
    hidden: { x: 70 },
    show: { x: 0 },
  };

  return (
    <>
      <DrawerOverlay />
      <div
        className={` fixed top-0 right-0 bg-white sm:w-72 w-full  h-screen z-40 transition-300 ${
          menuOpen
            ? 'transform md:translate-x-0 shadow-2xl   '
            : 'transform translate-x-full shadow-none '
        }`}
      >
        <div className="link__wrapper  items-center sm:items-start flex flex-col p-4  ">
          <button
            className="flex flex-col self-end h-8 w-8 hover:text-theme-300 justify-center items-center group lg:hidden cursor-pointer standard-transition"
            onClick={() => closeMenu()}
          >
            <HiX className="h-6 w-6" />
          </button>
          <motion.div
            variants={container}
            animate={menuOpen ? 'show' : 'hidden'}
            className=" flex items-center sm:items-start flex-col p-4"
          >
            {navLinks.map((link: LinkProps) => (
              <>
                {link.name !== 'Login' ? (
                  <Link
                    key={link.link}
                    onClick={() => closeMenu()}
                    className="sm:m-0 my-2  py-4  bg-white standard-transition group relative hover:text-theme-300 sm:text-sm text-md font-semibold text-theme-700 duration-1000 "
                    to={link.link}
                    partiallyActive={link.link !== '/' ? true : false}
                    activeClassName="active--nav"
                  >
                    <motion.div key={link.name} variants={itemA}>
                      {link.name !== 'Request Demo' ? (
                        <>
                          <div className="noselect"> {link.name} </div>
                          {link.name !== 'Request Demo' && (
                            <div className="absolute top-10 left-0 w-full h-0.5 bg-theme-100 group-hover:scale-x-100 scale-x-0 transform duration-300  " />
                          )}
                          {currentPage === link.link &&
                            link.name !== 'Request Demo' && (
                              <div className="absolutetop-10 left-0 w-full h-0.5 bg-theme-100  " />
                            )}
                        </>
                      ) : (
                        <DemoBtn />
                      )}
                    </motion.div>
                  </Link>
                ) : (
                  <a
                    key={link.link}
                    className="sm:m-0 my-2  py-4  bg-white standard-transition group relative hover:text-theme-300 sm:text-sm text-md font-semibold text-theme-700 duration-1000 "
                    href="https://portal.plowops.com/"
                    target="BLANK"
                  >
                    <motion.div key={link.name} variants={itemA}>
                      {link.name}
                      <div className="absolute top-10 left-0 w-full h-0.5 bg-theme-100 group-hover:scale-x-100 scale-x-0 transform duration-300  " />
                    </motion.div>
                  </a>
                )}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default SideDrawer;
