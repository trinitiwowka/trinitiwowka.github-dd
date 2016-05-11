var linearDiagram = [72, 57, 56, 47, 45, 43, 41, 29]; // значение линейной диаграммы
var tableDiagram = [46, 15, 7, 26, 5]; // значение табличной диаграммы
// первое число значение, второе скорость
var diagromBlock1 = [45, 30]; // 1 радиальная диаграмма
var diagromBlock21 = [41, 30]; // 2 радиальная диаграмма
var diagromBlock22 = [60, 30]; // 3 радиальная диаграмма
var diagromBlock23 = [73, 30]; // 4 радиальная диаграмма
var slider3BlockSlideZize;
var tecSilde = 0;
var popupVideoActive = false;
$(function() {
    // анимация главного слайдера настройки
    navbarLang();
    function navbarLang() {
        var ul = $("ul.top-lang").first(),
            liHeight = ul.find("li").first().outerHeight();
        
        ul.height(liHeight);
        
        ul.click(function(e) {
            e.stopPropagation();
            showHidden();
        });
        
        ul.find("a").click(function(e) {
            e.stopPropagation();
            showHidden();
        });
        
        $(window).click(function() {
            if(ul.css("height") != liHeight+"px") {
                ul.css("height", liHeight + "px");
            }
        });
        
        function showHidden() {
            if(ul.css("height") == liHeight+"px") {
                ul.css("height", "auto");
            } else {
                ul.css("height", liHeight + "px");
            }
        }
    }
    
    navbarTop();
    function navbarTop() {
        var navEl = $("header.main .top-nav"),
            navBTM = $("header.main .responsive-nav-btn").hide(),
            w = 1200;
        
        if($(window).width() <= w) {
            navEl.addClass("top-nav-responsive");
            navBTM.show();
        }
        
        positionTopNav();
        
        $(window).resize(function() {
            if($(window).width() <= w) {
                if(!navEl.hasClass("top-nav-responsive")){
                    navEl.addClass("top-nav-responsive");
                    navBTM.show();
                    $(".top-nav-responsive").hide();
                }
            } else {
                if(navEl.hasClass("top-nav-responsive")) {
                    navEl.removeClass("top-nav-responsive");
                    navBTM.hide();
                    navEl.show();
                }
            }
            positionTopNav();
        });
        
        navBTM.click(function(e) {
            e.stopPropagation();
           if($("header.main .top-nav-responsive").is(':visible')) {
               $("header.main .top-nav-responsive").slideUp(300);
           } else {
               $("header.main .top-nav-responsive").slideDown(300);
           }
        });
        
        function positionTopNav() {
            if(navEl.hasClass("top-nav-responsive")) {
                $("header.main .top-nav-responsive").css({
                   "top": $("header.main").outerHeight()+"px" 
                });
            }
        }
        
        $(window).click(function() {
           if($("header.main .top-nav-responsive").is(':visible')) {
               $("header.main .top-nav-responsive").slideUp(300);
           }
        });
    }
    
    textSlider1();
    function textSlider1() {
        var ul = $(".bottom-content-video .right-block .text-left-block ul"),
            li = ul.find("li"),
            heightLi = li.first().outerHeight(),
            liLength = li.length,
            i = 0;
            var timer = setInterval(function() {
                    li.eq(i++).fadeOut(300, function() {
                        if (i >= liLength) i = 0;
                        li.eq(i).fadeIn(300);});
            }, 2000);
    }
    // слайдер block-content-6
    var slides =  $(".block-content-6 ul.images li"),
        controlSliders = $(".block-content-6 ul.control li"),
        activeNumber = 0,
        lengthSlider = $(".block-content-6 ul.control li").length;
    
    
    $(".block-content-6 .btn-left").click(function() {
        if(activeNumber) {
            controlSliders.removeClass("active");
            controlSliders.eq(activeNumber-1).addClass("active");
            telSliderGo();
        } else {
            controlSliders.removeClass("active");
            controlSliders.eq(lengthSlider-1).addClass("active");
            telSliderGo();
        }
    });
    
    $(".block-content-6 .btn-right").click(function(e) {
        e.stopPropagation();
        if(activeNumber < lengthSlider-1) {
            controlSliders.removeClass("active");
            controlSliders.eq(activeNumber+1).addClass("active");
            telSliderGo();
        } else {
            controlSliders.removeClass("active");
            controlSliders.eq(0).addClass("active");
            telSliderGo();
        }
    });
    
    telSliderGo();
    controlSliders.click(function() {
        controlSliders.removeClass("active");
        $(this).addClass("active");
        telSliderGo();
    });
    function telSliderGo() {
        controlSliders.each(function(i, e) {
            if($(this).hasClass("active")) {
                activeNumber = i;
                slides.not(slides.eq(i)).fadeOut(300);
                slides.eq(i).fadeIn(300);
                return false;
            }
        });
    }
    
    var timerSliderTel;
    
    timerSliderTelGo();
    
    function timerSliderTelGo() {
        timerSliderTel = setInterval(function() {
        $(".block-content-6 .btn-right").trigger("click");
        }, 5000);
    }
    $(".block-content-6 .btn-left, .block-content-6 .btn-right, .block-content-6 .btn-right, .block-content-6 .slider-bg ul.control").hover(function() {
        clearInterval(timerSliderTel);
    }, function() {
        timerSliderTelGo();
    });
    // .block-content-3 .content выравниваем по высоте
    bl3Normolize();

    function bl3Normolize() {
        var el = $(".block-content-3 .swiper-slide"),
            maxHeight = 0;
        el.each(function() {
            if($(this).outerHeight() > maxHeight)
                maxHeight = $(this).outerHeight();
        });
        el.css("height", maxHeight + 30 + "px");
    }

    // blog hover

    $(".block-content-7 .wrap-blog").hover(function() {
        $(this).find("a.read-more").css("zIndex", "300");
    }, function() {
        $(this).find("img.top").stop().animate({left: "0"}, 0);
        $(this).find("p.text").stop().animate({left: "0"}, 0);
        $(this).find("img.bottom").stop().animate({left: "0"}, 500);
        $(this).find("a").css("zIndex", "1");
    });
    
    $(".block-content-7 .wrap-blog").click(function() {
        $(this).find("img.top").stop().animate({left: "-100%"}, 0);
        $(this).find("p.text").stop().animate({left: "-100%"}, 0);
        $(this).find("img.bottom").stop().animate({left: "-100%"}, 500);
    });
    
//     timer
    timer(2016, 5, 18, 2, 0, 0);
    var setDate = {
        y : 2016,
        mo : 5,
        h : 18,
        mi : 2,
        s : 0,
        ms : 0
    };
    timer(setDate);
    setInterval(function() {timer(setDate)}, 1000);
    function timer(setDate) {
        
        var thisDate = new Date(),
            endDate = new Date(setDate.y, setDate.mo, setDate.h, setDate.mi, setDate.s, setDate.ms),
            ms = endDate - thisDate,
            date = ms/1000/60/60/24,
            hours,
            minutes,
            seconds,
            milSec,
            temp;
        
        temp = date - Math.floor(date);
        date = Math.floor(date);
        hours = temp*24;
        temp = hours - Math.floor(hours);
        hours = Math.floor(hours);
        minutes = temp*60;
        temp = minutes - Math.floor(minutes);
        minutes = Math.floor(minutes);
        seconds = temp*60;
        temp = seconds - Math.floor(seconds);
        seconds = Math.floor(seconds);
        $(".timer-block .day .number").text(date);
        $(".timer-block .houres .number").text(hours);
        $(".timer-block .minutes .number").text(minutes);
        $(".timer-block .seconds .number").text(seconds);
    }
    
    // кнопка вверх
    $("img.upScroll").click(function() {
        $("body,html").animate({"scrollTop": 0}, 500); 
    });
    
    $(window).scroll(function() {
        
        if($(this).scrollTop() > 300) {
            $("img.upScroll").fadeIn(500);
        } else {
            $("img.upScroll").fadeOut(500);
        }
        
    });
    $(window).trigger("scroll");
     
    
    var blogLg = $(".blog-slider").clone(true);
    blogLg.removeClass("blog-slider").addClass("lg-items-blog").hide();
    $(".blog-slider").before(blogLg);
    $(".blog-slider").bxSlider();
    
    normolizeSliderBlog();
    
    $(window).resize(function() {
        normolizeSliderBlog();
    });
    
    function normolizeSliderBlog() {
        if($(window).width() > 950) {
            
            if(!$(".blog-slider").closest(".bx-wrapper").filter(":hidden").length) {
                $(".blog-slider").closest(".bx-wrapper").hide();
                $(".lg-items-blog").show();
            }

        } else {
            
            if($(".blog-slider").closest(".bx-wrapper").filter(":hidden").length) {
                $(".blog-slider").closest(".bx-wrapper").show();
                $(".lg-items-blog").hide();
            }
            
        }
    }

    
    // плавный скролл по страницы
    $("a[href*=#]").click(function(e) {
        e.preventDefault();
        var topEl = $(this).attr("href");
        console.log(topEl);
        $("html, body").animate({scrollTop: $(topEl).offset().top - 103}, 500 );
        return false;
    });
    
    // выравниваем в 10 блоке все колонки по высоте
    lastBlock();
    function lastBlock() {
        var maxHeight = 0;
        var cols = $(".block-content-10 .col");
        cols.each(function() {
            if($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        cols.each(function() {
            $(this).height(maxHeight);
            
        });
    }

    
    if (window.innerWidth > 800) {  //  PC video
        // видео в 1 блоке
        var controls2 = {
            video: $("#video-bl-1"),
            playpause: $("#block-1-btn-video")
        };
                    
        var video2 = controls2.video[0];
                   
        controls2.playpause.click(function(){
            if (video2.paused) {
                $("#video-decor, .content-video-description").addClass("op0-anim");
                $(".bottom-content-video .left-block").addClass("hide-left-anim");
                $(".bottom-content-video .right-block").addClass("hide-right-anim");
                video2.play();
                $("#block-1-btn-video").addClass("play");
            } else {
                video2.pause();
                $("#block-1-btn-video").removeClass("play");
                $("#video-decor, .content-video-description").removeClass("op0-anim");
                $(".bottom-content-video .left-block").removeClass("hide-left-anim");
                $(".bottom-content-video .right-block").removeClass("hide-right-anim");
            }
        });
        // видео в 8 блоке

        var controls = {
            video: $("#block-8-video"),
            playpause: $("#video-control")
        };
                    
        var video = controls.video[0];
                   
        controls.playpause.click(function(){
            if (video.paused) {
                video.play();
                $(".video-control").addClass("play");
            } else {
                video.pause();
                $(".video-control").removeClass("play");
            }
        }); 

    } else {    //  mobile popup video

        var controls = {
            playpause: $(".vc")
        };
        
        var video = $('#popup-video')[0];
                   
        controls.playpause.click(function(){
            if (video.paused) {
                popupVideoActive = true;
                $('.popup-video-wrapper').css('display', 'block');
                $(".popup-video-control").addClass("play");
                if (window.innerWidth / window.innerHeight < 16 / 9) {
                    var midoffset = (window.innerHeight - $('.popup-video-wrapper video').height()) / 2;
                    $('.popup-video-wrapper video').css('top', midoffset + 'px');
                } else {
                    $('.popup-video-wrapper video').css('top', '0');
                }
                video.play();
                $('body').css('overflow', 'hidden');
            } else {
                video.pause();
                $('body').css('overflow', 'scroll');
                $('.popup-video-wrapper').css('display', 'none');
                $(".popup-video-control").removeClass("play");
                popupVideoActive = false;
            }
        });
    }
        
    
    
    // blog pop-ups

    $(".block-content-7 .content-blog a").click(function(e) {
        e.preventDefault();
        
        $(".popup-blog").css("display", "table");
        
        $(".popup-blog .text-block").filter($(this).attr("data-red-more")).css("display", "table-cell");
        
        $(".popup-blog .text-block").not($(this).attr("data-red-more")).css("display", "none");

        return false;
    });
    
    $(".popup-blog .close-popup, .popup-blog").click(function() {
        $(".popup-blog").hide();
    });
    
    $(".popup-blog .text").click(function(e) {
        e.stopPropagation();
    });
    
    // фиксированные элементы
    $(window).scroll(function() {
        if($(window).scrollTop() - 100 > $(".video-background-block").height()) {
            $(".download-fixed").stop().fadeIn(500);
        } else {
            $(".download-fixed").stop().fadeOut(500);
        }
    });
    
    // проверка формы
    $(".block-content-10 form").submit(function() {
        var error;
        if(!/\w/.test($("#go-mes").find("#name").val())) {
            writeMes("#name", "Ошибка! Вы не написали Ваше имя");
            return false;
        } else if(!/.+@.+\..+/.test($("#go-mes").find("#email").val())) {
            writeMes("#email", "Ошибка! Не верный email");
            return false;
        } else if(!/\w/.test($("#go-mes").find("#landing-mes").val())) {
            writeMes("#landing-mes", "Ошибка! Поле не содержит текста!");
            return false;
    }

        function writeMes(el, mes) {
            var position = $(el).position().top;
            mesElement = $(".block-content-10 .error-form");
            mesHeight = mesElement.outerHeight();
            $(".block-content-10 .error-form").css({
                "display": "block",
                top: position - mesHeight - 20 + "px"
            }).text(mes);
            $(window).resize(function() {
                $(".block-content-10 .error-form").css({
                    top: position - mesHeight - 20 + "px"
                });
            });
        }
    
    });
    $(".block-content-10 input, .block-content-10 textarea").click(function() {
        $(".block-content-10 .error-form").hide();
    });
    
    
    
    // анимация слайдера 3 блока
    /*
    var minSlide,
        maxSlide;
    
    addEventSlider();
    $(window).resize(function() {
        tecSilde = 0;
        addEventSlider();
    });
    function addEventSlider() {
        $(".block-content-3 .bx-next").click(function() {
            if(!$(".block-content-3 *").filter(":animated").length) {
//                tecSilde++;
//                minSlide = (tecSilde) * slider3BlockSlideZize;
//                maxSlide = minSlide + slider3BlockSlideZize - 1;
                minSlide = 0;
                maxSlide = 5;
                animateSliderBlock3();
            }
        });
        $(".block-content-3 .bx-prev").click(function() {
            if(!$(".block-content-3 *").filter(":animated").length) {
//                tecSilde--;
//                minSlide = (tecSilde) * slider3BlockSlideZize;
//                maxSlide = minSlide + slider3BlockSlideZize - 1;
                minSlide = 0;
                maxSlide = 5;
                animateSliderBlock3();
            }
        });
        
    }*/
    
    
    minSlide = 0;
    maxSlide = 5;
    //animateSliderBlock3();
    function animateSliderBlock3() {
        for(var i=minSlide; i<=maxSlide; i++ ) {
            if(i==0) {
                textAnimation($(".block-content-3 .c1s1 span"), 52, 20);
                textAnimation($(".circle-diagram1 p.elem-text span"), diagromBlock1[0], diagromBlock1[1]);
                animateCircleDiagram(diagromBlock1[0], diagromBlock1[1], $(".circle-diagram1"));
            } else if(i==1) {
                
                textAnimation($(".circle-diagram2.diagram2-1 p.elem-text span"), diagromBlock21[0], diagromBlock21[1]);
                textAnimation($(".circle-diagram2.diagram2-2 p.elem-text span"), diagromBlock22[0], diagromBlock22[1]);
                textAnimation($(".circle-diagram2.diagram2-3 p.elem-text span"), diagromBlock23[0], diagromBlock23[1]);
                
                animateCircleDiagram(diagromBlock21[0], diagromBlock21[1], $(".circle-diagram2.diagram2-1"));
                animateCircleDiagram(diagromBlock22[0], diagromBlock22[1], $(".circle-diagram2.diagram2-2"));
                animateCircleDiagram(diagromBlock23[0], diagromBlock23[1], $(".circle-diagram2.diagram2-3"));
            } else if(i==2) {
                for(var n=0; n<=linearDiagram.length; n++) {
                    var el = $("#percent-graph-" + (n + 1) + " .percent-indicators");
                    el.css("width", 0);
                    el.animate({
                        "width": linearDiagram[n] + "%"
                    }, 1000);
                    textAnimation(el.find(".text-percent-indicators span"), linearDiagram[n]);
                }
            } else if(i==3) {
                textAnimation($(".block-content-3 .c4s8 span"), 70);
                textAnimation($(".block-content-3 .c4s6"), 8, 100);
            } else if(i==4) {
                $("#e3-t-1").css("height", "70%");
                for(var n2=0; n2<tableDiagram.length; n2++) {
                    var el= $("#e3-t-"+(n2+1));
                    el.animate({
                        "height": tableDiagram[n2] + "%"
                    }, 1000);
                    
                }
                textAnimation($(".block-content-3 #e3-t-1 span"), 46, 20);
                textAnimation($(".block-content-3 #e3-t-2 span"), 15, 40);
                textAnimation($(".block-content-3 #e3-t-3 span"), 7, 80);
                textAnimation($(".block-content-3 #e3-t-4 span"), 26, 20);
                textAnimation($(".block-content-3 #e3-t-5 span"), 5, 100);
            }
            
            
        }
    }
    
    function animateCircleDiagram(n, t, el) {
        var i = 0;
        var timerSlider2 = setInterval(function() {
            i++;
            circle1Render(i, el)
            if(i >= n) {
                clearInterval(timerSlider2);
            }
        }, t);
    }
    
    function circle1Render(p, diagram) {
        var deg = 3.6 * p;
        if(deg <= 90) {
            diagram.find(".elem2").css({
                "-webkit-transform": "rotate("+(-deg+45)+"deg)",
                "-moz-transform": "rotate("+(-deg+45)+"deg)",
                "-ms-transform": "rotate("+(-deg+45)+"deg)",
                "-o-transform": "rotate("+(-deg+45)+"deg)",
                "transform": "rotate("+(-deg+45)+"deg)",
                "z-index": 1
            });
            
            diagram.find(".elem3").hide();
            diagram.find(".elem4").hide();
            diagram.find(".elem5").hide();
            
        }
        if( deg > 85 && deg <= 180) {
            diagram.find(".elem2").css({
                "-webkit-transform": "rotate("+(-deg+45)+"deg)",
                "-moz-transform": "rotate("+(-deg+45)+"deg)",
                "-ms-transform": "rotate("+(-deg+45)+"deg)",
                "-o-transform": "rotate("+(-deg+45)+"deg)",
                "transform": "rotate("+(-deg+45)+"deg)",
                "z-index": 1
            });
            
            diagram.find(".elem3").show();
            diagram.find(".elem4").hide();
            diagram.find(".elem5").hide();


        }
        if( deg > 175 && deg <= 270) {
            diagram.find(".elem2").css({
                "-webkit-transform": "rotate("+(-deg+45)+"deg)",
                "-moz-transform": "rotate("+(-deg+45)+"deg)",
                "-ms-transform": "rotate("+(-deg+45)+"deg)",
                "-o-transform": "rotate("+(-deg+45)+"deg)",
                "transform": "rotate("+(-deg+45)+"deg)",
                "z-index": 1
            });
            
            diagram.find(".elem3").show();
            diagram.find(".elem4").show();
            diagram.find(".elem5").hide();


        }
        if( deg > 265 && deg <= 360) {
            diagram.find(".elem2").css({
                "-webkit-transform": "rotate("+(-deg+45)+"deg)",
                "-moz-transform": "rotate("+(-deg+45)+"deg)",
                "-ms-transform": "rotate("+(-deg+45)+"deg)",
                "-o-transform": "rotate("+(-deg+45)+"deg)",
                "transform": "rotate("+(-deg+45)+"deg)",
                "z-index": 12
            });
            
            diagram.find(".elem3").show();
            diagram.find(".elem4").show();
            diagram.find(".elem5").show();

        }
    }
    
    function textAnimation(e, max, duration) {
        max = max ? max : 100;
        duration = duration ? duration : 10;
        var i=0;
        var int = setInterval(function() {
            i++;
            e.text(i);
            if(i>=max)
                clearInterval(int);

        }, duration);
        
    }
    
    
    sr.reveal('.block-content-3', {
        duration: 0,
        viewFactor: 0.25,
        reset: 'true',
        //viewOffset: {top: 100},
        afterReveal: function(domEl) {setTimeout(animateSliderBlock3(), 0)},
    }, 50);

    
   
});

window.sr = ScrollReveal();

sr.reveal('.icons-block', {
    delay: 100,
    duration: 500,
    easing: 'ease',
    viewFactor: 1,
    opacity: 1,
    scale: 1,
    origin: 'left',
    distance: '100%',
    afterReveal: function (el) {
        el.style.transition = '.5s ease all';
        el.style.position = 'fixed';
        el.style["z-index"] = '200';
        //el.style.left = 0;
        el.style.bottom = window.innerHeight - el.offsetTop - el.offsetHeight + window.pageYOffset + "px";

        setTimeout(function() {
            var handle = setInterval(function() {
                el.style.bottom = (el.style.bottom.split('px')[0] * 1 - 50) / 15 + "px";
                console.log(el.style.bottom);
                console.log(el.style.bottom.split('px')[0] * 1);
                if (el.style.bottom.split('px')[0] * 1 <= 50) {
                    el.style.bottom = "50px";
                    clearInterval(handle);
                }
            }, 100);
        }, 1000);

    }
});


sr.reveal('h2', {
    delay: 0,
    duration: 500,
    easing: 'ease',
    viewFactor: 0.5,
    offset: {top: 50},
    origin: 'bottom',
    distance: '50%'
});

sr.reveal('.block-content-4 .col', {
    delay: 0,
    duration: 500,
    easing: 'ease',
    viewFactor: 0.2,
    //offset: {top: 50},
    origin: 'bottom',
    distance: '90%'
}, 100);

sr.reveal('#block-7, .block-content-6 .left-block, .block-content-6 .right-block', {
    scale: 1,
    distance: 0,
    delay: 0
}, 100);

sr.reveal('.block-content-9', {
    duration: 0,
    scale: 1,
    opacity: 1,
    distance: 0,
    viewFactor: 0.5,
    reset: 'true',
    afterReveal: function (el) {
        $('.icons-block').addClass('hide-left-anim-big');
    }
});

sr.reveal('.block-content-8', {
    duration: 0,
    scale: 1,
    distance: 0,
    viewFactor: 0.1,
    reset: 'true',
    origin: 'bottom',
    afterReveal: function (el) {
        $('.icons-block').removeClass('hide-left-anim-big');
    }
})


sr.reveal('.block-content-9 .bottom-content-video .left-block', {
    origin: 'left',
    distance: '100%',
    opacity: 0.8,
    scale: 1,
    duration: 700
});

//  block 3 slider

var block3Slider = new Swiper ('.swiper-container', {

    nextButton: '.slider-control-next',
    prevButton: '.slider-control-prev',

    loop: false,
    slidesPerView: 6,
    breakpoints: {
        1366: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 3
        },
        840: {
            slidesPerView: 2
        },
        550: {
            slidesPerView: 1
        }
    }
});

var block9Slider = new Swiper ('.swiper-container2', {

    nextButton: '.slider2-control-next',
    prevButton: '.slider2-control-prev',

    loop: false,
    slidesPerView: 3,
    breakpoints: {
        950: {
            slidesPerView: 2
        },
        650: {
            slidesPerView: 1
        }
    }
});


$('.block-content-10 .info-1').on('click', function () {
    $('.pos-pop-1').css('display', 'block');
});

$('.pos-pop-1').on('click', function () {
    $('.pos-pop-1').css('display', 'none');
});

$('.block-content-10 .info-2').on('click', function () {
    $('.pos-pop-2').css('display', 'block');
});

$('.pos-pop-2').on('click', function () {
    $('.pos-pop-2').css('display', 'none');
});

window.addEventListener('resize', function () {
    if (popupVideoActive)
        if (window.innerWidth / window.innerHeight < 16 / 9) {
            var midoffset = (window.innerHeight - $('.popup-video-wrapper video').height()) / 2;
            $('.popup-video-wrapper video').css('top', midoffset + 'px');
        } else {
            $('.popup-video-wrapper video').css('top', '0');
        }
});