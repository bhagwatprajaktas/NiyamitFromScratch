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
 
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


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


let index = 0;

function showSlide(idx) {
    const slides = document.querySelectorAll('.carouselTestimonial-item');
    if (idx >= slides.length) {
        index = 0;
    } else if (idx < 0) {
        index = slides.length - 1;
    } else {
        index = idx;
    }

    const offset = -index * 100;
    document.querySelector('.carouselTestimonial-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function moveNext() {
    showSlide(index + 1);
}

function movePrev() {
    showSlide(index - 1);
}

setInterval(() => {
    moveNext();
}, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(index);
});


function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById('status');
    const formData = new FormData(document.getElementById('contact-form'));

    fetch('https://script.google.com/macros/s/AKfycbx9bontjvaT1m9UzJQiag2dEzs_SmvuXm0aUhbPHnvHivBlRbF4y01vCqprNX8grBbu3w/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(text => {
            status.textContent = 'Message sent successfully!';
            status.style.color = 'green';
            status.style.paddingTop = '20px';
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            status.textContent = 'Failed to send message. Please try again.';
            status.style.color = 'red';
            console.error('Error:', error);
        });
}
