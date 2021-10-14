import * as React from 'react';
import { SEO } from '../components/Metadata/SEO';
import { HiChevronLeft } from 'react-icons/hi';
import { Link } from 'gatsby';
import LayoutNoPage from '../layouts/layout-nopage';

const NotFoundPage = () => {
  return (
    <LayoutNoPage currentRoute="404">
      <SEO title="404" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-72 h-96 ">
        <div className="flex h-auto  ">
          <div className="flex-1 flex gap-1  justify-center flex-col text-right py-2 px-5  ">
            <div className="text-gray-600 lg:text-2xl sm:text-lg text-base justify-end">
              Something went wrong...
            </div>
            <div className=" flex justify-end">
              <Link to={'/'}>
                <button className="flex items-center group">
                  <HiChevronLeft className="h-8 text-2xl text-theme-300 group-hover:text-theme-700 duration-150" />
                  <span className="text-xs tracking-wide font-semibold uppercase text-theme-300 group-hover:text-theme-700 duration-150">
                    Back to Home
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" bg-gray-400 w-0.5 "></div>
          <div className="flex-1  py-2 px-5 ">
            <div className="text-theme-100 font-semibold text-7xl">404</div>
          </div>
        </div>
      </div>
    </LayoutNoPage>
  );
};

export default NotFoundPage;
