import React from 'react';
import './src/styles/global.scss';
import './src/styles/typography.scss';
import './src/styles/utilities.scss';
import './src/styles/blog.scss';
import './src/styles/svg-backgrounds.scss';
import '@fontsource/poppins/900.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/100.css';

import GlobalProvider from './src/context/provider';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <link
        href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalProvider>{element}</GlobalProvider>
  </>
);

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), 250);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), 250);
  }
  return false;
};
