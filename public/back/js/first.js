$(function(){
   var currentPage = 1;
   var pageSize = 2;

   function render(){
       $.ajax({
           type:"get",
           url:"/category/queryTopCategoryPaging",
           data:{
               page:currentPage,
               pageSize:pageSize
           },
           success:function(data){

               $("tbody").html(template("tpl",data));

               $("#paginator").bootstrapPaginator({
                   bootstrapMajorVersion: 3,
                   currentPage: currentPage,
                   totalPages: Math.ceil(data.total / pageSize),
                   size: "small",
                   onPageClicked(a, b, c, page){
                       currentPage = page;
                       render();
                   }
               });

           }
       })
   }
   render();
});