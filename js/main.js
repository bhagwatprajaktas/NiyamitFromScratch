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

    // $('html, body').animate({scrollTop: 0}, {
    //     duration: 1500,
    //     easing: 'easeInOutExpo', // Ensure this easing function is defined
    //     complete: function() {
    //         // Animation complete callback
    //     }
    // });
    
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').collapse('toggle');
    });
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


function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById('status');
    const formData = new FormData(document.getElementById('contact-form'));

    fetch('https://script.google.com/macros/s/AKfycbzBW8jvYRI7nnkACSYFkHbcJc5uKSiMNfy0dwmdp3NFAxyzHwE5K1KlT6Mnz9t-W8INtQ/exec', {
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
