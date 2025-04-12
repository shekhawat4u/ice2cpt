


// TOGGLE MENU
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  let menuVisible = false;

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    menuVisible = !menuVisible;
    menu.classList.toggle('menu-active', menuVisible);
  });

  document.addEventListener('click', (e) => {
    if (menuVisible && !menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('menu-active');
      menuVisible = false;
    }
  });
});