const windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", function () {
  var swiper2 = new Swiper(".shop-by-colorswiper", {
    speed: 800,
    pagination: {
      el: ".shop-by-color-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".shop_by_color_next",
      prevEl: ".shop_by_color_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.7,
        spaceBetween: 8,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1201: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 2.75,
        spaceBetween: 20,
      },

      1400: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".shop-bestsellers", {
    speed: 800,
    slidesPerView: "auto",

    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".shop-bestsellers_nav_next",
      prevEl: ".shop-bestsellers_nav_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.85,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 3.75,
        spaceBetween: 40,
      },

      1600: {
        slidesPerView: 4.75,
        spaceBetween: 40,
      },
    },
  });
  var swiper3 = new Swiper(".shop-by-categoryswiper", {
    speed: 800,

    spaceBetween: 30, // Optional: add space between slides
    pagination: {
      el: ".swiper-pagination", // Ensure this element exists if you use pagination
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 5.3,
        spaceBetween: 36,
        centeredSlides: false,
        loop: false,
      },

      1600: {
        slidesPerView: 7,
        spaceBetween: 40,
      },
    },
  });

  const shopByOccassionSwiper = new Swiper(".shop_by_occassion_swiper", {
    speed: 800,
    loop: true,
    centeredSlides: "true",

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },

      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  var reviewSwiper = new Swiper(".review-swiper", {
    slidesPerView: 1,

    navigation: {
      nextEl: ".home-reviews-nav-next",
      prevEl: ".home-reviews-nav-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
    },
  });

  //shop by craft desktop slider
  const shopByCraftSwiperContainer = document.querySelector("#shop-by-craft");

  if (windowWidth < 768) {
    const swiper5 = new Swiper(".shop_by_craft_swiper_box_mobile_Swiper", {
      speed: 800,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination", // Ensure this element exists if you use pagination
        clickable: true,
      },
    });
  } else {
    const swiper4 = new Swiper(".shop_by_craft_swiper_box", {
      speed: 800,
      loop: true,
      allowTouchMove: false,

      spaceBetween: 0, // Optional: add space between slides

      navigation: {
        nextEl: ".shop_by_craft_nav_next",
        prevEl: ".shop_by_craft_nav_prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        900: {
          slidesPerView: 3.7,
          spaceBetween: 0,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4.7,
          spaceBetween: 0,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1400: {
          slidesPerView: 5.7,
          spaceBetween: 0,
        },
        1600: {
          slidesPerView: 7,
          spaceBetween: 0,
        },
      },
      on: {
        slideChange: (params) => {
          var activeIndex = params.activeIndex;
          // Get the content of the active slide
          var activeSlideContent = params.slides[activeIndex];
          var activeSlideDataInfo = params.slides[activeIndex].dataset.info;
          shopByCraftSwiperContainer.classList.add("transition-effect"); // Add transition class
          activeSlideDataInfo
            ? (shopByCraftSwiperContainer.style.backgroundImage = `url(${activeSlideDataInfo})`)
            : null;

          setTimeout(() => {
            shopByCraftSwiperContainer.classList.remove("transition-effect");
          }, 500); // Duration of the transition in milliseconds
        },
      },
    });
  }

  // Function to pause all videos in a given slide
  function pauseVideosInSlide(slide) {
    const videos = slide.querySelectorAll("video");
    videos.forEach((video) => {
      if (!video.paused) {
        video.pause();
      }
    });
  }

  function playVideosInSlide(slide) {
    const videos = slide.querySelectorAll("video");
    videos.forEach((video) => {
      video.currentTime = 0; // Reset video to the beginning
      video.play();
    });
  }

  var shopByReelsSwiper = new Swiper(".shop_from_reels_body_swiper", {
    speed: 800,
    loop: true,
    centeredSlides: "true",
    navigation: {
      nextEl: ".shop_from_reels_nav_next",
      prevEl: ".shop_from_reels_nav_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.1,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 4.75,
        spaceBetween: 50,
      },
    },
    on: {
      slideChange: function () {
        const currentSlide = this.slides[this.activeIndex];
        playVideosInSlide(currentSlide);
      },
      slidePrevTransitionStart: function () {
        // Pause videos in the current slide
        const currentSlide = this.slides[this.previousIndex];
        pauseVideosInSlide(currentSlide);
      },
      slideNextTransitionStart: function () {
        // Pause videos in the current slide
        const currentSlide = this.slides[this.nextIndex];
        pauseVideosInSlide(currentSlide);
      },
    },
  });

  var section = document.getElementById("shop-by-craft");

  // Get all swiper slides within the section
  var slides = section.querySelectorAll(".swiper-slide");

  var imageSliderBox = section.querySelector(".shop_by_craft_slider_images");
  var currentSlide = imageSliderBox.querySelector(".swiper-slide-active");

  slides.forEach(function (slide) {
    slide.addEventListener("mouseenter", function () {
      shopByCraftSwiperContainer.style.backgroundImage = `url(${this.dataset.info})`;
    });

    slide.addEventListener("mouseleave", function () {
      shopByCraftSwiperContainer.style.backgroundImage = `url(${currentSlide.dataset.info})`;
    });
  });
});

document
  .querySelectorAll(".shop-by-color-tabsnav .nav-link")
  .forEach((navLink) => {
    navLink.addEventListener("click", function () {
      centerNavLink(this);
    });
  });

function centerNavLink(navLink) {
  if (window.innerWidth <= 1200) {
    // Check if it's mobile view
    const navContainer = navLink
      .closest(".shop-by-color-tabsnav")
      .querySelector(".nav-pills");

    if (navLink && navContainer) {
      const containerWidth = navContainer.offsetWidth;
      const navLinkWidth = navLink.offsetWidth;

      const navScrollLeft = navContainer.scrollLeft;
      const navLinkLeft = navLink.offsetLeft;

      const scrollTo =
        navLinkLeft - (containerWidth - navLinkWidth) / 2 - navScrollLeft;

      navContainer.style.transition = "scroll-left 0.3s ease-in-out";

      navContainer.scrollLeft += scrollTo;

      setTimeout(() => {
        navContainer.style.transition = "";
      }, 300);
    }
  }
}
