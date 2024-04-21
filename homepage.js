document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.section3swiper', {
        observer: true,
    observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
const slider = document.querySelector('.flex-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('active');  // Optional: for cursor styling
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; // Adjust this value as needed
    slider.scrollLeft = scrollLeft - walk;
});
