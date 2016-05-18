$('.pages.home').ready(function() {


    var $profile_hover = $('#profile-hover');
    var $work_hover = $('#work-hover');
    var $contact_hover = $('#contact-hover');
    var $nothing_alert = $("#nothing-alert");
    //var $logo_image = $('#logo-image');

    $nothing_alert.hide();

    function reset_background(img) {
        img.css('display', 'none');
    }

    //$(window).resize(function() {
    //    var image_height = $logo_image.height;
    //    $logo_image.css('height', 'auto');
    //    $logo_image.data('height', (image_height > 272 ? 272 : image_height));
    //});
    //
    //$logo_image.load(function() {
    //    $(this).data('height', this.height);
    //
    //    $('#contact-header').bind('mouseenter mouseleave', function(e) {
    //        $logo_image.stop().animate({
    //            height: $logo_image.data('height') * (e.type === 'mouseenter' ? 1.2 : 1)
    //        });
    //
    //        if (e.type === 'mouseleave') {
    //            $logo_image.css('height', 'auto');
    //        }
    //    });
    //});

    $('#about-header').hover(function () {
        $profile_hover.css('display', 'block');
    }, function () {
        reset_background($profile_hover)
    });

    $('#work-header').hover(function () {
        $work_hover.css('display', 'block');
    }, function () {
        reset_background($work_hover)
    });
    //
    $('#contact-header').hover(function () {
        $contact_hover.css('display', 'block');
    }, function () {
        reset_background($contact_hover);
    });

    $("#about-header").click(function showAlert() {
        $nothing_alert.show();
        $nothing_alert.fadeTo(2000, 500).slideUp(500, function () {
            $(this).hide();
        });
    });
    $("#work-header").click(function showAlert() {
        $nothing_alert.show();
        $nothing_alert.fadeTo(2000, 500).slideUp(500, function () {
            $(this).hide();
        });
    });
    $("#contact-header").click(function showAlert() {
        $nothing_alert.show();
        $nothing_alert.fadeTo(2000, 500).slideUp(500, function () {
            $(this).hide();
        });
    });

});