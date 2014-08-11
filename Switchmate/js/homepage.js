$(function() {
    $('.play-video').click(function () {
        $('.video-youtube').css('display', 'block');
        $(this).hide();
        $('.video-youtube').html("<iframe width='420' height='315' src='http://www.youtube.com/embed/twyOLniei9c?autoplay=1' frameborder='0' allowfullscreen></iframe>");
    });

    $('.collapse').click(function () {
        if ($('.top-bar-section .right').hasClass('hide-collapse')) {
            $('.top-bar-section .right').removeClass('hide-collapse');
        } else {
            $('.top-bar-section .right').addClass('hide-collapse');
        }
    });
    $('.notifiednav').click(function() {
        $('.reveal-modal').css('top', '-50px');
    });
    $('#mc-embedded-subscribe-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: "Please enter a valid email address"
        }
    });
    $('#index-form-subcribe').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: "Please enter a valid email address"
        }
    });
})


