export const scrollFadeInFromLeft = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      //console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideInFromLeft');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll('.js-show-on-scroll-from-left');
  targets.forEach(function (target) {
    target.classList.add('opacity-0');
    observer.observe(target);
  });
};
