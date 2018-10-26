$(function() {
    //获取验证码
    $('#getCode').on('tap', function() {
        $.ajax({
            type: 'get',
            url: '/user/vCode',
            success: function(response) {
                console.log(response);
            }
        })
    })
    $('#regBtn').on('tap', function() {
        //获取用户注册信息
        var userName = $('#username').val();
        var mobile = $('#mobile').val();
        var passWord = $('#password').val();
        var againPass = $('#againPass').val();
        var checkCode = $('#checkCode').val();

        //对用户信息进行校验
        if (!userName) {
            MutationEvent.toast('请输入用户名');
            return;
        }
        if (mobile.length < 11) {
            mui.toast('请输入合法手机号');
        }
        if (passWord != againPass) {
            mui.toast("两次输入的密码不一样");
            return;
        }


        //调用接口实现注册功能
        $.ajax({
            type: 'post',
            url: '/user/register',
            data: {
                username: userName,
                password: passWord,
                mobile: mobile,
                vCode: checkCode
            },
            success: function(res) {
                console.log(res);
                if (res) {
                    mui.toast('注册成功');
                    setTimeout(function() {
                        location.href = "login.html";
                    }, 2000)
                }
            }
        })

    })
})