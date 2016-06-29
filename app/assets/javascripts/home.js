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
    var $navbar_location = $('#navbar-location');
    var $navbar_pages = $('#navbar-pages');
    var index = -1;
    var location_string = '';


    var interval = null;

    $nothing_alert.hide();

    function reset_background(img) {
        clearInterval(interval);
        $navbar_location.text('');
        location_string = '';
        index = -1;
        img.css('display', 'none');
        $navbar_location.fadeOut(150);
        $navbar_pages.fadeIn(150);
    }

    function rolling_text() {
        if (index >= 0) {
            $navbar_location.text(location_string[index] + $navbar_location.text());
            index--;
        }
        else {
            clearInterval(interval);
        }
    }

    function add_location_text(str) {
        $navbar_location.fadeIn(150);
        $navbar_pages.fadeOut(150, function () {
            clearInterval(interval);
            $navbar_location.text('');
            location_string = str;
            index = str.length - 1;
            interval = setInterval(rolling_text, 25);
        });
    }

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
        add_location_text("new york city");
    }, function () {
        reset_background($nyc_hover);
    });

    $('#dot-sthlm').hover(function () {
        $stockholm_hover.css('display', 'block');
        add_location_text("stockholm");
    }, function () {
        reset_background($stockholm_hover);
    });

    $('#dot-str').hover(function () {
        $strasbourg_hover.css('display', 'block');
        add_location_text("strasbourg");
    }, function () {
        reset_background($strasbourg_hover);
    });

    $('#dot-gen').hover(function () {
        $geneva_hover.css('display', 'block');
        add_location_text("geneva");
    }, function () {
        reset_background($geneva_hover);
    });

    $('#dot-ott').hover(function () {
        $ottawa_hover.css('display', 'block');
        add_location_text("ottawa");
    }, function () {
        reset_background($ottawa_hover);
    });

    $('#dot-ham').hover(function () {
        $hamilton_hover.css('display', 'block');
        add_location_text("hamilton college");
    }, function () {
        reset_background($hamilton_hover);
    });

    $('#dot-sf').hover(function () {
        $sf_hover.css('display', 'block');
        add_location_text("san francisco");
    }, function () {
        reset_background($sf_hover);
    });
});


// For later work

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