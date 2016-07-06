$('.pages.work').ready(function() {

    console.log("AAAAH");

    var skills_box = $('#skills-box');
    //var work_experience = $('#work-experience');
    //var $work_experience_top = $work_experience.offset().top;
    var work_freelance = $('#work-freelance');
    var work_freelance_top = work_freelance.offset().top;
    var work_hifi = $('#work-hifi');
    var work_hifi_top = work_hifi.offset().top;
    //var $skills_list = $('#skills-list');
    var all_skills = $('.show-all');


    skills_box.affix({
        offset: { top: (skills_box.position().top - ($( window ).height())/2) }
    });

    skills_box.on('affixed.bs.affix', function () {
        $(this).css('top', ($( window ).height())/2);
    });

    skills_box.on('affixed-top.bs.affix', function () {
        $(this).removeAttr('style');
    });

    function specify_skills(job) {
        all_skills.each(function() {
            if (!$( this).hasClass(job)) {
                $( this ).fadeTo("slow", 0.3);
            }
            else {
                $( this ).fadeTo("slow", 1);
            }
        });
    }

    $( window ).scroll(function() {
        var scroll = $( window ).scrollTop() + ($( this ).height())/2;

        if (scroll > work_freelance_top) {
            if (scroll > work_freelance_top && scroll < work_hifi_top) {
                specify_skills('show-freelance');
            }

            if (scroll > work_hifi_top && scroll < work_hifi_top) {
                specify_skills('show-hifi');
            }
        }
        //else {
            //$skills_box.fadeOut("slow", function() {
            //    //console.log($work_freelance_top);
            //    //console.log(scroll);
            //});
        //}
    });
});