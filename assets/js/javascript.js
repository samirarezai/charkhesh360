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
    var y = $(this).scrollTop();
    if($(this).scrollTop() > 99 & $(window).width() > 992){
        $('.navigation').fadeIn().addClass('style-navigation');
        $('.navigation .collapse').addClass('style-navbar');
        } else {
        $('.navigation').removeClass('style-navigation');
        $('.navigation .collapse').removeClass('style-navbar');
        }
});

//============================owl carousel==========================//

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    autoplay:true,
    slideSpeed : 700,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1160:{
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
//============================hover owl pics==========================//
    $(".owl-pics .item").hover(function () {
       $(this).find(".customer").css("transform","scale(1.04,1.04)");
    },
        function () {
            $(this).find(".customer").css("transform","scale(1,1)");
    }
    );
//============================hover owl pics==========================//


      /*  $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 99) {
                $('.navigation').fadeIn().css({"position":"fixed","top":"0"});
            } else {
                $('.navigation').css({"position" : "static"});
            }
        });*/
    //============================the end==========================//
});
