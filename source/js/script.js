const sliderControls = document.querySelectorAll(".control__button");
var priceSection = document.querySelector(".price");
var priceVaries = ["price--left", "price--center", "price--right"];
var activeVariety = "price--center";

  for (let i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      const currentControl = document.querySelector(".control__button--active");
      currentControl.classList.remove("control__button--active");
      sliderControls[i].classList.add("control__button--active");
      priceSection.classList.remove(activeVariety);
      activeVariety = priceVaries[0];
      priceSection.classList.add(activeVariety);
    })
  };


  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var pageHeader = document.querySelector('.page-header');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      pageHeader.classList.add('page-header__menu-opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      pageHeader.classList.remove('page-header__menu-opened');
    }
  });
