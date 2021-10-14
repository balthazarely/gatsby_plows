import React from 'react';
import PlowOpsLogo from '../../../static/plow-ops-dashboard.png';
import ButtonLarge from '../Elements/Buttons/ButtonLarge';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

interface HeroLargeProps {
  scrollToSectionTwo: () => void;
}

const HeroLarge = ({ scrollToSectionTwo }: HeroLargeProps) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 pt-52 pb-32 lg:h-lg h-xl ">
      <div className="feature__container flex lg:flex-row flex-col justify-center items-center gap-3 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-1 flex-col gap-8 text-center lg:text-left  h-100  "
        >
          <motion.div variants={textChildren} className="hero__text">
            The World’s First
            <span className="text-theme-300"> Snow Operations </span>
            Application.
          </motion.div>
          <motion.div variants={textChildren} className="sub__hero__text">
            Remove the stress from your next major storm event. Spend less time
            managing and more time plowing with PlowOps.
          </motion.div>
          <motion.div
            variants={textChildren}
            className="button__wrapper flex lg:justify-start justify-center gap-2  "
          >
            <Link to="/request-demo">
              <ButtonLarge type="solid">Schedule Live Demo</ButtonLarge>
            </Link>
            <ButtonLarge clickFunction={scrollToSectionTwo} type="outline">
              Learn More
            </ButtonLarge>
          </motion.div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-1 justify-center  h-100  "
        >
          <motion.img
            variants={imageChildren}
            style={heroImage}
            src={PlowOpsLogo}
            alt="logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroLarge;

const heroImage = {
  maxHeight: '500px',
  maxWidth: '450px',
  width: '100%',
  height: '100%',
};

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const textChildren = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const imageChildren = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
