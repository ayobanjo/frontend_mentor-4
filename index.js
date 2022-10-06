const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav_visible");
  nav.style.color = "white";
  nav.style.right = "0";
  // nav.classList.toggle("mobile_nav");
  navToggle.classList.toggle("open");
  navToggle.style.position = "fixed";
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
