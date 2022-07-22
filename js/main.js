$(document).ready(function () {
  $(".menu-burger").on("click", function () {
    $(".menu-burger").toggleClass("_active");
    $(".menu__list-header").toggleClass("_active");
  });

  $(".notification__form").delay(5000).hide(300);

  $(".description__slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
    asNavFor: ".description__slider-nav",
    prevArrow: `
      <button type="button" class="slick-prev">
        <img src="images/arrow-prev.svg" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="images/arrow-next.svg" />
      </button>`,
    responsive: [
      {
        breakpoint: 475,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".description__slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".description__slider-for",
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    prevArrow: `
      <button type="button" class="slick-prev">
        <img src="images/arrow-prev.svg" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="images/arrow-next.svg" />
      </button>`,
  });
});

let headerParalax = document.querySelectorAll(".bg-paralax");

this.addEventListener("scroll", function () {
  for (paralax of headerParalax) {
    paralax.style.top = +this.scrollY + "px";
    paralax.style.backgroundPositionY = -+(+this.scrollY) / 2 + "px";
  }
});

const showItems = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoos);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("active");
  }

  function selectChoos() {
    let text = this.innerText;
    let select = this.closest(".select");
    let curentText = select.querySelector(".select__title");
    curentText.innerText = text;
    select.classList.remove("active");
  }
};

showItems();
