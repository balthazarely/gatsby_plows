import { Link } from 'gatsby';
import React from 'react';
import PlowOpsLogo from '../../../static/PlowOps-Logo.svg';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="place-self-end  w-full py-8 topo__background">
        <div className="max-w-7xl mx-auto flex-col items-center sm:flex-row flex px-4 sm:px-6 lg:px-8  justify-between ">
          <div className="flex flex-col sm:flex-row justify-start items-center ">
            <Link className="px-4" to="/">
              <img
                src={PlowOpsLogo}
                alt="logo"
                className={`transition-300 h-20 `}
              />
            </Link>
            <p className="text-xs font-light text-gray-300">
              © 2021 PlowOps, LLC. All rights reserved.
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center sm:mt-0 mt-4  ">
            <a target="BLANK" href="https://www.facebook.com/NeoTreks">
              <FaFacebookSquare className="text-gray-400 text-2xl cursor-pointer hover:text-gray-200 transition duration-150" />
            </a>
            <a target="BLANK" href="https://twitter.com/neotreks">
              <FaTwitterSquare className="text-gray-400 text-2xl cursor-pointer hover:text-gray-200 transition duration-150" />
            </a>
            <a target="BLANK" href="https://www.linkedin.com/company/2877562/">
              <FaLinkedin className="text-gray-400 text-2xl cursor-pointer hover:text-gray-200 transition duration-150" />
            </a>
            <a
              target="BLANK"
              href="https://www.youtube.com/channel/UCsu3KESOvr6tyAP4Ojicstg"
            >
              <FaYoutube className="text-gray-400 text-2xl cursor-pointer hover:text-gray-200 transition duration-150" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
