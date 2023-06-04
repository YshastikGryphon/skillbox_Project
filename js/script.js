/* Scrollbar style */
Array.prototype.forEach.call(
  document.querySelectorAll('.header__dropdown-list'),
  (el) => new SimpleBar(el, {
    autoHide: true,
    scrollbarMinSize: 10,
    scrollbarMaxSize: 30,
  })
);

/* Select style */
const filter_element = document.querySelector('.gallery__filter-select');
const filter_choices = new Choices(filter_element, {
  searchEnabled: false,
  searchChoices: true,
  position: 'auto',
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices gallery__filter-choices',
  }
});

/* Swiper for gallery*/
const gallery__swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
  loop: true,
  spaceBetween: 45,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
});

/* Swiper for events*/
const events__swiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
  },
});

/* Swiper for projects*/
const projects__swiper = new Swiper('.projects__swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});

/* Yandex map */
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("contacts__yandex-map", {
    center: [55.76031760333708, 37.61478271661933],
    zoom: 14,
    controls: ['zoomControl', 'routeButtonControl'],
  });
  myMap.behaviors.disable('scrollZoom');
  myMap.controls.remove();
  myMap.behaviors.disable('drag');
  var Placemark = new ymaps.Placemark([55.76031760333708, 37.61478271661933], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/map.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });
  myMap.geoObjects.add(Placemark);
}

/* Tippy */
tippy('#tippy-1', {
  content: 'Пример современных тенденций — современная методология разработки',
  trigger: 'click'
})

tippy('#tippy-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click'
})

tippy('#tippy-3', {
  content: 'В стремлении повысить качество',
  trigger: 'click'
})

/* Input Mask */
var selector = document.getElementById("phone");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

/* Just Validate */
new JustValidate('.contacts__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = Inputmask.unmask(document.getElementById('phone').value, { mask: "+7(999) 999-99-99" });
        return (Number(phone) && phone.length === 10)
      }
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное'
    },
    phone: {
      required: 'Вы не ввели телефон',
      function: 'Неверный номер'
    },
  }
});
