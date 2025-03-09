const useAnimate = () => {
  const scrollFadeIn = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
    viewport: { once: true },
  }

  const scrollFadeInFromBottom = {
    initial: {
      y: 60,
      opacity: 0,
    },
    whileInView: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: custom * 0.2 }, // `custom` に index を渡して遅延
    }),
    viewport: { once: true },
  }

  const scrollFadeInFromRight = {
    initial: {
      x: 60,
      opacity: 0,
    },
    whileInView: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, delay: custom * 0.2 }, // `custom` に index を渡して遅延
    }),
    viewport: { once: true },
  }

  const scrollFadeInFromLeft = {
    initial: {
      x: -60,
      opacity: 0,
    },
    whileInView: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, delay: custom * 0.2 }, // `custom` に index を渡して遅延
    }),
    viewport: { once: true },
  }

  return {
    scrollFadeIn,
    scrollFadeInFromBottom,
    scrollFadeInFromRight,
    scrollFadeInFromLeft,
  }
}

export default useAnimate
