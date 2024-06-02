$(document).ready(function() {
    // Contact Us button click handler
    $('#contact-button').click(function() {
        $('#contact-form-popup').addClass('popup-active');
    });

    // Close popup when clicking outside of the form
    $(document).click(function(event) {
        if (!$(event.target).closest('#contact-form, #contact-button').length) {
            $('#contact-form-popup').removeClass('popup-active');
        }
    });

    // Change project image on clicking project details
    $('.project-details').click(function() {
        var imgSrc = $(this).data('img');
        $('#project-image').attr('src', imgSrc);
    });

    // Hover effect for What We Do section
    $('#what-we-do .carousel-image-wrapper').hover(function() {
        $(this).find('.overlay').show();
    }, function() {
        $(this).find('.overlay').hide();
    });

    // Initialize carousel
    $('#what-we-do-slider').carousel({
        interval: 2000
    });

    // Update carousel indicators on slide event
    $('#what-we-do-slider').on('slide.bs.carousel', function (e) {
        var activeIndex = $(e.relatedTarget).index();
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li').eq(activeIndex).addClass('active');
    });

    // Handle form submission
    $('#contact-form').submit(function(event) {
        // Optional: Prevent default submission and handle via AJAX if needed
        event.preventDefault();
        
        // Submit form via AJAX (if needed)
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully');
                $('#contact-form-popup').removeClass('popup-active');
            },
            error: function(error) {
                alert('Error submitting form');
            }
        });
    });
});
