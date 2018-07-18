$(document).ready(function () {
    // 导航菜单切换
    $('.containor').on('mouseenter', '.nav_left',function () {
        $(".nav_right").removeClass('hide');
    }).on('mouseleave', function () {
        $(".nav_right").addClass('hide');
        $(".sub").addClass('hide');
    }).on('mouseenter', 'li', function (e) {
        var li_data = $(this).attr('data-id');
        $(".sub").addClass('hide');
        $('.sub[data-id="' + li_data + '"]').removeClass('hide');
    })

});