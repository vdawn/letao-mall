//开启左侧的区域滚动
var sc = mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005,
    indicators: false
});
//渲染一级分类{
$.ajax({
    type: "get",
    url: "/category/queryTopCategory",
    success: function (data) {
        var html = template("tpl", data);
        $(".lt_category_l ul").html(html);
        // console.log(data);
        renderSecond(data.rows[0].id);

    }
});

function renderSecond(id) {
    $.ajax({
        type: "get",
        url: "/category/querySecondCategory",
        data: {
            id: id
        },
        success: function (data) {
            $(".lt_category_r ul").html(template("tpl2", data));
            // console.log(data);
        }

    });
}


$(".lt_category_l").on('click',li,function(){
    $(this).addClass("now").siblings().removeClass(now);

});