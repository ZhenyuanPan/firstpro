/**
 * Created by zhenyuan on 2017/9/12.
 */
$(function () {
   $wrapper = $("#wrapper");
   $humIcon9 = $("#hamburger-9");
   $body = $("body");
   $q = $("#wrapper .cube.q");
   $w = $("#wrapper .cube.w");
   $e = $("#wrapper .cube.e");
   $t = $("#wrapper .cube.t");
   $y = $("#wrapper .cube.y");
   $c = $("#wrapper .cube.c");
   $iconLeft = $(".changePageIconLeft");
   $iconRight = $(".changePageIconRight");
   $context = $("#context");
   $beginToShow = $(".beginToShow");
   $btsMy = $('.beginToShow.my');
   $btsName = $('.beginToShow.name');
   $btsIs = $('.beginToShow.is');
   $btsFrist = $('.beginToShow.first');
   $btsLast = $('.beginToShow.last');


//文字展示特效
var run = true;
function beginShowON() {
    run = true;
}
function beginShowOFF() {
    run = false;
}
function beginShow() {
    if($(window).width()>=1250){
        beginNameA()
    }else if ($(window).width()<1250){
        beginNameB();
    }
}
beginShow();
function beginNameA() {
    if(run){
        $btsMy.css({display:"block"}).animate({
            fontSize:'150px',
            opacity:1
        },1400).animate({
            fontSize:'80px',
            left:'35%'
        },1000);
        setTimeout(function () {
            $btsName.css({display:'block'}).animate({
                fontSize:'150px',
                opacity:1
            },1400).animate({
                fontSize:'80px',
                left:'50%'
            },1000);
        },2400);
        setTimeout(function () {
            $btsIs.css({display:'block'}).animate({
                fontSize:'150px',
                opacity:1
            },1400).animate({
                fontSize:'80px',
                left:'63%'
            },1000);
        },4800);
        setTimeout(function () {
            $btsMy.animate({opacity:0},500);
            $btsName.animate({opacity:0},500);
            $btsIs.animate({opacity:0},500);
            setTimeout(function () {
                $btsMy.css({display:'none'});
                $btsName.css({display:'none'});
                $btsIs.css({display:'none'});
            },500)
        },7200);
        setTimeout(function () {
            $btsFrist.css({display:'block'}).animate({
                fontSize:'150px',
                opacity:1
            },1400).animate({
                fontSize:'80px',
                left:'33%'
            },1000);
        },7700);
        setTimeout(function () {
            $btsLast.css({display:'block'}).animate({
                fontSize:'150px',
                opacity:1
            },1400).animate({
                fontSize:'80px',
                left:'60%'
            },1000);
        },10100);
        setTimeout(function () {
            $btsFrist.animate({opacity:0},1000);
            $btsLast.animate({opacity:0},1000);
            setTimeout(function () {
                $beginToShow.css({left:'50%',top:'50%',transform:'translate(-50%,-50%)'});
                $beginToShow.css({display:"none"});
                beginNameA();
            },1000)
        },12500);
    }
}
function beginNameB() {
    if(run){
        $btsFrist.css({display:'block'}).animate({
            opacity:1,
            top:"40%"},2400);
        setTimeout(function () {
            $btsLast.css({display:'block'}).animate({
                opacity:1,
                top:"55%"},2400);
        },2400);
        setTimeout(function () {
            $btsFrist.animate({opacity:0},400);
            $btsLast.animate({opacity:0},400);
            setTimeout(function () {
                $btsFrist.css({display:'none'});
                $btsLast.css({display:'none'});
                $beginToShow.css({left:'50%',top:'50%',transform:'translate(-50%,-50%)'});
                beginNameB();
            },400)
        },5200);
    }
}
//文字展示特效结束            运用开关run保证了点击菜单后文字展示停止与开始!!!贼帅!!!


   //点击开始旋转页面特效
   function begin() {
       var flag = 1;
       var bingo = 1;
       $humIcon9.on("click",function () {
           if(flag == 1){
               $humIcon9.addClass("is-active");
              /* $("#wrapper .cube").css({display:'block'});*/
               $iconLeft.fadeIn();
               $iconRight.fadeIn();
               beginShowOFF();
               changePage();                                         //双侧切换子页面按钮功能调用
               var i =560;
               var x =60;

               if (bingo == 1 && flag == 1){
                   $("#wrapper .cube").css({display:'block'});
                   var timer = setInterval(function () {
                       i=i-10;
                       x=x-2;
                       $c.css({transform:'rotateY('+x+"deg"+') translateZ('+i+"px"+')'});
                       $y.css({transform:'rotateY('+(300+x)+"deg"+') translateZ('+i+"px"+')'});
                       $t.css({transform:'rotateY('+(240+x)+"deg"+') translateZ('+i+"px"+')'});
                       $e.css({transform:'rotateY('+(120+x)+"deg"+') translateZ('+i+"px"+')'});
                       $w.css({transform:'rotateY('+(60+x)+"deg"+') translateZ('+i+"px"+')'});
                       $q.css({transform:'rotateY('+(180+x)+"deg"+') translateZ('+i+"px"+')'});
                       $c.css({opacity:1});
                       $y.css({opacity:0.4});
                       $t.css({opacity:0.4});
                       $e.css({opacity:0.4});
                       $w.css({opacity:0.4});
                       $q.css({opacity:0.4});
                       /*  $t.css({transform:'translateZ('+i+"px"+')'});
                        $e.css({transform:'translateZ('+i+"px"+')'});
                        $w.css({transform:'translateZ('+i+"px"+')'});
                        $q.css({transform:'translateZ('+i+"px"+')'});*/
                       if(i==260 && bingo == 0){
                           clearInterval(timer);
                           flag = 0;
                           bingo = 1;
                       }
                   },10);
               }
               bingo = 0;
           }else if (flag == 0){
               $('#wrapper .cube').fadeOut(400);
               $iconLeft.fadeOut(400);
               $iconRight.fadeOut(400);
               $humIcon9.removeClass("is-active");
               beginShowON();
               if($(window).width()<1250 && $btsFrist.css('display')=='none'&& $btsLast.css('display')=='none'&& $btsMy.css('display')=='none'){
                   beginShow();
               }else if($(window).width()>=1250 &&  $btsFrist.css('display')=='none' && $btsMy.css('display')=='none'){
                   beginShow();
               }
               setTimeout(function () {
                   flag = 1;
               },400);                                    //解决问题$动画结束后再执行之后代码
           }
       })
   }
   begin();
   //点击开始特效结束


   //主页面背景图片变换特效
   function changeBgi() {
       var i =300;
       var timeBody = setInterval(function () {
            i=i-1;
           $body.css({backgroundSize:i+'%'},{});
           if (i == 100){
               clearInterval(timeBody);
               $body.css({backgroundSize:'cover'});
           }
       },1)

   }
   //主页背景图片特效结束


    //双侧切换子页面按钮功能
   function changePage() {
        var i = 0;
        var j = 1;
        $iconLeft.on("click",function () {
            var timePage = setInterval(function () {
                i=i+1;
                $c.css({transform:"rotateY("+(i)+'deg'+") translateZ("+260+"px"+")" });
                $y.css({transform:"rotateY("+(300+i)+'deg'+") translateZ("+260+"px"+")"});
                $t.css({transform:"rotateY("+(240+i)+'deg'+") translateZ("+260+"px"+")"});
                $e.css({transform:"rotateY("+(120+i)+'deg'+") translateZ("+260+"px"+")"});
                $w.css({transform:"rotateY("+(60+i)+'deg'+") translateZ("+260+"px"+")"});
                $q.css({transform:"rotateY("+(180+i)+'deg'+") translateZ("+260+"px"+")"});
                if(i%60 == 0){
                    clearInterval(timePage);
                }
            },10);
            if(j == 1){
                $c.css({opacity: 0.4});
                $y.css({opacity:1});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:0.6});
                j = 2;
            }else if(j == 2){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:1});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 3;
            }else if(j == 3){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:1});
                j = 4;
            }else if(j == 4){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:1});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 5;
            }else if(j == 5){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:1});
                $q.css({opacity:0.4});
                j = 6;
            }else if(j == 6){
                $c.css({opacity:1});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 1;
            }
        });

        $iconRight.on("click",function () {
            var timePage = setInterval(function () {
                i=i+1;


                $c.css({transform:"rotateY("+(-i)+'deg'+") translateZ("+260+"px"+")" });
                $y.css({transform:"rotateY("+(300-i)+'deg'+") translateZ("+260+"px"+")"});
                $t.css({transform:"rotateY("+(240-i)+'deg'+") translateZ("+260+"px"+")"});
                $e.css({transform:"rotateY("+(120-i)+'deg'+") translateZ("+260+"px"+")"});
                $w.css({transform:"rotateY("+(60-i)+'deg'+") translateZ("+260+"px"+")"});
                $q.css({transform:"rotateY("+(180-i)+'deg'+") translateZ("+260+"px"+")"});
                if(i%60 == 0){
                    clearInterval(timePage);
                }
            },10);
            if(j == 1){
                $c.css({opacity: 0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:1});
                $q.css({opacity:0.4});
                j = 2;
            }else if(j == 2){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:1});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 3;
            }else if(j == 3){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:1});
                j = 4;
            }else if(j == 4){
                $c.css({opacity:0.4});
                $y.css({opacity:0.4});
                $t.css({opacity:1});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 5;
            }else if(j == 5){
                $c.css({opacity:0.4});
                $y.css({opacity:1});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 6;
            }else if(j == 6){
                $c.css({opacity:1});
                $y.css({opacity:0.4});
                $t.css({opacity:0.4});
                $e.css({opacity:0.4});
                $w.css({opacity:0.4});
                $q.css({opacity:0.4});
                j = 1;
            }
        });

    }
    //双侧切换特效结束



   //子页面点开功能
    function text1() {
        var that;
            $(".cube").on("click",function(e) {
                e.stopPropagation();
                var i = 10;
                var j = 260;
                that = $(this);
                console.log(that.css('opacity'));
                if(that.css('opacity') == 1){
                    var timeBig = setInterval(function () {
                        that.css({transform:'translateZ('+(j-=i)+"px"+')'});
                        if (j == 0){
                            clearInterval(timeBig);
                        }
                    },10);
                    that.animate(
                        { width: "100%",height:"100%" }, 400
                    );
                    that.siblings().fadeOut();
                    $humIcon9.fadeOut();
                    $iconLeft.fadeOut();
                    $iconRight.fadeOut();
                    $(".cube").off("click");
                    $(".backToBegin").css({display:'block'});
                    $(".backToBegin").animate({
                        width:'300px',opacity:'0.5'
                    },600);
                    $(".backToBegin").animate({
                        width:'40px',opacity:'1'
                    },250);
                    setTimeout(function(){
                        $(".backToBegin").on('click',function () {
                            e.stopPropagation();
                            that.animate(
                                {width:'300px',height:'400px'},400
                            ).css({transform:'translateZ('+260+'px'+')'});
                            that.siblings().fadeIn();
                            $humIcon9.fadeIn();
                            $iconLeft.fadeIn();
                            $iconRight.fadeIn();
                            that.children($(".backToBegin")).fadeOut();
                            $(".backToBegin").off("click");
                            $(".backToBegin").fadeOut();
                            text1();                                                          //怎么取消继承问题!!!
                        })
                    },850);

                }
            });
    }
    text1();
    //子页面点开功能完成


    //

    //



});
