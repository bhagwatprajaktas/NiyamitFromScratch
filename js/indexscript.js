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



 // Pause video when modal is hidden
 document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
});