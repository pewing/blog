$('.pages.home').ready(function() {
    $("#nothing-alert").hide();

    var $profile_hover = $('#profile-hover');
    var $work_hover = $('#work-hover');
    var $contact_hover = $('#contact-hover');

    function reset_background(img) {
        //$sub_image.css('background-image', 'none');
        console.log("hi");
        img.css('display', 'none');
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
    //
    $('#contact-header').hover(function () {
        $contact_hover.css('display', 'block');
    }, function () {
        reset_background($contact_hover)
    });

    $("#about-header").click(function showAlert() {
        $("#nothing-alert").show();
        $("#nothing-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#nothing-alert").hide();
        });
    });
    $("#work-header").click(function showAlert() {
        $("#nothing-alert").show();
        $("#nothing-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#nothing-alert").hide();
        });
    });
    $("#contact-header").click(function showAlert() {
        $("#nothing-alert").show();
        $("#nothing-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#nothing-alert").hide();
        });
    });

});