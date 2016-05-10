$('.pages.home').ready(function() {

    var $sub_image = $('#sub-image');

    var reset_background = function() {
        $sub_image.css('background-image', 'none');
    };

    $('#about-header').hover(function() {
        $sub_image.css('background-image', 'url("assets/profile.jpg")');
    }, reset_background);

    $('#work-header').hover(function() {
        $sub_image.css('background-image', 'url("assets/work.png")');
    }, reset_background);

    $('#contact-header').hover(function() {
        $sub_image.css('background-image', 'url("assets/contact.png")');
    }, reset_background);

});