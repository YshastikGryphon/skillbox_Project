let scrollto = document.querySelector('.catalog__about-list');
let links = document.querySelectorAll('.catalog__accordion-link');
const pageWidth = document.documentElement.scrollWidth;

if(pageWidth <= 960)
{
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      scrollto.scrollIntoView(top);
    })
  })
}

