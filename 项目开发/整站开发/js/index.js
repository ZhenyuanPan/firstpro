/**
 * Created by zhenyuan on 2017/8/23.
 */
$(function () {
    var $searchIpt = $("#search-ipt");
    $("#search-icon").on('click',function () {
        alert($searchIpt.val());
    });
    $searchIpt.on('keypress',function (e) {
        if(e.watch==13){
            alert(this.value);
        }
    })
});