$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    function layout() {

        var ww = $(window).width();
        var wh = $(window).height();

        if (ww < 1260 && ww >= 1100) {

            $('#m_wrap').css({
                display: 'none'
            });

            $('.door').css({
                width: ww / 2,
                height: wh,
                float: 'left',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
                zIndex: 9,
                //display: 'none'
            });

            $('#r_door').css({
                position: 'absolute',
                top: 0,
                left: ww / 2,
                display: 'block'
            });

            $('#l_door').css({
                display: 'block'
            });

            $('.door>img').css({
                width: '100%'
            });


            $('#wrap').css({
                width: ww,
                height: wh,
                backgroundImage: 'url(img/chashitus.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                position: 'relative',
                display: 'block'
            });

            $('#window').css({
                width: ww * 0.25,
                height: wh * 0.25,
                //backgroundColor:'pink',
                float: 'left',
                marginTop: wh * 0.1,
                marginLeft: ww * 0.2
            });

            $('#window img').css({
                height: '100%'
            });

            $('#vase').css({
                width: ww * 0.06,
                height: wh * 0.25,
                //backgroundColor:'lightblue',
                float: 'left',
                marginTop: wh * 0.35,
                marginLeft: ww * 0.2
            });

            $('#vase>img').css({
                height: '100%'
            });

            $('#character').css({
                width: ww * 0.1,
                height: 'auto',
                //backgroundColor:'olive',
                float: 'right',
                marginRight: ww * 0.1
            });

            $('#character img').css({
                width: '100%'
            });
            /*main end*/

            $('#arrow').css({
                width: 50,
                height: 50,
                display: 'blcok',
                position: 'absolute',
                top: wh * 0.55,
                left: ww * 0.15,
            });

            $('#arrow span').css({
                display: 'block',
                width: 20,
                height: 20,
                transform: 'rotate(-45deg)',
                borderBottom: '5px solid #fff',
                borderRight: '5px solid #fff',
                position:'relative',
                top:10,
                left:12,

            });

            $('#menu_wrap').css({
                width: ww * 0.8,
                height: wh * 0.18,
                //backgroundColor:'pink',
                position: 'absolute',
                top: wh * 0.52,
                left: ww * 0.2,
                overflow: 'hidden'
            });

            $('#menu_wrap>li').css({
                width: '19.5%',
                height: '100%',
                float: 'left',
                marginRight: '0.5%',
                //backgroundColor:'hotpink'
            });

            $('#menu_wrap img').css({
                width: '100%'
            });



            $('#menu_2 img').css({
                width: '80%',
                marginLeft: '10%',
                marginTop: '8%'
            });
            $('#menu_3 img').css({
                width: '90%',
                marginLeft: '5%'
            });
            $('#menu_4 img').css({
                width: '80%',
                marginLeft: '10%',
                marginTop: '5%'
            });
            $('#menu_5 img').css({
                width: '70%',
                marginLeft: '10%'
            });
            /*menu end*/

            /*page 공통영역*/
            $('#page').css({
                width: ww,
                height: wh,
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'relative',

                display: 'none'
            });

            $('.page').css({

                width: ww * 0.6,
                height: wh * 0.6,
                //backgroundColor:'pink',

                position: 'absolute',

                top: '20%',
                left: '23%',

            });

            $('.con').css({
                width: '30%',
                height: '100%',
                //backgroundColor:'gold',
                float: 'left',

            });

            $('.l_con').css({
                paddingLeft: ww * 0.08,
                paddingTop: wh * 0.07,
            });

            $('.l_con span').css({
                display: 'block',
                float: 'left',
                fontSize: ww * 0.01,
                color: 'gray'
            });

            $('.top_con').css({
                width: '100%',
                height: 'auto',
                //backgroundColor:'gray',
                float: 'left',
                marginBottom: 5
            });

            $('.before').css({
                display: 'block',
                width: '100%',
                height: '90%',
                //backgroundColor:'pink'

            });

            $('.before img').css({
                width: '100%'
            });


            $('.bottom_con').css({
                width: '100%',
                height: 'auto',
                //backgroundColor:'lightgray',
                float: 'left'
            });

            $('.after').css({
                display: 'block',
                width: '100%',
                height: '90%',
                //backgroundColor:'pink'
            });

            $('.after img').css({
                width: '100%'
            });

            /*left_con end*/

            $('.r_con').css({
                paddingTop: wh * 0.1,
                marginLeft: ww * 0.02,
            });

            $('.explain').css({
                width: '100%',
                height: 'auto',
                marginBottom: 15,

                fontSize: ww * 0.01
                //backgroundColor:'orange'
            });

            $('.explain>h2').css({
                width: 'auto',
                height: 'auto',
                //backgroundColor:'pink',
                marginBottom: 15,
                fontSize: ww * 0.013
            });

            $('.color').css({
                width: ww * 0.1,
                height: wh * 0.09,


                //backgroundColor:'cadetblue'
            });

            $('.color>span').css({
                display: 'block',
                marginBottom: 10,
                fontSize: ww * 0.01
            });


            $('.color>li').css({
                width: 35,
                height: 35,
                //backgroundColor:'gray',
                float: 'left',
                border: '0.5px solid gray',
                boxSizing: 'border-box',
                borderRadius: '50%'
            });

            $('.close').css({
                width: ww * 0.02,
                height: ww * 0.02,
                //backgroundColor:'#000',
                position: 'absolute',
                top: '11%',
                right: '22%'
            });

            $('.close img').css({
                width: '100%'
            });

            /*page 공통영역 end*/

            $('#page_1').css({
                backgroundImage: 'url(img/makimono_1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                display: 'none'
            });


            $('#color_1').css({
                backgroundColor: '#6c801a',
                marginRight: 8,
                border: 'none'
            });


            /*page_1 end*/

            $('#page_2').css({
                backgroundImage: 'url(img/makimono_2.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                display: 'none'
            });


            $('#color_2').css({
                backgroundColor: '#2d4a9b',
                marginRight: 8,
                border: 'none'
            });

            /*page_2 end*/


            $('#page_3').css({
                backgroundImage: 'url(img/makimono_3.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                display: 'none'
            });

            $('#color_3').css({
                backgroundColor: '#b9cae6',
                marginRight: 8,
                border: 'none'
            });


            /*page_3 end*/

            $('#page_4').css({
                backgroundImage: 'url(img/makimono_4.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                display: 'none'
            });

            $('#text_con_4').css({
                width: '50%',
                height: '30%',
                //backgroundColor:'orange',
                float: 'left',
                marginTop: '13%',
                marginLeft: '20%'
            });

            $('#contact').css({
                width: '100%',
                height: '25%',
                fontSize: ww * 0.027,
                textAlign: 'center',
                //backgroundColor:'pink',
                float: 'left'
            });

            $('#tel').css({
                width: '100%',
                height: '90%',
                // backgroundColor:'gray',
                float: 'left',
                marginTop: 50,
                textAlign: 'center',
                fontSize: ww * 0.013
            });

            /*page_4 end*/

            $('#page_5').css({
                backgroundImage: 'url(img/makimono_5.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                display: 'none'
            });


            $('#l_con_5').css({
                width: '40%',
                height: '70%',
                //backgroundColor:'pink',
                marginTop: wh * 0.045,
                marginLeft: ww * 0.07,
                float: 'left',
                padding: 0
            });

            $('#name').css({
                width: ww * 0.13,
                height: wh * 0.07,
                backgroundImage: 'url(img/name.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                //backgroundColor:'gray',
                backgroundSize: '70%',
                fontSize: ww * 0.013,
                textAlign: 'right',
                lineHeight: '85px'
            });

            $('#college').css({
                width: '100%',
                height: 'auto',
                //backgroundColor:'orange',
                marginTop: 3,
                marginLeft: ww * 0.01,
                fontSize: ww * 0.01
            });

            $('.skill').css({
                width: '100%',
                height: '10%',
                //backgroundColor:'cadetblue',
                float: 'left',
                fontSize: ww * 0.012,
                color: 'gray',
                fontWeight:900
            });

            $('.skill>li').css({
                width: '13%',
                height: 'auto',
                //backgroundColor:'gold',
                float: 'left'
            });

            $('.skill>span').css({
                width: ww * 0.08,
                height: wh * 0.04,
                display: 'block',
                float: 'left',
                textAlign: 'center',
                lineHeight: ww * 0.04 + 'px'
            });

            $('.skill img').css({
                width: '100%'
            });

            $('#ps span').css({
                color: '#f09d38',
            });

            $('#ai span').css({
                color: '#59b2ff'
            });

            $('#html span').css({
                color: '#da6a3a'
            });

            $('#css span').css({
                color: '#3365e1'
            });

            $('#jquery span').css({
                color: '#e6d465'
            });

            $('#r_con_5').css({
                width: '15%',
                height: '30%',
                //backgroundColor:'gold',
                float: 'left',
                marginTop: wh * 0.1,
                padding: 0
            });

            $('#profile').css({
                width: '100%',
                height: '100%',
                //backgroundColor:'green',
                float: 'left'
            });

            $('#profile>img').css({
                width: '100%'
            });

            /*page_5 end*/

            $('#page_6').css({
                backgroundImage: 'url(img/kaishi.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                display: 'none',
            });

            $('#char').css({
                width: '40%',
                height: 'auto',
                //backgroundColor:'gray',
                marginLeft: '30%',
                marginTop: '5%'
            });

            $('#char>img').css({
                width: '100%',
            });

            $('#kor').css({
                width: '12%',
                height: 'auto',
                //backgroundColor:'gray',
                fontSize: ww * 0.014,
                marginLeft: ww * 0.28
            });

            $('#mean').css({
                width: '50%',
                height: '10%',
                // backgroundColor:'orange',
                fontSize: ww * 0.02,
                marginLeft: '25%',
                marginTop: '8%',
                textAlign: 'center'
            });

            $('#explain').css({
                width: '60%',
                height: '30%',
                //backgroundColor:'gold',
                textAlign: 'center',
                fontSize: ww * 0.012,
                marginTop: '2%',
                marginLeft: '20%'
            });

            $('#close_6').css({
                right: '3%',
                top: '5%'
            });


        } //note end


    }; //layout end
    layout();

    $(window).resize(function () {

        ww = $(window).width();

        layout();


    });



}); //end
