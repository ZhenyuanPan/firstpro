/**
 * Created by zhenyuan on 2017/8/27.
 */
$(function () {
    var $advImg = $('#adv img');
    var $appWatchDown =$("#apple-watch .app-watch-down");
    var $appWatchDownChange = $('#apple-watch .app-watch-down-change');

    var $html = $(":not(.dialog-container)");
    var $body = $('#head,#adv,#rewards,#app,#streamer,#mosaic,#wsg,#apple-watch,#collection,#reserve,#footer');

    var $head = $("#head");
    var $menu = $("#head .menu-small");
    var $menuBig = $("#head .menu-big");
    var $headImg = $("#head .img-logo-wrapper");
    var $login = $("#head .log-btn");
    var $headHelp = $("#headHelp");
    var $dialogMask = $(".dialog-mask");
    var $main = $('.dialog-main');
    var $midNavDiv1 = $('.mid-nav-li-div1');
    var $midNavDiv2 = $('.mid-nav-li-div2');
    var $midNavLi1 = $('.mid-nav-div-li1');
    var $midNavLi2 = $('.mid-nav-div-li2');




    $(window).on('resize',function () {
        if($(window).innerWidth()<800){
            $advImg.attr({src:'img/Starbucksadv2.jpg'})
        }else{
            $advImg.attr({src:'img/Starbucksadv1.jpg'})
        }
    });
    $(window).on('resize',function (){
        if ($(window).innerWidth()<1177){
            $appWatchDown.css({display:'none'});
            $appWatchDownChange.css({display:'block'});
        }else {
            $appWatchDown.css({display:'block'});
            $appWatchDownChange.css({display:'none'});
        }
    });
    $body.on("mousewheel",function (event,delta) {
            if(delta==-1){
                $head.stop().slideUp();
                $menu.stop().slideUp();
                $headImg.stop().slideUp();
                $login.stop().slideUp();
                $menuBig.stop().slideUp();
                $headHelp.stop().slideUp();
            }else if(delta==1){
                $head.stop().slideDown();
                $menu.stop().slideDown();
                $headImg.stop().slideDown();
                $login.stop().slideDown();
                $menuBig.stop().slideDown();
                $headHelp.stop().slideDown();
            }
    });


    $dialogMask.on('mousewheel',function () {
        dialogMainHide();
        $dialogMask.css({display:'none'});
    });
    
    $menu.on('click',function () {
        $dialogMask.css({background:"rgba(115, 115, 115, 0.5)",position: 'fixed', top: '0', bottom: '0', left: '0', right: '0',zIndex:'99',display:'block'});
        $main.css({width:'auto',display:'block'});
        $(window).off('scroll');

    });
    function dialogMainHide() {
        var totalWidth = $main.innerWidth();
        var currentWidth = totalWidth;
        var decrement = totalWidth/12;
        var timer = setInterval(function () {
            currentWidth = currentWidth - decrement;
            $main.css({width:currentWidth});
            if(currentWidth <= 0){
                clearInterval(timer);
                $main.hide();
            }
        },10)
    }
    $midNavDiv1.on('click',function () {
        $midNavLi1.slideToggle();
    });
    $midNavDiv2.on('click',function () {
        $midNavLi2.slideToggle();
    })

});