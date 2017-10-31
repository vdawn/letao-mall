/**
 * Created by Administrator on 2017/10/30 0030.
 */
//表单校验功能
//1. 用户名不能为空
//2. 用户密码不能为空
//3. 用户密码必须是6-12位
var $form = $("#form");
$form.bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields:{
        //配置所有的字段的规则,对应表单中的name属性
        username:{
            validators:{
                notEmpty:{
                    message:"用户名不能为空"
                },
                callback:{
                    message:"用户名错误"
                }
            }
        },
        password:{
            validators:{
                notEmpty:{
                    message:"用户密码不能为空"
                },
                stringLength:{
                    min:6,
                    max:12,
                    message:"用户密码必须是6-12位"
                },
                callback:{
                    message:"用户密码错误"
                }
            }
        }
    }
});


$form.on("success.form.bv",function(e){
    e.preventDefault();


    $.ajax({
        type:"post",
        url:"/employee/employeeLogin",
        data:$form.serialize(),
        success:function(data){
            if(data.success){
                location.href = "index.html";
            }else{
                if(data.error===1000){
                    validator.updataStatus("username","INVALID","callback");
                }
                if(data.error === 1001){
                    validator.updataStatus("password","INVALID","callback");
                }
            }
        }

    })

//3. 表单重置功能
    $("[type='reset']").on("click", function () {
        //调用插件的重置表单的方法。
        ///获取到表单校验实例，调用了resetForm方法，重置表单。
        validator.resetForm();
    })


});

