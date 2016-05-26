$('.pages.home').ready(function() {


    var $profile_hover = $('#profile-hover');
    var $work_hover = $('#work-hover');
    var $contact_hover = $('#contact-hover');
    var $nothing_alert = $("#nothing-alert");
    var $nyc_hover = $('#nyc-hover');
    var $stockholm_hover = $('#stockholm-hover');
    var $strasbourg_hover = $('#strasbourg-hover');
    var $geneva_hover = $('#geneva-hover');
    var $ottawa_hover = $('#ottawa-hover');
    var $hamilton_hover = $('#hamilton-hover');
    var $sf_hover = $('#sf-hover');
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

    $('#contact-header').hover(function () {
        $contact_hover.css('display', 'block');
    }, function () {
        reset_background($contact_hover);
    });

    $('#dot-nyc').hover(function () {
        $nyc_hover.css('display', 'block');
    }, function () {
        reset_background($nyc_hover);
    });

    $('#dot-sthlm').hover(function () {
        $stockholm_hover.css('display', 'block');
    }, function () {
        reset_background($stockholm_hover);
    });

    $('#dot-str').hover(function () {
        $strasbourg_hover.css('display', 'block');
    }, function () {
        reset_background($strasbourg_hover);
    });

    $('#dot-gen').hover(function () {
        $geneva_hover.css('display', 'block');
    }, function () {
        reset_background($geneva_hover);
    });

    $('#dot-ott').hover(function () {
        $ottawa_hover.css('display', 'block');
    }, function () {
        reset_background($ottawa_hover);
    });

    $('#dot-ham').hover(function () {
        $hamilton_hover.css('display', 'block');
    }, function () {
        reset_background($hamilton_hover);
    });

    $('#dot-sf').hover(function () {
        $sf_hover.css('display', 'block');
    }, function () {
        reset_background($sf_hover);
    });

    $("#work-header").click(function showAlert() {
        $nothing_alert.show();
        $nothing_alert.fadeTo(2000, 500).slideUp(500, function () {
            $(this).hide();
        });
    });
});