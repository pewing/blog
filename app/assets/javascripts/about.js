$('.pages.about').ready(function() {

    var $location_hover = $('#hover-location');

    var reset_location = function() {
        $location_hover.fadeOut(1000);
    };

    $('#dot-sf').hover(function() {
        $location_hover.text('San Francisco').fadeIn(600);
    }, reset_location);

    $('#dot-ott').hover(function() {
        $location_hover.text('Ottawa').fadeIn(600);
    }, reset_location);
    $('#dot-ham').hover(function() {
        $location_hover.text('Hamilton').fadeIn(600);
    }, reset_location);
    $('#dot-nyc').hover(function() {
        $location_hover.text('New York City').fadeIn(600);
    }, reset_location);
    $('#dot-sthlm').hover(function() {
        $location_hover.text('Stockholm').fadeIn(600);
    }, reset_location);
    $('#dot-str').hover(function() {
        $location_hover.text('Strasbourg').fadeIn(600);
    }, reset_location);
    $('#dot-gen').hover(function() {
        $location_hover.text('Geneva').fadeIn(600);
    }, reset_location);
});