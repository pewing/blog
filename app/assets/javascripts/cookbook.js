$('.recipes.index').ready(function() {
    $('#recipes-index li a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
});
