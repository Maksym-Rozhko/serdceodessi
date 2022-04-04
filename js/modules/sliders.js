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
};

export default slidersInit;