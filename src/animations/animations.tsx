const duration = 0.2;
export const pageAnimation = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,

    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};

export const sectionLayoutChildAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
  },
};

// Modal Transitions
export const modalVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'backOut',
    },
  },
};

export const modalBGVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.25,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      ease: 'easeOut',
    },
  },
};
