$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    function layout_m() {

        var ww = $(window).width();
        var wh = $(window).height();

        if (ww < 760) {

            $('#wrap').css({
                display: 'none'
            });

            $('#m_wrap').css({
                width: '100%',
                height: 'auto',
                //backgroundColor:'gray',
                display: 'block',
                float: 'left'
            });

            $('#m_character').css({

                width: ww,
                height: wh*0.7,
//              backgroundColor:'orange',
                float: 'left',
            });

            $('#m_character>img').css({
                hegith:'100%',
                margin: '0 auto'
            });


            $('#m_menu_wrap').css({
                width: ww,
                height: wh * 0.2,
                // backgroundColor:'pink',
                float: 'left'
            });

            $('#m_menu_wrap>li').css({
                width: '20%',
                height: 'auto',
                //  backgroundColor:'cadetblue',
                float: 'left',
                marginTop: 30

            });

            $('#m_menu_wrap img').css({
                margin: '0 auto',
                width: '80%'
            });

            $('#m_menu_5 img').css({
                width: '60%'
            });

            /*m_menu_end*/

            /*page 공통영역*/

            $('#m_page').css({
                width: ww,
                height: wh*0.5,
                //backgroundColor:'gold',
                float: 'left',
                //position: 'relative'
            });

            $('.m_page').css({
                width: '100%',
                height: wh * 0.6,
                float: 'left',
                //backgroundColor:'pink'
               // position: 'absolute',
                //top: 0,
                //left: 0
            });


            $('.m_l_con').css({
                width: ww * 0.28,
                height: '60%',
                //backgroundColor:'yellowgreen',
                marginTop: ww * 0.09,
                marginLeft: ww * 0.12,
                float: 'left'
            });

            $('.m_top_con').css({
                width: '100%',
                height: 'auto',
                float: 'left',
                marginBottom: 10
            });

            $('.m_before').css({
                width: '100%',
                height: 'auto',
                //backgroundColor:'olive'
            });

            $('.m_l_con img').css({
                width: '100%'
            });

            $('.m_l_con span').css({
                fontSize: ww * 0.01,
                color: 'gray',
                display: 'block',
                width: 'auto',
                height: 'auto',
                //backgroundColor:'pink'
            });

            $('.m_r_con').css({
                width: ww * 0.3,
                height: '60%',
                //backgroundColor:'greenyellow',
                marginTop: ww * 0.09,
                marginLeft: ww * 0.05,
                float: 'left'
            });

            $('.m_explain').css({
                width: ww * 0.25,
                height: "auto",
                //backgroundColor:'green',

            });

            $('.m_explain h2').css({
                fontSize: ww * 0.023,
                marginBottom: 10
            });

            $('.m_explain p').css({
                fontSize: ww * 0.02
            });

            $('.m_color span').css({
                width: 'auto',
                height: 'auto',
                //backgroundColor:'#fff',
                marginRight: 10,
                fontSize: ww * 0.02,
                marginTop: 10,
                marginBottom: 10,
                display: 'block'
            });

            $('.m_color>li').css({
                width: ww * 0.04,
                height: ww * 0.04,
                //backgroundColor: '#fff',
                float: 'left',
                borderRadius: '50%',
                marginRight: 10,
                border: '0.3px solid gray',
            });

            /*page 공통영역 end*/


//            $('#m_page_6').css({
//                width: ww,
//                height: 'auto',
//                backgroundImage: 'url(img/kaishi.png)',
//                backgroundRepeat: 'no-repeat',
//                backgroundSize: '100%',
//                //display: 'none'
//
//            });
//
//            $('#m_char').css({
//                width: '50%',
//                height: 'auto',
//                //backgroundColor:'gray',
//                marginLeft: '25%',
//                marginTop: '5%'
//            });
//
//            $('#m_char>img').css({
//                width: '100%',
//            });
//
//            $('#m_kor').css({
//                width: '15%',
//                height: 'auto',
//                //backgroundColor:'gray',
//                fontSize: ww * 0.025,
//                marginLeft: ww * 0.47
//            });
//
//            $('#m_mean').css({
//                width: '70%',
//                height: '10%',
//                // backgroundColor:'orange',
//                fontSize: ww * 0.045,
//                marginLeft: '15%',
//                marginTop: '8%',
//                textAlign: 'center'
//            });
//
//            $('#m_explain').css({
//                width: '80%',
//                height: '30%',
//                //backgroundColor:'gold',
//                textAlign: 'center',
//                fontSize: ww * 0.03,
//                margin: '5%',
//                marginLeft: '10%',
//            });

            /*page_6 end*/

            $('#m_page_1').css({
                backgroundImage: 'url(img/makimono_1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height:'100%',
                //display: 'none',
            });


            $('#m_color_1').css({
                backgroundColor: '#6c801a',
                border: 'none'
            });

            $('#m_page_2').css({
                backgroundImage: 'url(img/makimono_2.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height:'100%'
                //display: 'none'
            });


            $('#m_color_2').css({
                backgroundColor: '#2d4a9b',
                border: 'none',

            });



            $('#m_page_3').css({
                backgroundImage: 'url(img/makimono_3.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height:'100%'
                //display: 'none'
            });



            $('#m_color_3').css({
                backgroundColor: '#b9cae6',
                border: 'none'
            });

            $('#m_page_4').css({
                backgroundImage: 'url(img/makimono_4.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height:'100%'
                //display: 'none'
            });

            $('#m_page_5').css({
                backgroundImage: 'url(img/makimono_5.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height:'100%'
                //display: 'none'
            });

            $('#m_l_con_5').css({
                width: '40%',
                height: '40%',
                //backgroundColor:'pink',
                marginTop: wh * 0.05,
                marginLeft: ww * 0.13,
                float: 'left',
                padding: 0
            });

            $('#m_name').css({
                width: '50%',
                height: wh * 0.03,
                backgroundImage: 'url(img/name.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                //backgroundColor:'gray',
                backgroundSize: '70%',
                fontSize: ww * 0.012,
                textAlign: 'right',
                lineHeight: '40px',
            });


            $('#m_college').css({
                width: '100%',
                height: 'auto',
                //backgroundColor:'orange',
                marginTop: 10,
                marginLeft: ww * 0.01,
                marginBottom: 10,
                fontSize: ww * 0.01
            });

            $('.m_skill').css({
                width: '100%',
                height: '15%',
                //backgroundColor:'cadetblue',
                float: 'left',
                fontSize: ww * 0.012,
            });

            $('.m_skill>li').css({
                width: '13%',
                height: '70%',
                //backgroundColor:'gold',
                float: 'left'
            });

            $('.m_skill span').css({
                width: ww * 0.13,
                height: wh * 0.04,
                display: 'block',
                float: 'left',
                textAlign: 'center',
                lineHeight: ww * 0.04 + 'px'
            });

            $('.m_skill img').css({
                width: '100%'
            });

            $('#m_ps span').css({
                color: '#f09d38',
            });

            $('#m_ai span').css({
                color: '#59b2ff'
            });

            $('#m_html span').css({
                color: '#da6a3a'
            });

            $('#m_css span').css({
                color: '#3365e1'
            });

            $('#m_jquery span').css({
                color: '#e6d465'
            });

            $('#m_r_con_5').css({
                width: '15%',
                height: '25%',
                //backgroundColor:'gold',
                float: 'left',
                marginTop: wh * 0.05,
                padding: 0
            });

            $('#m_profile').css({
                width: '90%',
                height: '90%',
                //backgroundColor:'green',
                float: 'right'
            });

            $('#m_profile>img').css({
                width: '100%'
            });

            $('#m_text_con_4').css({
                width: '50%',
                height: '30%',
                //backgroundColor:'orange',
                float: 'left',
                marginTop: '13%',
                marginLeft: '20%'
            });

            $('#m_contact').css({
                width: '100%',
                height: '25%',
                fontSize: ww * 0.05,
                textAlign: 'center',
                //backgroundColor:'pink',
                float: 'left'
            });

            $('#m_tel').css({
                width: '100%',
                height: '90%',
                // backgroundColor:'gray',
                float: 'left',
                marginTop: 30,
                textAlign: 'center',
                fontSize: ww * 0.02
            });




AOS.init();



        } //mo end


    }; //layout end
    layout_m();

    $(window).resize(function () {

        ww = $(window).width();

        layout_m();


    });



}); //end
