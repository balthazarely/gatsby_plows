import React from 'react';
import { Link } from 'gatsby';
import { GlobalContext } from '../../context/provider';

export interface SublinkProps {
  sublinkName?: string;
  link: string;
}

export interface LinkProps {
  name: string;
  link: string;
}

export default function NavbarLink({ link, name }: LinkProps) {
  const { currentPage } = React.useContext(GlobalContext);
  return (
    <>
      {name !== 'Request Demo' && (
        <div className="group flex flex-col justify-center items-center relative">
          {name !== 'Login' ? (
            <Link
              to={link}
              partiallyActive={link !== '/' ? true : false}
              activeClassName="active--nav"
              className="group px-6 noselect text-theme-700 flex text-sm font-semibold transition-all duration-200  group-hover:text-theme-300"
            >
              {name}
            </Link>
          ) : (
            <a
              href="https://portal.plowops.com/"
              target="BLANK"
              className="group px-6 noselect text-theme-700 flex text-sm font-semibold transition-all duration-200  group-hover:text-theme-300"
            >
              {name}
            </a>
          )}

          {currentPage === link && (
            <div className="absolute top-6  w-9/12 h-0.5  bg-theme-100  " />
          )}
          <div className="absolute top-6  w-9/12 h-0.5  bg-theme-100 group-hover:scale-x-100 scale-x-0 transform duration-300  " />
        </div>
      )}
    </>
  );
}
