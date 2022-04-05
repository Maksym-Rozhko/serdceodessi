const slidersInit = () => {
    const swiperWards = new Swiper('.wards .swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.wards .swiper-button-next',
          prevEl: '.wards .swiper-button-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
        }
    });

    const swiperTeam = new Swiper('.team .swiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.team .swiper-button-next',
        prevEl: '.team .swiper-button-prev',
      },
      breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1480: {
            slidesPerView: 4,
          }
      }
  });

  const swiperMedia = new Swiper('.media .swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
    }
});
};

export default slidersInit;