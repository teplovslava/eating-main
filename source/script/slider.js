document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 2.5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      360: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      950: {
        slidesPerView: 1.7,
        spaceBetween: 8
      },
      980: {
        slidesPerView: 1.9,
        spaceBetween: 8
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }



  });
})