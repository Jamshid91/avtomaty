const header = document.querySelector('header')
      catalogBtn = document.querySelector('.catalog-btn'),
      catalogNav = document.querySelector('.catalog-nav'),

$(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        // $('header').addClass('position-sticky')
        $('header').addClass('headerSticy')
      } else {
        // $('header').removeClass('position-sticky')
        $('header').removeClass('headerSticy')
      }
    });
  });


  catalogBtn.addEventListener('click', () => {
    catalogBtn.parentElement.classList.toggle('showCatalog');
});

document.addEventListener('click', function (e) {
    catalogBtn.parentElement.contains(e.target)||catalogBtn.parentElement.classList.remove('showCatalog')
});

const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body');



menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('clickedBtn')
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll')
});
