const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav__bar");
const navBarList = document.querySelector(".nav__bar .list");
const body = document.querySelector("body");

const handelResposiveNavBar = () => {
  navBarList.classList.toggle("hidden");
  body.classList.toggle("disable-scoll");
  navBar.classList.toggle("set-height-width");
  toggleBtn.classList.toggle("open");
};

toggleBtn.addEventListener("click", handelResposiveNavBar);
