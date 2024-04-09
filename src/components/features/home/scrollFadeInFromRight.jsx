export const scrollFadeInFromRight = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      //console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideInFromRight');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll('.js-show-on-scroll-from-right');
  targets.forEach(function (target) {
    target.classList.add('opacity-0');
    observer.observe(target);
  });
};
