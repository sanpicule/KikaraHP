const useScrollFadeIn = () => {
  const observeScrollFadeIn = (selector, animationClass) => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass)
        }
      })
    }

    const observer = new IntersectionObserver(callback)

    const targets = document.querySelectorAll(selector)
    targets.forEach((target) => {
      target.classList.add('opacity-0')
      observer.observe(target)
    })
  }

  const scrollFadeInFromBottom = () => {
    observeScrollFadeIn('.js-show-on-scroll-from-bottom', 'animate-slideInFromBottom')
  }

  const scrollFadeInFromRight = () => {
    observeScrollFadeIn('.js-show-on-scroll-from-right', 'animate-slideInFromRight')
  }

  const scrollFadeInFromLeft = () => {
    observeScrollFadeIn('.js-show-on-scroll-from-left', 'animate-slideInFromLeft')
  }

  return {
    scrollFadeInFromBottom,
    scrollFadeInFromRight,
    scrollFadeInFromLeft
  }
}

export default useScrollFadeIn