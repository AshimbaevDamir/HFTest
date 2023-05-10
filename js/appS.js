let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    speed: 2000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    
  });

  