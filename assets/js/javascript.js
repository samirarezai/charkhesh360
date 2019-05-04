$(document).ready(function(){
//============================responsive-menu-icon==========================//
$('.bars').click(function(){
    if($(this).attr('data-open') == 'open'){
        $(this).find('i').removeClass('fa-bars');
        $(this).find('i').addClass('fa-times');
        $(this).attr('data-open','close');}
    else {
        $(this).find('i').removeClass('fa-times');
        $(this).find('i').addClass('fa-bars');
        $(this).attr('data-open','open');
    }
});
//=======================scroll navbar===================//
$(window).scroll(function(){
    if($(this).scrollTop() > 130){
        $('.navigation').addClass('style-navigation');
        $('.navigation .collapse').addClass('style-navbar');
        } else {
        $('.navigation').removeClass('style-navigation');
        $('.navigation .collapse').removeClass('style-navbar');
        }
});
});