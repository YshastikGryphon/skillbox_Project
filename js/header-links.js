 /* Tabs */

let header_button = document.querySelectorAll('.header__link-dropdown');
let header_container = document.querySelectorAll('.header__dropdown-container');
let main = document.querySelector('.main');

main.addEventListener('click', function() {
  header_button.forEach(function(element) {
    element.classList.remove('header__link-dropdown--active');
  })
  header_container.forEach(function(e){
    e.classList.remove('header__dropdown-container--active');
  })
})



header_button.forEach(function(element) {



  element.addEventListener('click',
  function(e) {

    header_button.forEach(function(element) {
      element.classList.remove('header__link-dropdown--active');
    })


    e.currentTarget.classList.add('header__link-dropdown--active');


  })
})
