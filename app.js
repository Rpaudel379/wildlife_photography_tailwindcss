window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");

  const mobileLinks = document.querySelector(".mobile-links");

  menu.addEventListener("click", () => {
    mobileLinks.classList.toggle("show-links");
  });

  var swiperHero = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiperProjects = new Swiper(".mySwiperProjects", {
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    loop: true,
  });
});
