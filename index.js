const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav_visible");
  navToggle.classList.toggle("open");
});

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
