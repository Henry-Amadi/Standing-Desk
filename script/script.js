//adding a funtion to show and close navbar for responsive view on click
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
//close function
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

//adding a funtion to show and close navbar for responsive view on click
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}
//close function
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

//scroll controller
window.onscroll = () => {
    navbar.classList.remove('active');
    if(window.scrollY > 0 ){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 0 ){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}




//initiliazing swipper for hom page
var swiper = new Swiper('.home-slider', {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//initializing swipper for shop products
var swiper = new Swiper('.product-slider', {
    loop:true,
    grabCursor:true,
    loopFillGroupWithBlank: true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //swiper responsive-breakpoint slider initialization
    breakpoints: {
         0: {
          slidesPerView: 1,
          },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
});
 

//initializing swipper for review
var swiper = new Swiper('.review-slider', {
  loop:true,
  grabCursor:true,
  spaceBetween:20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //swiper responsive-breakpoint slider initialization
  breakpoints: {
       0: {
        slidesPerView: 1,
        },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
     
    },
});



//initializing swipper for blog
var swiper = new Swiper('.blogs-slider', {
  loop:true,
  grabCursor:true,
  spaceBetween:7,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //swiper responsive-breakpoint slider initialization
  breakpoints: {
       0: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
     
    },
});


//initializing swipper for partners
var swiper = new Swiper('.clients-slider', {
  loop: true,
  grabCursor:true,
  spaceBetween:10,
  //swiper responsive-breakpoint slider initialization
  breakpoints: {
       0: {
        slidesPerView: 1,
        },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      
    },
});


