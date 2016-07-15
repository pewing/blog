$('.recipes.index').ready(function() {
    $('#recipes-index li a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#recipe-list').DataTable({
        "ajax": '../recipes.json',
        "aoColumnDefs": [
            { "width": "300px", "aTargets": [ 0 ] },
            { "width": "50px", "aTargets": [ 1 ] },
            //{ "sClass": "place-parent", "aTargets": [1] },
            { "width": "50px", "aTargets": [ 2 ] }
        ],
        "autoWidth": false,
        "order": [ [ 1 , 'asc' ], [ 0 , 'asc' ] ],
        "rowId": "recipe-list-row"
    });

});
