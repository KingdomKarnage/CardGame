const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  speed: 1000,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    640: { slidesPerView: 3 },
    480: { slidesPerView: 3 },
    320: { slidesPerView: 3 },
  },
});
const openModal = document.querySelector(".heading__hamburger");
openModal.addEventListener("click", function () {
  const responsiveMenu = document.getElementsByClassName("responsive__menu");
  console.log(responsiveMenu);
  if (responsiveMenu[0].classList.contains("active")) {
    responsiveMenu[0].classList.remove("active");
  } else {
    responsiveMenu[0].classList.add("active");
  }
});
const closeModal = document.querySelector(".clos__btn");
closeModal.addEventListener("click", function () {
  const responsiveMenu = document.getElementsByClassName("responsive__menu");
  console.log(responsiveMenu);
  if (responsiveMenu[0].classList.contains("active")) {
    responsiveMenu[0].classList.remove("active");
  } else {
    responsiveMenu[0].classList.add("active");
  }
});
