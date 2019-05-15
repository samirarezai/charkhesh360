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
    if( $(this).scrollTop() > 99 & $(window).width() > 992 ){
        $('.navigation').fadeIn().addClass('style-navigation');
        $('.navigation .navbar-brand img').css('max-width','50px');

        } else if($(this).scrollTop() < 99 & $(window).width() > 992){
        $('.navigation').removeClass('style-navigation');
        $('.navigation .navbar-brand img').css('max-width','90px');

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
//============================hover sample card button==========================//
    $(".sample-card .more").hover(function () {
            $(this).addClass("style-sample-card-more");
        },
        function () {
            $(this).removeClass("style-sample-card-more");
        }
    );
    //============================hover price card ==========================//
    $(".card-pricing").hover(function () {
            $(this).addClass("style-hover-card-pricing");
        },
        function () {
            $(this).removeClass("style-hover-card-pricing");
        }
    );
//============================hover sample card image==========================//

    $(".sample-card .image").hover(function () {
            $(this).addClass("style-hover-sample-card-image");
        },
        function () {
            $(this).removeClass("style-hover-sample-card-image");
        }
        );
    //============================hover link of footer or social media ==========================//

    $(".social-media-item").hover(function () {
            $(this).addClass("style-hover-social-media-item");
        },
        function () {
            $(this).removeClass("style-hover-social-media-item");
        }
    );

    //============================the end==========================//
});
