/**
 * Created by Administrator on 2017/11/3 0003.
 */
$(function(){
   mui(".mui-scroll-wrapper").scroll({
       indicators:false
   });

   var data = {
       proName:'',
       brandId:'',
       price:'',
       num:'',
       page:1,
       pageSize:10
   }

   function render(data){
       $.ajax({
           type:"get",
           url:"/product/queryProduct",
           data:data,
           success:function(data){
               setTimeout(function(){
                   $(".lt_product").html(template("tpl",data));
               },1000);
           }
       });
   }

   var key = tools.getParam("key");
   $(".search_text").val(key);
   data.proName = key;
   render(data);

   $()

});