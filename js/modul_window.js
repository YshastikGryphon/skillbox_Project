
let painting_trigger = document.querySelectorAll('.gallery__swiper-select');
let modul_screen = document.querySelector('.gallery__modul-screen');
let modul_close = document.querySelectorAll('.gallery__modul-close');
let modul_window = document.querySelectorAll('.gallery__modul-window');

painting_trigger.forEach(function(trigger) {
  trigger.addEventListener('click',
  function(e) {
    const data = e.currentTarget.dataset.paintin;

    modul_screen.classList.add('gallery__modul-screen--active');

    modul_window.forEach(function() {
      document.querySelector(`[data-painting="${data}"]`).classList.add('gallery__modul-window--active');
    })


    })

  })

  modul_close.forEach(function(close_btn) {
    close_btn.addEventListener('click', function() {
      modul_screen.classList.remove('gallery__modul-screen--active');

      modul_window.forEach(function(window) {
        window.classList.remove('gallery__modul-window--active');
      })
    })
  })
