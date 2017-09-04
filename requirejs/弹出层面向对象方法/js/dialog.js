/**
 * Created by zhenyuan on 2017/8/21.
 */
requirejs.config({                                 //config:配置
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function ($) {
    function Dialog(setting) {
        this.$container=$("<div class='dialog-container'></div>");
        this.$mask=$("<div class='dialog-mask'></div>");
        this.$main=$("<div class='dialog-main'></div>");
        this.$title=$("<div class='dialog-title'></div>");
        this.$item=$("<div class='dialog-title-item'></div>");
        this.$close=$("<div class='dialog-title-close'>[X]</div>");
        this.$content=$("<div class='dialog-content'></div>");
        this.defaultSettings ={
            width:400,
            height:300,
            title:'弹出层',
            content:""
        };
        $.extend(this.defaultSettings,setting);
    }                               //方法写在原型下面(实例化方法).属性写在类里
    Dialog.prototype.open=function () {
        this.$container.append(this.$mask).append(this.$main);
        this.$main.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        $('body').append(this.$container);

        this.$item.html(this.defaultSettings.title);
        this.$main.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height,
            marginLeft:-this.defaultSettings.width/2,
            marginTop:-this.defaultSettings.height/2
        });
        if (this.defaultSettings.content.indexOf('.html'!=-1)){
            this.$content.load(this.defaultSettings.content);
        }else{
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on('click',function () {
            this.close();
        }.bind(this));

    };
    Dialog.prototype.close =function () {
        this.$container.remove();
    };
    return Dialog;
});
