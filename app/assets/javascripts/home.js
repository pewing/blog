$('.pages.home').ready(function() {
    $('#about-header').hover(function() {
        $('#profile').css('z-index', 2);
        $('#blank').css('z-index', 1);
        console.log("HOVER");
    }, function() {
        $('#profile').css('z-index', 1);
        $('#blank').css('z-index', 2);
        console.log("UNHOVER");
    });
});