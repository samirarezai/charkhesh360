$(document).ready(function () {


    $('.tour-btn-open').click(function(){
       /* $(".tour-info").fadeIn().css("display","flex");*/
        $(".tour-info").animate({
            right:'0'
        },300);
    });

    $('.tour-btn-close').click(function(){
        $(".tour-info").animate({
            right:'-320'
        },300);
    });
    $('.tour .more').hover(
        function () {
            $(this).addClass("style-tour-more");
        },function () {
            $(this).removeClass("style-tour-more");
        }
    );
});