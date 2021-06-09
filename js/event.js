$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    //    open the door

    if (ww <= 960) {


        $('html,body').css({

            cursor: 'default'

        });
    }

    $('#r_door').hover(function () {

        var ww = $(window).width();
        var wh = $(window).height();

        $(this).animate({

            left: ww * 0.8,

        }, 1000);

        $('#l_door').animate({

            left: -ww * 0.3,

        }, 1000);

        $('html,body').css({
            cursor: 'url(img/enter.png), url(img/enter.cur),auto'
        });



    });

    $('#wrap').click(function () {

        $('.door').css({

            display: 'none'

        });

        $('html,body').css({
            cursor: 'auto'
        });

    });

    //    hover event
    //    menu_1
    $('#menu_1').hover(function () {

        $('#window>img').attr({

            src: 'img/window_1.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus_1.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'pointer'
        });

    }, function () {

        $('#window>img').attr({

            src: 'img/window.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'auto'
        });

    });
    //    hover event    
    //    menu_2
    $('#menu_2').hover(function () {

        $('#window>img').attr({

            src: 'img/window_2.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus_2.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'pointer'
        });

    }, function () {

        $('#window>img').attr({

            src: 'img/window.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'auto'
        });

    });
    //    hover event    
    //    menu_3
    $('#menu_3').hover(function () {

        $('#window>img').attr({

            src: 'img/window_3.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus_3.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'pointer'
        });

    }, function () {

        $('#window>img').attr({

            src: 'img/window.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'auto'
        });

    });

    //    hover event    
    //    menu_4
    $('#menu_4').hover(function () {

        $('#window>img').attr({

            src: 'img/window_4.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus_4.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'pointer'
        });

    }, function () {

        $('#window>img').attr({

            src: 'img/window.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'auto'
        });

    });

    //    hover event
    //    menu_5
    $('#menu_5').hover(function () {

        $('#window>img').attr({

            src: 'img/window_5.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus_5.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'pointer'
        });

    }, function () {

        $('#window>img').attr({

            src: 'img/window.png'

        });

        $('#wrap').css({

            backgroundImage: 'url(img/chashitus.png)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        });

        $('html,body').css({
            cursor: 'auto'
        });

    });

    //    click event
    //    menu_1
    $('#menu_1').click(function () {

        $('#page').css({
            display: 'block'
        });

        $('#page_1').fadeIn(1000);

    });

    //    $('#page').click(function(){
    //        
    //        $('#page_1').css({
    //            display:'none'
    //        });
    //        
    //        $('#page').css({
    //            display:'none'
    //        });
    //        
    //    });

    $('#close_1').click(function () {

        $('#page_1').css({
            display: 'none'
        });

        $('#page').css({
            display: 'none'
        });

    });

    //    click event
    //    menu_2
    $('#menu_2').click(function () {

        $('#page').css({
            display: 'block'
        });

        $('#page_2').fadeIn(1000);

    });

    //    $('#page').click(function(){
    //        
    //        $('#page_2').css({
    //            display:'none'
    //        });
    //        
    //        $('#page').css({
    //            display:'none'
    //        });
    //        
    //    });

    $('#close_2').click(function () {

        $('#page_2').css({
            display: 'none'
        });

        $('#page').css({
            display: 'none'
        });

    });

    //    click event
    //    menu_3
    $('#menu_3').click(function () {

        $('#page').css({
            display: 'block'
        });

        $('#page_3').fadeIn(1000);

    });

    //    $('#page').click(function(){
    //        
    //        $('#page_3').css({
    //            display:'none'
    //        });
    //        
    //        $('#page').css({
    //            display:'none'
    //        });
    //        
    //    });

    $('#close_3').click(function () {

        $('#page_3').css({
            display: 'none'
        });

        $('#page').css({
            display: 'none'
        });

    });

    //    click event
    //    menu_4
    $('#menu_4').click(function () {

        $('#page').css({
            display: 'block'
        });

        $('#page_4').fadeIn(1000);

    });

    //    $('#page').click(function(){
    //        
    //        $('#page_4').css({
    //            display:'none'
    //        });
    //        
    //        $('#page').css({
    //            display:'none'
    //        });
    //        
    //    });
    //    
    $('#close_4').click(function () {

        $('#page_4').css({
            display: 'none'
        });

        $('#page').css({
            display: 'none'
        });

    });

    //    click event
    //    menu_5
    $('#menu_5').click(function () {

        $('#page').css({
            display: 'block'
        });

        $('#page_5').fadeIn(1000);

    });

    //    $('#page').click(function(){
    //        
    //        $('#page_5').css({
    //            display:'none'
    //        });
    //        
    //        $('#page').css({
    //            display:'none'
    //        });
    //        
    //    });

    $('#close_5').click(function () {

        $('#page_5').css({
            display: 'none'
        });

        $('#page').css({
            display: 'none'
        });

    });

    //    click event
    //    menu_6
    $('#character').click(function () {

        $('#page').css({
            display: 'block'
        });

        $('#page_6').fadeIn(1000);

    });

    //    $('#page').click(function(){
    //        
    //        $('#page_6').css({
    //            display:'none'
    //        });
    //        
    //        $('#page').css({
    //            display:'none'
    //        });
    //        
    //    });

    $('#close_6').click(function () {

        $('#page_6').css({
            display: 'none'
        });

        $('#page').css({
            display: 'none'
        });

    });

    /*클릭 유도 화살표 이벤트*/
    function arrow_move() {
        $('#arrow span').animate({
            left:17
        });
        $('#arrow span').animate({
            left:12
        });


    }

    arrow_move();

    setInterval(function () {
        arrow_move();
    });
    /*클릭유도 화살표 이벤트 끝*/




    

}); //end
