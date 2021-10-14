import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Navigation/Footer';
import { pageAnimation } from '../animations/animations';
import BrowserResizeDetection from '../components/Hooks/BrowserResizeDetection';
import { GlobalContext } from '../context/provider';
import disableScroll from 'disable-scroll';

interface LayoutTypes {
  children: JSX.Element | JSX.Element[];
  currentRoute: string;
}
const Layout = ({ children, currentRoute }: LayoutTypes) => {
  const { changeCurrentPageString, menuOpen } = React.useContext(GlobalContext);
  disableScroll[!menuOpen ? 'off' : 'on']();

  useEffect(() => {
    changeCurrentPageString(currentRoute);
  }, []);

  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <div className="z-50">
        <Navbar />
      </div>
      <BrowserResizeDetection />
      <motion.main
        className="z-40 flex flex-col flex-grow bg-gray-50  "
        variants={pageAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
