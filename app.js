const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav__bar");
const navBarList = document.querySelector(".nav__bar .list");
const body = document.querySelector("body");
const links = document.querySelectorAll(".nav__bar .list a");

const handelResposiveNavBar = () => {
  toggleNavBarClasses();
  toggleBtn.classList.toggle("open");
};

const handelMobileLink = () => {
  toggleNavBarClasses();
};

const toggleNavBarClasses = () => {
  navBarList.classList.toggle("hidden");
  body.classList.toggle("disable-scoll");
  navBar.classList.toggle("set-height-width");
};

links.forEach((link) => {
  link.addEventListener("click", handelMobileLink);
});

toggleBtn.addEventListener("click", handelResposiveNavBar);
