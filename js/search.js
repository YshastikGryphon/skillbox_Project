/* Search */

let search_show = document.querySelector('.header__search-button');
let search_hide= document.querySelector('.header__search-close');
let search_field = document.querySelector('.header__searchfield');


search_show.addEventListener('focus', function() {
  search_field.classList.add('header__searchfield--active');
})

search_hide.addEventListener('click', function() {
  search_field.classList.remove('header__searchfield--active');
})
