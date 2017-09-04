/**
 * Created by zhenyuan on 2017/8/22.
 */
require(['jquery','carousel'],function ($,Carousel) {
    var settings1 ={
        selector:'#container1',
        imgArr :['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        speed:500,
        btnStyle:'square',//circle
        arrowPos:'bottom'//center
    };
    var carousel1 =new Carousel(settings1);
    carousel1.init();          //新建的对象carousel1.属性;把他的属性settings1传进去
    var settings2 ={
        selector:'#container2',
        imgArr :['img/1.jpg','img/2.jpg','img/3.jpg'],
        speed:1500,
        btnStyle:'square',//circle
        arrowPos:'bottom'//center
    };
    var carousel2 =new Carousel(settings2);
    carousel2.init();
});