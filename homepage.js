const windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", function () {
  var swiper2 = new Swiper(".shop-by-colorswiper", {
    // loop: "true",
    // spaceBetween: 30,
    speed: 800,
    // autoplay: {
    //   delay: 3500, // Delay in milliseconds between slides (2500ms = 2.5s)
    //   disableOnInteraction: false, // Continue autoplay after user interaction
    // },
    pagination: {
      el: ".shop-by-color-swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  var swiper = new Swiper(".shop-bestsellers", {
    speed: 800,
    slidesPerView: "auto",
    // loop: "true",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      1200: {
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
    slidesPerView: "auto",
    centeredSlides: "true",
    // autoplay: {
    //   delay: 2500, // Delay in milliseconds between slides (2500ms = 2.5s)
    //   disableOnInteraction: false, // Continue autoplay after user interaction
    // },
    loop: true,
    spaceBetween: 30, // Optional: add space between slides
    pagination: {
      el: ".swiper-pagination", // Ensure this element exists if you use pagination
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 90,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      //   1400: {
      //     slidesPerView: 3.75,
      //     spaceBetween: 40,
      //   },
      1600: {
        slidesPerView: 7,
        spaceBetween: 40,
      },
    },
  });

  //shop by craft desktop slider
  const shopByCraftSwiperContainer = document.querySelector("#shop-by-craft");

  if (windowWidth < 768) {
    const swiper5 = new Swiper(".shop_by_craft_swiper_box_mobile_Swiper", {
      speed: 800,
      slidesPerView: 1,

      // allowTouchMove: false,
      loop: true,
      // centeredSlides: "true",
      autoplay: {
        delay: 3500, // Delay in milliseconds between slides (2500ms = 2.5s)
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      // loop: true,
      // spaceBetween: 0, // Optional: add space between slides
      pagination: {
        el: ".swiper-pagination", // Ensure this element exists if you use pagination
        clickable: true,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
  } else {
    const swiper4 = new Swiper(".shop_by_craft_swiper_box", {
      speed: 800,

      allowTouchMove: false,
      // autoplay: {
      //   delay: 3500, // Delay in milliseconds between slides (2500ms = 2.5s)
      //   disableOnInteraction: false, // Continue autoplay after user interaction
      // },
      // loop: true,
      spaceBetween: 0, // Optional: add space between slides
      // pagination: {
      //   el: ".swiper-pagination", // Ensure this element exists if you use pagination
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
        // when window width is >= 640px
        1200: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        //   1400: {
        //     slidesPerView: 3.75,
        //     spaceBetween: 40,
        //   },
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
          console.log(
            activeSlideContent,
            activeSlideDataInfo,
            shopByCraftSwiperContainer.style.backgroundImage,
            "swiper initialized"
          );
        },
      },
    });
  }
  const shopByOccassionSwiper = new Swiper(".shop_by_occassion_swiper", {
    speed: 800,
    loop: true,
    centeredSlides: "true",
    // autoplay: {
    //   delay: 3500, // Delay in milliseconds between slides (2500ms = 2.5s)
    //   disableOnInteraction: false, // Continue autoplay after user interaction
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 30,
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

  const shopByReelsSwiper = new Swiper(".shop_from_reels_body_swiper", {
    speed: 800,
    loop: true,
    centeredSlides: "true",
    autoplay: {
      delay: 3500, // Delay in milliseconds between slides (2500ms = 2.5s)
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1.75,
        spaceBetween: 0,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.75,
        spaceBetween: 50,
      },
      1600: {
        slidesPerView: 4.75,
        spaceBetween: 50,
      },
    },
  });

  //  shop bt craft hover bg change

  var section = document.getElementById("shop-by-craft");

  // Get all swiper slides within the section
  var slides = section.querySelectorAll(".swiper-slide");

  var imageSliderBox = section.querySelector(".shop_by_craft_slider_images");
  var currentSlide = imageSliderBox.querySelector(".swiper-slide-active");
  // console.log(currentSlide, "currentslide")

  // Loop through each slide
  slides.forEach(function (slide) {
    // Add mouseenter event listener
    slide.addEventListener("mouseenter", function () {
      // console.log("Mouse entered:", this.dataset.info);
      shopByCraftSwiperContainer.style.backgroundImage = `url(${this.dataset.info})`;
      // Add any other actions you want to perform when mouse enters the slide
    });

    // Add mouseleave event listener
    slide.addEventListener("mouseleave", function () {
      // console.log("Mouse left:", this.dataset.info);
      shopByCraftSwiperContainer.style.backgroundImage = `url(${currentSlide.dataset.info})`;
      // Add any other actions you want to perform when mouse leaves the slide
    });
  });

  var reviewSwiper = new Swiper(".review-swiper", {
    slidesPerView: 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: '.home-category__pagination'
    // },
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
});
