$(function() {
    // nav收缩展开
    $('.sidebar .nav-item>a').on('click', function() {
        if (!$('.sidebar').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            } else {
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.sidebar .nav-item.nav-show').removeClass('nav-show');
            }
        }
    });

    //nav-mini切换
    $('#mini').on('click', function() {
        if (!$('.sidebar').hasClass('nav-mini')) {
            $('.sidebar .nav-item.nav-show').removeClass('nav-show');
            $('.sidebar .nav-item').children('ul').removeAttr('style');
            $('.sidebar').addClass('nav-mini');
        } else {
            $('.sidebar').removeClass('nav-mini');
        }
    });
});