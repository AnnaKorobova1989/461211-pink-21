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


  var menu = document.querySelector(".main-nav--no-js");
  var open_button = document.querySelector(".button-open");
  var close_button = document.querySelector(".button-close");


  menu.classList.remove("main-nav--no-js");

  open_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.add("main-nav--active-menu");
  })

  close_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.remove("main-nav--active-menu");
  })
