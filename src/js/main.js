AOS.init();

const hamburgerMenu = document.getElementById("hamburger-menu");
const navigationList = document.getElementById("navigation-list");

const toggleNavigation = () => {
  hamburgerMenu.classList.toggle("active");
  navigationList.classList.toggle("active");
};

hamburgerMenu.addEventListener("click", () => {
  toggleNavigation();
});
