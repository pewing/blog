$('.pages.home').ready(function() {

    var $profile_hover = $('#profile-hover');
    var $work_hover = $('#work-hover');
    var $contact_hover = $('#contact-hover');

    function reset_background(img) {
        //$sub_image.css('background-image', 'none');
        console.log("hi");
        img.css('display', 'none');
    }

    $('#about-header').hover(function() {
        $profile_hover.css('display', 'block');
    }, function() {
        reset_background($profile_hover)
    });

    $('#work-header').hover(function() {
        $work_hover.css('display', 'block');
    }, function() {
        reset_background($work_hover)
    });
    //
    $('#contact-header').hover(function() {
        $contact_hover.css('display', 'block');
    }, function() {
        reset_background($contact_hover)
    });

});