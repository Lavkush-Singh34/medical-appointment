// Initialize Swiper
const sponsorsSwiper = new Swiper('.sponsors-slider', {
    // Enable loop
    loop: true,
    
    // Auto play
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    // Responsive breakpoints
    breakpoints: {
      // Mobile
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // Tablet
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // Desktop
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });