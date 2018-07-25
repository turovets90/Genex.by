$(document).ready(function(){


    $('.mobile_btn').click(function () {
        $(this).toggleClass('active');
        $('.main_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');
        return false;
    });


    $('.main_superslider').slick({
        dots: false,
        arrows:false,
        slidesToShow: 1,
        fade:true,
    });


    $('.slider_btn_group .slide_prev').click(function(){
        $('.main_superslider').slick('slickPrev');
    });

    $('.slider_btn_group .slide_next').click(function(){
        $('.main_superslider').slick('slickNext');
    });


    var header_height = $('header').height();
    $('header').next().css({'margin-top': header_height+'px'});
    $(window).scroll(function(){
        if ($(this).scrollTop() > header_height) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });


    if($('.clients_slider > div').length > 4){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow:4,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.clients_slider > div').length > 1){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrolltop').fadeIn();
            } else {
                $('.scrolltop').fadeOut();
            }
        });
        $('.scrolltop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });





});


