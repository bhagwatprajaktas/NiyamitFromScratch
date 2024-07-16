(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    // new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    // Experience
    // $('.experience').waypoint(function () {
    //     $('.progress .progress-bar').each(function () {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // // Modal Video
    // var $videoSrc;
    // $('.btn-play').click(function () {
    //     $videoSrc = $(this).data("src");
    // });
    // console.log($videoSrc);
    // $('#videoModal').on('shown.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    // })
    // $('#videoModal').on('hide.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc);
    // })


    // Testimonial carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     items: 1,
    //     loop: true,
    //     dots: false,
    //     nav: true,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ]
    // });
    
})(jQuery);

function showCard(cardId) {
    var card = document.getElementById(cardId);
    var overlay = document.getElementById('overlay');
    card.style.display = 'block';
    overlay.style.display = 'block';
}

function hideCard() {
    var cards = document.querySelectorAll('.card');
    var overlay = document.getElementById('overlay');
    cards.forEach(function(card) {
        card.style.display = 'none';
    });
    overlay.style.display = 'none';
}


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item1');
const totalSlides = slides.length;

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner1');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function autoScroll() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', autoScroll);