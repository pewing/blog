$('.pages.work').ready(function() {

    var $skills_box = $('#skills-box');
    var skills_box_top = $skills_box.position().top;
    //var work_experience = $('#work-experience');
    //var $work_experience_top = $work_experience.offset().top;
    var $work_freelance = $('#work-freelance');
    var work_freelance_top = $work_freelance.offset().top;
    var work_freelance_bottom = work_freelance_top + $work_freelance.height();
    var $work_hifi= $('#work-hifi');
    var work_hifi_top = $work_hifi.offset().top;
    var work_hifi_bottom = work_hifi_top + $work_hifi.height();
    var $work_hamilton= $('#work-hamilton');
    var work_hamilton_top = $work_hamilton.offset().top;
    var work_hamilton_bottom = work_hamilton_top + $work_hamilton.height();
    //var $skills_list = $('#skills-list');
    var $all_skills = $('.show-all');
    var $window = $( window );
    var window_height = $window.height();

    $skills_box.affix({
        offset: {
            top: (skills_box_top - (window_height)*0.4),
            bottom: $( document).height() - work_hamilton_bottom - 80
        }
    });

    $skills_box.on('affixed.bs.affix ', function() {
        $skills_box.addClass('put-middle');
        $skills_box.removeAttr('style');
    });

    $skills_box.on('affixed-top.bs.affix affixed-bottom.bs.affix', function() {
        $skills_box.removeClass('put-middle');
    });

    $('body').scrollspy({
        target: '#skills-box',
        offset: window_height*0.5
    });
});
