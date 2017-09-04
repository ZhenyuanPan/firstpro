/**
 * Created by zhenyuan on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'],function ($) {
    function Dialog(settings) {
        this.$container=$('<div class="dialog-container"></div>');
        this.$mask=$('<div class="dialog-mask"></div>');
        this.$main=$('<div class="dialog-main"></div>');
        this.$title=$('<div class="dialog-title"></div>');
        this.$close=$('<div class="dialog-title-close">[X]</div>');
        this.$item=$('<div class="dialog-title-item"></div>');
        this.$content=$('<div class="dialog-content"></div>');
        this.defaultSettings={
            width:400,
            height:300,
            title:'弹出层'
        };
        $.extend(this.defaultSettings,settings);
    }
    Dialog.prototype.open=function () {
        this.$container.append(this.$mask).append(this.$main);
        this.$main.append(this.$title).append(this.$content);
        this.$title.append(this.$close).append(this.$item);
        $('body').append(this.$container);

        this.$item.html(this.defaultSettings.title);
        this.$main.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height,
            marginTop:-this.defaultSettings.height/2,
            marginLeft:-this.defaultSettings.width/2
        });
        if (this.defaultSettings.content.indexOf('.html')!=-1){
            this.$content.load(this.defaultSettings.content);
        }else {
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on('click',function () {
            this.close();
        }.bind(this));     //fn函数.bind(this),这个里面的this是当前函数对象外面的对象
    };
    Dialog.prototype.close=function () {
        this.$container.remove();
    };
    return Dialog;
});