const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

let navOpen = false;
navToggle.addEventListener("click", () => {
  if (!navOpen) {
    navToggle.classList.add("open");
    navOpen = true;
  } else {
    navToggle.classList.remove("open");
    navOpen = false;
  }
});

// navToggle.addEventListener("click", () => {
//   nav.classList.toggle("nav_visible");
// });
