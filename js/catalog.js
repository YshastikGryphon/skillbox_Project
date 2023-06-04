/* Tabs */

let catalog_button = document.querySelectorAll('.catalog__accordion-link');
let catalog_item = document.querySelectorAll('.catalog__about-item');

catalog_button.forEach(function(element) {

  element.addEventListener('click',
  function(e) {

    const path = e.currentTarget.dataset.path;

    //Онуление стилей
    catalog_item.forEach(function(text) {
      text.classList.remove('catalog__about-item--active');
    })


    // Добавить стиль элементу
      catalog_item.forEach(function(){
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__about-item--active');
      })
  })
})
