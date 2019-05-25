var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var link = document.querySelector(".button-modal");
var popup = document.querySelector(".modal__login");
var close = popup.querySelector(".modal__close");


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--opened');
  }
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
});
