const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu_btn");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu_icon-change");
  nav.classList.toggle("nav_sidebar");
});
// navToggle.addEventListener("click", () => {
//   nav.classList.toggle("nav_visible");
//   nav.style.color = "white";
//   nav.style.right = "0";
//   navToggle.classList.toggle("open");
//   navToggle.style.position = "fixed";
// });

// let navOpen = false;
// navToggle.addEventListener("click", () => {
//   nav.classList.toggle("nav_visible");

//   if (!navOpen) {
//     navToggle.classList.add("open");
//     navOpen = true;
//   } else {
//     navToggle.classList.remove("open");
//     navOpen = false;
//   }
// });
