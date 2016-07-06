$('.pages.work').ready(function() {
    $skills_box = $('#skills-box');
    $work_experience = $('#work-experience');
    $work_experience_top = $work_experience.offset().top;
    $work_freelance = $('#work-freelance');
    $work_freelance_top = $work_freelance.offset().top;
    $work_hifi = $('#work-hifi');
    $work_hifi_top = $work_hifi.offset().top;
    $skills_list = $('#skills-list');
    $all_skills = $('.show-all');

    //$skills_box.fadeOut();

    $( window ).click(function(e) {
        console.log(e.pageY);
        console.log($(this).height());
    });


    $skills_box.affix({
        //offset: { top: $work_experience_top - $( window ).height()}
        offset: { top: ($( window ).height())/2 }
    });

    function specify_skills(job) {
        $all_skills.each(function() {
            if (!$( this).hasClass(job)) {
                $(this).fadeTo("slow", 0.3);
            }
            else {
                $(this).fadeTo("slow", 1);
            }
        });
    }

    $( window ).scroll(function() {
        //$skills_box.removeClass('hidden');
        var scroll = $( this ).scrollTop() + ($( this).height())/2;

        //console.log(scroll, $work_freelance_top, $work_experience_top, $( this).height());

        if (scroll > $work_freelance_top) {
            //$skills_box.fadeIn("slow");
            if (scroll > $work_freelance_top && scroll < $work_hifi_top) {
                specify_skills('show-freelance');
            }

            if (scroll > $work_hifi_top && scroll < $work_hifi_top) {
                specify_skills('show-hifi');
            }
            //$skills_box.fadeIn("fast", function() {
            //    console.log($work_experience_top);
            //    console.log(scroll);
            //});
        }
        else {
            //$skills_box.fadeOut("slow", function() {
            //    //console.log($work_freelance_top);
            //    //console.log(scroll);
            //});
        }


    });


});