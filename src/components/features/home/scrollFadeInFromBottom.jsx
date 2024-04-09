export const scrollFadeInFromBottom = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      //console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideInFromBottom');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll('.js-show-on-scroll-from-bottom');
  targets.forEach(function (target) {
    target.classList.add('opacity-0');
    observer.observe(target);
  });
};
