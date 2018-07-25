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



    /*


        if($('.portfolio_slider > div').length > 3){
            $('.portfolio_slider').slick({
                dots: false,
                arrows: true,
                slidesToShow:5,
                slidesToScroll: 1,
                responsive: [

                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 768 && $('.portfolio_slider > div').length > 1){
            $('.portfolio_slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }




        if($('.clients_slider > div').length > 3){
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


        var header_height = $('header').height();
        $('header').next().css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });


        $('article.type_review').each(function(){
            var more = $(this).find('.review_more');
            var show_more = $(this).find('.show_more span');
            $(show_more).on('click', function () {
                if($(more).is(':visible')){
                    $(more).slideUp();
                    $(show_more).text('Читать далее');
                }else {
                    $(more).slideDown();
                    $(show_more).text('Свернуть');
                }
            });
        });


        $('.h_catalog_btn').on('click', function () {
            $(this).next().slideToggle();
        });

        $('.c_nav .arrow').click(function(){
            if($(this).next().is(':visible')){
                $(this).next().slideUp();
            }else{
                $(this).next().slideDown();
            }
        });


















        $('.mobile_btn').click(function () {
            $(this).toggleClass('active');
            $('.main_menu').toggleClass('open');
            $('body').toggleClass('m_menu_active');
            return false;
        });

       $('.main_slider_desktop .slider_item, .main_slider_mobile .slider_item').each(function(){
            var desc_overflow = $(this).find('.desc_overflow');
            var desc_overflow_height = $(this).find('.desc_overflow').height();
            var main_slider_caption = $(this).find('.caption');
            $(main_slider_caption).css({
                'transform':'translateY('+desc_overflow_height+'px)',
                'transition':'.3s linear'
            });
            $(desc_overflow).css({
                'opacity':'0',
                'transition':'.3s linear'
            });
            $(this).hover(function(){
                $(main_slider_caption).css({
                    'transform':'translateY(0)'
                });
                $(desc_overflow).css({
                    'opacity':'1'
                });
            },function(){
                $(main_slider_caption).css({
                    'transform':'translateY('+desc_overflow_height+'px)'
                });
                $(desc_overflow).css({
                    'opacity':'0'
                });
            });
        });

        $('.main_slider_desktop').slick({
            dots: false,
            arrows:false,
            slidesToShow: 1,
            draggable:false,
        });

        $('.main_slider_desktop').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.main_slider_desktop .green, .main_slider_desktop .caption').animate({'opacity': '0'}, 0);
        });

        $('.main_slider_desktop').on('afterChange', function(event, slick, currentSlide){
            $('.main_slider_desktop .green, .main_slider_desktop .caption').animate({'opacity': '1'}, 300);
        });

        $('.main_slider_mobile').slick({
            dots: false,
            arrows:false,
            slidesToShow: 1,
            variableWidth:true,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:false,
                    }
                }
            ]
        });

        if($(document).width() > 1200){
            $('.main_slider_btn_prev').click(function(){
                $('.main_slider_desktop').slick('slickPrev');
            });

            $('.main_slider_btn_next').click(function(){
                $('.main_slider_desktop').slick('slickNext');
            });
        }else{
            $('.main_slider_btn_prev').click(function(){
                $('.main_slider_mobile').slick('slickPrev');
            });

            $('.main_slider_btn_next').click(function(){
                $('.main_slider_mobile').slick('slickNext');
            });
        }


        if($(document).width() >=1200){
            $('.grid_news').masonry({
                itemSelector: '.grid-item',
                columnWidth: 309,
            });
        }


        if($('.gallery_slider .item').length > 1) {
            $('.gallery_slider').slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.gallery_slider_nav'
            });
            $('.gallery_slider_nav').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.gallery_slider',
                dots: false,
                arrows: false,
                centerMode:true,
                focusOnSelect: true,
                variableWidth:true,
                responsive: [

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 7,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 5,
                        }
                    }
                ]
            });
        }



        $('.video').parent().click(function () {
            if($(this).children(".video").get(0).paused){
                $(this).children(".video").get(0).play();
                $(this).children(".playpause").fadeOut();
            }else{
                $(this).children(".video").get(0).pause();
                $(this).children(".playpause").fadeIn();
            }
        });


        $(".video_gallery_overflow").mCustomScrollbar({
            theme:"rounded-dark"
        });



        $('.article_sidebar_slider').slick({
            autoplay: false,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });


        $('.btn_slider_news_prev').click(function(){
            $('.article_sidebar_slider').slick('slickPrev');
        });

        $('.btn_slider_news_next').click(function(){
            $('.article_sidebar_slider').slick('slickNext');
        });


        if($('.article_list_fullwidth_slider > div').length > 3){
            $('.article_list_fullwidth_slider').slick({
                dots: true,
                arrows: true,
                slidesToShow:4,
                slidesToScroll: 4,
                responsive: [

                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 575 && $('.article_list_fullwidth_slider > div').length > 1){
            $('.article_list_fullwidth_slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }


        if($('.big_gallery_slider .item').length > 1) {
            $('.big_gallery_slider').slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.nav_slider'
            });
            $('.nav_slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.big_gallery_slider',
                dots: false,
                arrows: false,
                focusOnSelect: true,
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
                            slidesToShow: 3,
                        }
                    }
                ]
            });
        }


        if($(window).width() < 769){
            var opinion = $('#opinion');
            var subscribe_home = $('#subscribe_home');
            var latest_news_home = $('#latest_news_home');
            $(subscribe_home).before(opinion);
            $(subscribe_home).after(latest_news_home);
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

        $("a.anchor").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $('html,body').animate( { scrollTop: destination }, 1100 );
            return false;
        });

        */



});


