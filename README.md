# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Intro section with dropdown navigation challenge

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop View](./ScreenShot/Desktop.png)

### Links

- Solution URL: [solution URL here](https://github.com/ayobanjo/frontend_mentor-4)
- Live Site URL: [live site URL here](https://ayobanjo.github.io/frontend_mentor-4/)

## My process

I took a mobile first approach on this design, but I felt I should have gone desktop first in this case. Added JS for most functionality and interactivity.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt how to make Hamburger menus, even though the menu images were provided,(Which is didnt see until I completed the hamburger menu).

I was able to apply z-index property on an element, also had a better understanding of positioning.

Learnt how to make dropdown menu, and JS to make it work.

JS

- Learnt how to covert nodelist to arrays, and I got a better understanding of it

```js
for (let i = 0; i < dropDowns.length; i++) {
  dropDowns[i].addEventListener("click", function () {
    const dropIcon = document.querySelectorAll(".drop_down-img");
    dropIcon[i].classList.toggle("drop_down-imgup");
    removeHide[i].classList.toggle("drop_down-hide");
  });
}
```

### Continued development

- Better responsiveness, and how to make my pictures not distorted
- I will also like to make use of a single navigation
- Completing the grey area of the mobile design

### Useful resources

- [FreeCodeCamp](https://www.freecodecamp.org/news/css-tutorial-drop-shadow/) - This helped me for box shadow implementation

## Author

- GitHub - [Funsho Ayobanjo](https://github.com/ayobanjo)
- Frontend Mentor - [@ayobanjo](https://www.frontendmentor.io/profile/ayobanjo)
- Twitter - [@AyobanjoFunsho](https://www.twitter.com/ayobanjofunsho)

## Acknowledgments

My acknowledgments goes to FrontEnd mentor for the platform provided to hone my skills
