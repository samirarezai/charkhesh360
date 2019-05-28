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
    if( $(this).scrollTop() > 99){
        $('.navigation').addClass('style-navigation');
       /* $('.navigation .navbar-brand img').css('max-width','50px');*/

        } else if($(this).scrollTop() < 99 ){
        $('.navigation').removeClass('style-navigation');
     /*   $('.navigation .navbar-brand img').css('max-width','90px');*/

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
    owl.trigger('play.owl.autoplay',[900])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
//============================hover owl pics==========================//
    $(".owl-pics .item").hover(function () {
       $(this).addClass("style-more");
    },
        function () {
            $(this).removeClass("style-more");
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
    /*twitter*/
    $(".social-media-item.youtube").hover(function () {
            $(".footer-social-media").addClass("style-hover-social-media-youtube style-hover-social-media");
        },
        function () {
            $(".footer-social-media").removeClass("style-hover-social-media-youtube style-hover-social-media");
        }
    );
    /*facebook*/
    $(".social-media-item.facebook").hover(function () {
            $(".footer-social-media").addClass("style-hover-social-media-facebook style-hover-social-media");
        },
        function () {
            $(".footer-social-media").removeClass("style-hover-social-media-facebook style-hover-social-media");
        }
    );
    /*instagram*/
    $(".social-media-item.instagram").hover(function () {
            $(".footer-social-media").addClass("style-hover-social-media-instagram style-hover-social-media");
        },
        function () {
            $(".footer-social-media").removeClass("style-hover-social-media-instagram style-hover-social-media");
        }
    );
    /*telegram*/
    $(".social-media-item.telegram").hover(function () {
            $(".footer-social-media").addClass("style-hover-social-media-telegram style-hover-social-media");
        },
        function () {
            $(".footer-social-media").removeClass("style-hover-social-media-telegram style-hover-social-media");
        }
    );


//============================pop up fixed bottom==========================//
    $(".request .connect").click(function () {
            $(this).next(".form-connect").fadeIn(300);


        });
    $(".form-connect").find(".form-close").click(function () {
        $(".form-connect").fadeOut(300);
    });
/*
    $( "#box-1" ).effect( "shake", {
        times: 10,
        distance: 150
    }, 3000);*/
    //============================the end==========================//
});
