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

//https://script.google.com/macros/s/AKfycbzVNyFGATHGxAmBrY5EYvCjRrW3pkkFI8BGr-N46LRjvgN54Hkev_N15GI5XCrsUGo2Zg/exec

function getDeviceInfo() {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language
    };

    // Check if userAgentData is available and use it if possible
    if (navigator.userAgentData) {
        deviceInfo.brands = navigator.userAgentData.brands;
        deviceInfo.mobile = navigator.userAgentData.mobile;
        deviceInfo.platform = navigator.userAgentData.platform;
    } else {
        // Fallback for browsers that do not support userAgentData
        deviceInfo.platform = navigator.platform;
        deviceInfo.appVersion = navigator.appVersion;
    }

    return deviceInfo;
}

function getLocationAndSubmit(formData) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const locationInfo = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                };

                formData.append('deviceInfo', JSON.stringify(getDeviceInfo()));
                formData.append('locationInfo', JSON.stringify(locationInfo));

                sendFormData(formData);
            },
            error => {
                console.error('Geolocation error:', error);
                sendFormData(formData);  // Send form data without location if geolocation fails
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        sendFormData(formData);  // Send form data without location if geolocation is not supported
    }
}

function sendFormData(formData) {
    const status = document.getElementById('status');

    fetch('https://script.google.com/macros/s/AKfycbz6RN19RI7N2a6GiMcdsUQu9QCH9IVz46WjGAC1BV5EB_nPpfVwwBW2eP0D9JlqVVe0bA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        status.textContent = 'Message sent successfully!';
        status.style.color = 'green';
        status.style.paddingTop = '20px';
        document.getElementById('contact-form').reset();
        isSubmitting = false;  // Reset the flag after submission
    })
    .catch(error => {
        status.textContent = 'Failed to send message. Please try again.';
        status.style.color = 'red';
        console.error('Error:', error);
        isSubmitting = false;  // Reset the flag on error
    });
}

let isSubmitting = false;

function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
        return;  // Prevent multiple submissions
    }

    isSubmitting = true;  // Set the flag to indicate form is being submitted

    const formData = new FormData(document.getElementById('contact-form'));
    getLocationAndSubmit(formData);
}

document.getElementById('contact-form').addEventListener('submit', handleSubmit);
