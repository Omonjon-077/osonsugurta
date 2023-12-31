/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");
});

/*=============== HEADER FIXED ===============*/
if ($("#myHeader").length) {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}
;

/*=============== SWIPER | HOW WORKS ===============*/
if ($(".howWorks").length) {
    let swiperTestimonial = new Swiper(".howWorks", {
        grabCursor: true,
        loop: true,
        autoplay: true,
        effect: '',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,
    });
}
;

/*=============== SWIPER | PARTNERS ===============*/
if ($(".partnerSwiper").length) {
    let swiper = new Swiper(".partnerSwiper", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: true,
        breakpoints: {
            // when window width is >= 280px
            280: {
                slidesPerView: 1,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 2,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1440px
            1440: {
                slidesPerView: 6,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
        }
    });
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);



document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.progress-bar');
    const numSteps = progressBar.children.length;
    progressBar.style.setProperty('--num-steps', numSteps);
});