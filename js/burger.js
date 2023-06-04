/* Burger-menu */

let burger_button = document.querySelector('.header__burger-button');
let burger_menu = document.querySelector('.header__burger-group');
let menu_links = burger_menu.querySelectorAll('.header__link');

burger_button.addEventListener('click',

function() {
  burger_menu.classList.toggle('header__burger-group--active');
  burger_button.classList.toggle('header__burger-button--active');
  document.body.classList.toggle('stop-scroll');
}
)

menu_links.forEach(function(elem) {

  elem.addEventListener('click',
    function() {
      burger_menu.classList.remove('header__burger-group--active');
      burger_button.classList.remove('header__burger-button--active');
      document.body.classList.remove('stop-scroll');
    })
})
