const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider,{
    //Переменная, отображающая сколько картинок будет отображаться при размере экрана меньше 768 (то есть одна картинка)
    slidesPerView: 1,
    //Переменная, определяющая какие отступы между картинками должны быть
    spaceBetween: 10,
    pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
  },
  centeredSlides: true,
  //Переменная, определяющая, что картинки перемещаются циклично
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
