const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".promo-section__swiper-navigation-right",
    prevEl: ".promo-section__swiper-navigation-left",
  },
});
