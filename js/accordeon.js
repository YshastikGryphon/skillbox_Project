/* My first accordion */

let accordeon_button = document.querySelectorAll('.catalog__accordion-button');
let accordeon = document.querySelectorAll('.catalog__accordion-item');

accordeon_button.forEach(function(element) {
  element.addEventListener('click',
  function(e) {
    const acc = e.currentTarget.dataset.acc;

    accordeon.forEach(function(){
      document.querySelector(`[data-acc="${acc}"]`).classList.toggle('catalog__accordion-item--active');
    })

  })
})

