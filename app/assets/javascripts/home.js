$('.pages.home').ready(function() {

    var $sub_image = $('#sub-image');

    $('#about-header').hover(function() {
        console.log("hi");
        $sub_image.css('background-image', 'url("assets/profile.jpg")');
    }, function() {
        $sub_image.css('background-image', 'none');
    });
});