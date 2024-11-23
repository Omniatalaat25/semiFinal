
  var swiper = new Swiper(".sale-sec", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });