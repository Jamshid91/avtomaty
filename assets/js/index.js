const block3 = new Swiper('.swiper-block3', {
  loop: false,
  grabCursor: true,
      navigation: {
      nextEl: '.block3-next',
      prevEl: '.block3-prev',
    },
      breakpoints: {
        0: {
          spaceBetween: 19,
          slidesPerView: 1.3,
        },
        567: { 
          slidesPerView: 2.5,
          spaceBetween: 19,
        },
        767: {
          spaceBetween: 24,  
          slidesPerView: 3,
        },
  }
});

const block6 = new Swiper('.swiper-block6', {
  loop: false,
  grabCursor: true,
      navigation: {
      nextEl: '.block6-next',
      prevEl: '.block6-prev',
    },
      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
          grid: {
            rows: 1,
            fill: 'row'
          },
        },
        767: { 
          spaceBetween: 16,  
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row'
          },
        },
        1100: {
          spaceBetween: 30,  
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row'
          },
        },
  }
});

const block7 = new Swiper('.swiper-block7', {
  loop: false,
      navigation: {
      nextEl: '.block7-next',
      prevEl: '.block7-prev',
    },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1,
          grid: {
            rows: 1000,
            fill: 'row'
          },
        },
        768: {
          spaceBetween: 30,  
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row'
          },
        },
  }
});

const block8 = new Swiper('.swiper-block8', {
  loop: false,
      navigation: {
      nextEl: '.block8-next',
      prevEl: '.block8-prev',
    },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 20,  
          slidesPerView: 2,
        },
        1100: {
          spaceBetween: 30,  
          slidesPerView: 3,
        },
  }
});

const block9 = new Swiper('.swiper-block9', {
  loop: false,
      navigation: {
      nextEl: '.block9-next',
      prevEl: '.block9-prev',
    },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        567: {
          spaceBetween: 20,  
          slidesPerView: 2,
        },
        992: {
          spaceBetween: 30,  
          slidesPerView: 3,
        },
  }
});


window.addEventListener('scroll', () => {
  const block4 = document.querySelector('.block4 .point');
  const circle = document.querySelectorAll('.circles svg');

  const [c1, c2] = circle

  const position = block4.getBoundingClientRect().top;

  const screenPosition = window.innerHeight;

  if(screenPosition > position) {
    c1.classList.add('animC1');
    c2.classList.add('animC2');
  } else {
    c1.classList.remove('animC1');
    c2.classList.remove('animC2');
  }
});

const reviews = document.querySelectorAll('.block7 .swiper-slide'),
      loadMoreBtn = document.querySelector('.load-more');


loadMoreBtn.addEventListener('click', () => {
  reviews.forEach(review => {
    review.classList.add('d-block')
  })
})