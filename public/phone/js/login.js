$(function() {
    $('#loginBtn').on('tap', function() {
        //获取用户输入表单的信息
        var userName = $('#username').val();
        var passWord = $('#password').val();

        if (!userName) {
            mui.toast("请输入用户名");
            return;
        }

        if (!passWord) {
            mui.toast("请输入密码");
            return;
        }
        //调用登录接口实现用户登录
        $.ajax({
            type: 'post',
            url: '/user/login',
            data: {
                username: userName,
                password: passWord
            },
            beforeSend: function() {
                $('#login-btn').html("正在登录...");
            },
            success: function(res) {
                console.log(res);
                if (res.success) {
                    mui.toast("登录成功");

                    $('#login-btn').html("登录");
                    location.href = 'user.html';
                    // setTimeout(function() {
                    //     location.href = "user.html";
                    // }, 2000);
                }
            }
        })
    })
})