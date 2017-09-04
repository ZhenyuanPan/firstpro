/**
 * Created by zhenyuan on 2017/8/22.
 */
define(['jquery'],function () {
    function Carousel(settings) {
        this.$container=$('<div class="carousel-container"></div>');
        this.$tabs=$('<ul class="carousel-tabs"></ul>');
        this.$imgs=$('<div class="carousel-imgs"></div>');
        this.$arrows=$('<div class="carousel-arrows"></div>');
        this.$prve=$('<span class="carousel-prev">&lt;</span>');
        this.$next=$('<span class="carousel-next">&gt;</span>');
        this.defaultSettings={
            selector:document.body,
            imgArr:[],
            speed:1000,
            btnStyle:'square',//circle
            arrowPos:'bottom'//center
        };
        $.extend(this.defaultSettings,settings)
    }
    Carousel.prototype.init=function () {
        this.$container.append(this.$tabs).append(this.$imgs).append(this.$arrows);
        this.$arrows.append(this.$prve).append(this.$next);
        for(var i=0;i<this.defaultSettings.imgArr.length;i++){
            this.$tabs.append('<li>'+(i+1)+'</li>');
            this.$imgs.append('<img src='+this.defaultSettings.imgArr[i]+'/>');
        }
        $('img',this.$imgs).eq(0).addClass('selected');//jQ选择器第二个参数是个选取范围
        $('li',this.$tabs).eq(0).addClass('selected');
        $(this.defaultSettings.selector).append(this.$container);

        //怎么用that写
        var nowIndex=0;
        $('li',this.$tabs).on('mouseover',function (e) {
            nowIndex=$(e.target).index();//jq对象可以有个方法index()用来返回这个对象的下标//函数中通过参数x.target获得鼠标对象(当前鼠标点击的对象)
            /*$(this).addClass('selected').siblings().removeClass('selected');
            $('img',this.$imgs).eq(nowIndex).addClass('selected').siblings().removeClass('selected');*///jQ都是js写的函数，想调用函数得加（）
            changeImg.call(this);
        }.bind(this));

        this.$prve.on('click',function () {
            nowIndex--;
            if(nowIndex==-1){
                nowIndex=this.defaultSettings.imgArr.length-1
            }
            changeImg.call(this);
        }.bind(this));
        this.$next.on('click',function (){
            nowIndex++;
            if(nowIndex==this.defaultSettings.imgArr.length){
                nowIndex=0;
            }
            changeImg.call(this);
        }.bind(this));


        //在prototype.方法 里面再写方法(函数里写函数)私有方法(局部函数)
   /*   var timer = setInterval(function () {
            this.$next.trigger('click');
        }.bind(this),this.defaultSettings.speed);//给一个函数设bind 里面所有的this都改变了？？*/
        var timer;

        this.$container.hover(function () {
            clearInterval(timer);
        },function () {
            go.call(this);
        }.bind(this));

        go.call(this);

        function changeImg() {
            $('li',this.$tabs).eq(nowIndex).addClass('selected').siblings().removeClass('selected');
            $('img',this.$imgs).eq(nowIndex).addClass('selected').siblings().removeClass('selected');
        }  //这里面this是指哪??

        function go() {
         timer = setInterval(function () {
             //写在了函数里所以这个this=>window
                 this.$next.trigger('click');
            }.bind(this),this.defaultSettings.speed);

        }


    };

    return Carousel;
});