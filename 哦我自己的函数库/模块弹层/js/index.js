/**
 * Created by zhenyuan on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','dialog'],function ($,Dialog) {
    $('#open').on('click',function () {
        var settings={
            width:500,
            height:300,
            title:'弹出层打开',
            /*content:'恭喜发财'*/
            content:'content.html'                         //index.html在哪引用这个js,这个文件就在那个index.html所在根目录开始找
        };
        var dialog = new Dialog(settings);
        dialog.open();
    })
});