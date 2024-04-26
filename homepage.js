// const crafts = [
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
//   {
//     imgSrc: "./public/1.png",
//     altText: "Ilkal Craft",
//     info: "Some information about Ilkal Craft",
//     name: "Ilkal",
//     detail1: "Vibrant Colours",
//     detail2: "Soft Mul Cotton",
//   },
// ];

// const slidesData = [
//   {
//     imgSrc: "./public/1.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/2.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/3.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/4.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/5.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   // Add more as needed
// ];
// const slidesData2 = [
//   {
//     imgSrc: "./public/1.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/2.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/3.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/4.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   {
//     imgSrc: "./public/5.png",
//     itemName: "Light Green hand Printed Banarsee Zari",
//     originalPrice: "₹ 1,200",
//     salePrice: "₹ 900",
//   },
//   // Add more as needed
// ];

// function createCraftSlide(craft) {
//   // Create the main slide container
//   const slide = document.createElement("div");
//   slide.className = "swiper-slide craft-swiper-slide";

//   // Create the image container
//   const craftImage = document.createElement("div");
//   craftImage.className = "craft-image";

//   // Create the flip container
//   const flipContainer = document.createElement("div");
//   flipContainer.className = "flip-container";

//   // Create the flipper
//   const flipper = document.createElement("div");
//   flipper.className = "flipper";

//   // Create the front face of the flipper
//   const front = document.createElement("div");
//   front.className = "front";
//   const img = document.createElement("img");
//   img.src = craft.imgSrc;
//   img.alt = craft.altText;
//   front.appendChild(img);

//   // Create the back face of the flipper
//   const back = document.createElement("div");
//   back.className = "back";
//   const backContent = document.createElement("div");
//   backContent.className = "back-content";
//   backContent.textContent = craft.info;
//   back.appendChild(backContent);

//   // Assemble the flipper
//   flipper.appendChild(front);
//   flipper.appendChild(back);
//   flipContainer.appendChild(flipper);
//   craftImage.appendChild(flipContainer);
//   slide.appendChild(craftImage);

//   // Create and append the craft name
//   const craftName = document.createElement("div");
//   craftName.className = "craft-name";
//   craftName.textContent = craft.name;
//   slide.appendChild(craftName);

//   return slide;
// }

// const swiperWrapper = document.querySelector(
//   ".swiper-wrapper.craft-swiper-wrapper"
// );

// Append each crafted slide to the swiper-wrapper
// crafts.forEach((craft) => {
//   swiperWrapper.appendChild(createCraftSlide(craft));
// });

// function populateSwiper0() {
//   const swiperWrapper0 = document.querySelector(
//     ".swiper-wrapper.craft-swiper-wrapper"
//   ); // Adjust selector as needed
//   swiperWrapper0.innerHTML = ""; // Clear existing slides if any

//   crafts.forEach((craft) => {
//     const slideHTML = `
//             <div class="swiper-slide craft-swiper-slide">
//                 <div class="craft-image">
//                     <div class="flip-container">
//                         <div class="flipper">
//                             <div class="front">
//                                 <img src="${craft.imgSrc}" alt="${craft.altText}">
//                             </div>
//                             <div class="back" style="background-image: url('${craft.imgSrc}'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center;">
//                             <div class="back-content-text" style="background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); width: 100%; padding: 10px; box-sizing: border-box; display: flex; flex-direction: column; align-items: flex-start;">
//                                 <div class="row">
//                                     <div class="col-2"><img src="./public/Star.svg" alt="star icon"></div>
//                                     <div class="col-8"><p class='craft-detail-title'>Unique Verified Patterns</p></div>
//                                     <div class="col-2"><img src="./public/Star.svg" alt="star icon"></div>
//                                 </div>
//                                 <div class="row">
//                                     <div class="col-2"><img src="./public/Star.svg" alt="star icon"></div>
//                                     <div class="col-8"><p class='craft-detail-desc'>${craft.detail1}</p></div>
//                                     <div class="col-2"><img src="./public/Star.svg" alt="star icon"></div>
//                                 </div>
//                                 <div class="row">
//                                     <div class="col-2"><img src="./public/Star.svg" alt="star icon"></div>
//                                     <div class="col-8"><p class='craft-detail-desc'>${craft.detail2}</p></div>
//                                     <div class="col-2"><img src="./public/Star.svg" alt="star icon"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div class="craft-name">${craft.name}</div>
//             </div>
//         `;
//     swiperWrapper0.innerHTML += slideHTML;
//   });
// }

// function populateSwiper() {
//   const swiperWrapper = document.querySelector(".shop-best-sellers-wrapper");
//   swiperWrapper.innerHTML = ""; // Clear existing slides if any

//   slidesData.forEach((slide) => {
//     const slideHTML = `
//             <div class="swiper-slide">
//                 <div class="shop-by-color-img-container">
//                     <img src="${slide.imgSrc}" alt="${slide.itemName}" />
//                 </div>
//                 <p class="shop-by-color-item-name">${slide.itemName}</p>
//                 <p class="shop-by-color-item-price">
//                     <span class="original-price">${slide.originalPrice}</span> ${slide.salePrice}
//                 </p>
//                 <div class=" icon-box-container">

//                 <div class="icon-box-svg"><img src="./public/icon1.svg" alt="Icon 1"></div>
//                 <div class="icon-box-svg"><img src="./public/icon2.svg" alt="Icon 2"></div>
//                 <div class="icon-box-svg"><img src="./public/icon3.svg" alt="Icon 3"></div>

//             </div>
//             </div>
//         `;
//     swiperWrapper.innerHTML += slideHTML;
//   });
// }
// function populateSwiper2() {
//   // Ensure to target the correct wrapper class
//   const swiperWrapper2 = document.querySelector(".shop-by-color-wrapper");
//   swiperWrapper2.innerHTML = ""; // Clear existing slides if any

//   slidesData2.forEach((slide) => {
//     const slideHTML = `
//             <div class="swiper-slide">
//                 <img src="${slide.imgSrc}" alt="Image 1" />
//                 <p class="shop-by-color-item-name">${slide.itemName}</p>
//                 <p class="shop-by-color-item-price">
//                     <span class="original-price">${slide.originalPrice}</span> ${slide.salePrice}
//                 </p>
//                 <div class=" icon-box-container">
//                 <div class="icon-box-svg"><img src="./public/icon1.svg" alt="Icon 1"></div>
//                 <div class="icon-box-svg"><img src="./public/icon2.svg" alt="Icon 2"></div>
//                 <div class="icon-box-svg"><img src="./public/icon3.svg" alt="Icon 3"></div>
//             </div>
//             </div>
//         `;
//     swiperWrapper2.innerHTML += slideHTML;
//   });
// }

// Call the function when the page loads or when needed
// document.addEventListener("DOMContentLoaded", populateSwiper0);
// document.addEventListener("DOMContentLoaded", populateSwiper);
// document.addEventListener("DOMContentLoaded", populateSwiper2);

const windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", function () {
  // var swiper0 = new Swiper(".shop-by-craft-swiper", {
  //   slidesPerView: "auto",
  //   loop: "true",
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
  var swiper2 = new Swiper(".shop-by-colorswiper", {
    slidesPerView: "auto",
    // loop: "true",
    // spaceBetween: 30,
    pagination: {
      el: ".shop-by-color-swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.75,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 3.75,
        spaceBetween: 40,
      },
      1600: {
        slidesPerView: 4.5,
        spaceBetween: 40,
      },
    },
  });
  var swiper = new Swiper(".shop-bestsellers", {
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
  });
  var swiper3 = new Swiper(".shop-by-categoryswiper", {
    slidesPerView: "auto",
    centeredSlides: "true",
    autoplay: {
      delay: 2500, // Delay in milliseconds between slides (2500ms = 2.5s)
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
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
    const shopByCraftSwiperContainer = document.querySelector("#shop-by-craft");

    const swiper4 = new Swiper(".shop_by_craft_swiper_box", {
      speed: 800,

      allowTouchMove: false,
      loop: true,
      centeredSlides: "true",
      autoplay: {
        delay: 3500, // Delay in milliseconds between slides (2500ms = 2.5s)
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
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
});

document
  .querySelector(".scroll-button.prev")
  .addEventListener("click", function () {
    document.querySelector(".flex-container").scrollBy({
      left: -300, // Adjust based on the width of your slides
      behavior: "smooth",
    });
  });

// document
//   .querySelector(".scroll-button.next")
//   .addEventListener("click", function () {
//     document.querySelector(".flex-container").scrollBy({
//       left: 300, // Adjust based on the width of your slides
//       behavior: "smooth",
//     });
//   });
