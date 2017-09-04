/**
 * Created by zhenyuan on 2017/8/13.
 */
$(function () {
    var $nNli = $("#nav .nav>li");
    var $nNlD =$("#nav .nav>li>div");
    var index;
    $nNli.on('mouseenter',function () {
        $nNli.index();
        index =$(this).index();
        $nNlD.css({display:"none"});                            //执行一次事件就相当一次循环从头开始
        $(this).children($("div")).show();                    //this返回原生元素，jQ事件要用jQ对象写
        console.log(index)
    });
    $nNlD.on('mouseenter',function () {                                         //进入到div中再绑定个mouse事件就好
        /*$(this).css({display:'block'});*/
        $(this).show();
    });
    $nNlD.on('mouseleave',function () {
        /*$(this).css({display:'none'});*/
        $(this).hide()
    });



    /*选单栏完成*/
    var $search=$("input");
    $search.on('focus',function () {
        if(this.value == this.defaultValue)
            this.value = "";
    }).on("blur",function () {
        if(this.value==''){
            this.value=this.defaultValue;                                 // .value是原生属性,所以要用原生元素
        }
    });
    /*搜索框完成*/

    var $skinA = $('#skin li');
    var $nav = $('#nav');

    $skinA.on('click',function () {
        $skinA.index();
        e=$(this).index();
        console.log(e);
        $("#skin li span").removeAttr('class');
        $(this).children($("span")).addClass('selected');
        changeBg(e)
    });

    function changeBg(e) {
        for(var num =0;num<6;num++){
            $nav.removeClass('bgChange_'+num);
            $nav.addClass('bgChange_'+e)
        }

    }
    var $jImg=$(".jsImg img");
    var $tA = $(".imgRoll .text a");
/*    var index=0;
    $tA.on("mouseover",function () {
        $tA.index();
        e=$(this).index();
        console.log(e);
        $tA.css({background:'#444444'});
        $(this).css({background:'#00FFFF'});
        changeImgs(e);
    }).on('mouseout',function () {
       /!* $tA.css({background:'#444444'});*!/
       $tA.css({background:'#444444'})
    });

    function changeImgs(e) {
        $jImg.removeClass('imgSelected');
        $jImg.eq(e).addClass('imgSelected');
    }
    timey=setInterval(function () {
        next()
    },1500);
    function run() {
        timey=setInterval(function () {
            next()
        },1500);
    }

    function next() {
       index++;
       if(index == $jImg.length){                          /!*这个next方法执行的时候也像一个循环*!/
           index=0;
       }
        changeImgs(index)
    }
    console .log($jImg.length);
    $(".imgRoll").hover(function(){
        clearInterval(timey);
    }, function(){                              /!*这个想法很棒！把大块div作为hover事件来设置计时器的清除和建立*!/
        run();                                 /!*把interval封装成方法就能执行了*!/
    });*/

    $tA.on("mouseover", function(){
        $(this).addClass("imgSelected").siblings().removeClass("imgSelected");
        $jImg.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    });
});