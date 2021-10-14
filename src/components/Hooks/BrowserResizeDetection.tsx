import React, { useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { GlobalContext } from '../../context/provider';

const BrowserResizeDetection = () => {
  const { width, ref } = useResizeDetector();
  const { closeMenu } = React.useContext(GlobalContext);

  useEffect(() => {
    closeMenu();
  }, [width]);

  return <div ref={ref}></div>;
};

export default BrowserResizeDetection;
