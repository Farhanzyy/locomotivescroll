document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.1,
      smartphone: {
          smooth: true
      },
      tablet: {
          smooth: true
      }
  });

  const navbar = document.querySelector('.navbar');
  
  scroll.on('scroll', (args) => {
      navbar.style.backgroundColor = args.scroll.y > 100 
          ? 'rgba(0, 0, 0, 0.9)' 
          : 'rgba(0, 0, 0, 0.7)';
  });
});
