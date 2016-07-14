$('.pages.about').ready(function() {

    $.fn.scrollPath("getPath", {
        scrollSpeed: 80, // Default is 50
        rotationSpeed: Math.PI / 10 // Default is Math.PI / 15
    })
        .moveTo(400, 50, {name: "start"})
        .lineTo(400, 800, {name: "about-school"})
        .arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
        .lineTo(600, 1600, {name: "about-work"})
        .lineTo(1750, 1600, {name: "about-logo"})
        .arc(1800, 1000, 600, Math.PI/2, 0, true)
        // Line to 'rotations'
        .lineTo(2400, 750, {name: "about-everything-else"})
        //.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});
        .lineTo(400, 50, {name: "end"});

    $('#about').scrollPath({
        drawPath: false,
        wrapAround: true,
        scrollBar: false
    });


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
        $location_hover.text('Hamilton College').fadeIn(600);
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