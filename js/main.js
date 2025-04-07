const menuBtn = document.querySelector(".memu__btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});
