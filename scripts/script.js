const swiper_second = new Swiper(".advantages-section__swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".advantages-section__swiper-right-btn",
    prevEl: ".advantages-section__swiper-left-btn",
  },
});

const swiper = new Swiper(".promo-section__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".promo-section__swiper-navigation-right",
    prevEl: ".promo-section__swiper-navigation-left",
  },
});

const swiper_third = new Swiper(".goods-section__swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
