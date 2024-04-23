document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.shop-by-colorswiper', {
  
        slidesPerView: 'auto',
        loop:'true',
        // spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.shop-bestsellers', {
  
        slidesPerView: 'auto',
        loop:'true',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper2 = new Swiper('.shop-by-categoryswiper', {

        slidesPerView: 'auto',
        centeredSlides:'true',
        autoplay: {
            delay: 2500, // Delay in milliseconds between slides (2500ms = 2.5s)
            disableOnInteraction: false, // Continue autoplay after user interaction
          },
        loop: true,
        spaceBetween: 30,  // Optional: add space between slides
        pagination: {
            el: '.swiper-pagination',  // Ensure this element exists if you use pagination
            clickable: true,
        },
       
    });
    
});




document.querySelector('.scroll-button.prev').addEventListener('click', function() {
    document.querySelector('.flex-container').scrollBy({
        left: -300, // Adjust based on the width of your slides
        behavior: 'smooth'
    });
});

document.querySelector('.scroll-button.next').addEventListener('click', function() {
    document.querySelector('.flex-container').scrollBy({
        left: 300, // Adjust based on the width of your slides
        behavior: 'smooth'
    });


});

