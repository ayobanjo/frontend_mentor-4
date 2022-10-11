const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu_btn");
const dropDowns = document.querySelectorAll(".dropdown");
const removeHide = document.querySelectorAll(".drop_down-hide");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu_icon-change");
  nav.classList.toggle("nav_sidebar");
});

// // const arrdropDown = Array.from(dropDowns);
for (let i = 0; i < dropDowns.length; i++) {
  dropDowns[i].addEventListener("click", function () {
    const dropIcon = document.querySelectorAll(".drop_down-img");
    dropIcon[i].classList.toggle("drop_down-imgup");
    removeHide[i].classList.toggle("drop_down-hide");
  });
}

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
