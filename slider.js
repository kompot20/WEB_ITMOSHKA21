const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider,{
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
  },
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
      768:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 50,
      },
  }
})